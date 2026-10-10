/**
 * Stravifx Learn — paid waitlist, server side.
 *
 * Runs as Supabase Edge Functions. Everything here uses only web-standard APIs
 * (fetch, Request/Response, Web Crypto), so the same code is exercised by the
 * local tests under Node.
 *
 * Secrets (Supabase → Edge Functions → Secrets):
 *   PAYSTACK_SECRET_KEY   Paystack secret key (Live_Secret_Key is also accepted)
 *   LEARN_PRICE_AMOUNT    price in whole units, e.g. 25
 *   SITE_URL              the site's public origin, e.g. https://stravifx.com
 *   LEARN_PRICE_CURRENCY  e.g. USD or KES; defaults to KES
 *   LEARN_REFUND_POLICY   optional one-liner shown under the pay button
 * Supabase injects SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY by itself.
 */

export type Env = (name: string) => string | undefined;

const TABLE = "learn_waitlist";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const REFERENCE_PATTERN =
  /^learn_[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...CORS, "Content-Type": "application/json" },
  });

const fail = (status: number, code: string, message: string, reason?: string) =>
  json({ error: code, message, ...(reason ? { reason } : {}) }, status);

/** Paystack said no. `reason` is Paystack's own wording, e.g. "Currency not supported by merchant". */
class PaystackError extends Error {
  constructor(
    path: string,
    status: number,
    readonly reason: string,
  ) {
    super(`Paystack ${path} failed (${status}): ${reason}`);
  }
}

// ── Configuration ───────────────────────────────────────────────────────────

function config(env: Env) {
  const read = (...names: string[]) => {
    for (const name of names) {
      const value = env(name)?.trim();
      if (value) return value;
    }
    return "";
  };
  // Accepts "25", "25.50", "$25", "USD 25" or "KES 2,500": digits are the amount,
  // and a currency written next to them is used unless LEARN_PRICE_CURRENCY says otherwise.
  const rawAmount = read("LEARN_PRICE_AMOUNT");
  const amount = Number(rawAmount.replace(/[^0-9.]/g, "")) || 0;
  const hintedCurrency = /\$|usd/i.test(rawAmount)
    ? "USD"
    : /kes|ksh/i.test(rawAmount)
      ? "KES"
      : "";
  return {
    paystackKey: read("PAYSTACK_SECRET_KEY", "Live_Secret_Key"),
    paystackBase: read("PAYSTACK_API_BASE") || "https://api.paystack.co",
    supabaseUrl: read("SUPABASE_URL").replace(/\/+$/, ""),
    serviceKey: read("SUPABASE_SERVICE_ROLE_KEY"),
    siteUrl: read("SITE_URL").replace(/\/+$/, ""),
    allowedOrigins: read("ALLOWED_ORIGINS")
      .split(",")
      .map((origin) => origin.trim().replace(/\/+$/, ""))
      .filter(Boolean),
    amount,
    /** Paystack takes amounts in the smallest unit (cents, kobo, pesewas). */
    amountMinor: Math.round(amount * 100),
    currency: (
      read("LEARN_PRICE_CURRENCY") ||
      hintedCurrency ||
      "KES"
    ).toUpperCase(),
    refundPolicy: read("LEARN_REFUND_POLICY"),
  };
}

type Config = ReturnType<typeof config>;

const isOpen = (c: Config) =>
  Boolean(
    c.paystackKey && c.supabaseUrl && c.serviceKey && c.siteUrl && c.amount > 0,
  );

/** "$25" or "KES 2,500" — derived from the amount actually charged, so the two can't drift. */
function priceLabel(c: Config): string {
  if (!(c.amount > 0)) return "";
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: c.currency,
    // Dollars read best as "$25"; other currencies keep their code ("KES 2,500").
    currencyDisplay: c.currency === "USD" ? "narrowSymbol" : "code",
    minimumFractionDigits: Number.isInteger(c.amount) ? 0 : 2,
  })
    .format(c.amount)
    .replace(/ /g, " ");
}

/** Where the buyer returns after paying: the calling site if we recognise it, else SITE_URL. */
function returnOrigin(request: Request, c: Config): string {
  const origin = (request.headers.get("origin") ?? "").replace(/\/+$/, "");
  const known = [c.siteUrl, ...c.allowedOrigins].includes(origin);
  const local = /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin);
  return known || local ? origin : c.siteUrl;
}

// ── Database (PostgREST with the service role key; RLS blocks everyone else) ──

async function db(
  c: Config,
  query: string,
  init: RequestInit = {},
): Promise<Response> {
  const response = await fetch(`${c.supabaseUrl}/rest/v1/${TABLE}${query}`, {
    ...init,
    headers: {
      apikey: c.serviceKey,
      Authorization: `Bearer ${c.serviceKey}`,
      "Content-Type": "application/json",
      ...init.headers,
    },
  });
  if (!response.ok) {
    throw new Error(
      `Database ${init.method ?? "GET"} failed (${response.status}): ${await response.text()}`,
    );
  }
  return response;
}

type Seat = {
  email: string;
  amount_minor: number;
  currency: string;
  status: "pending" | "paid" | "failed";
};

async function findSeat(c: Config, reference: string): Promise<Seat | null> {
  const response = await db(
    c,
    `?select=email,amount_minor,currency,status&reference=eq.${encodeURIComponent(reference)}&limit=1`,
  );
  const rows = (await response.json()) as Seat[];
  return rows[0] ?? null;
}

// ── Paystack ────────────────────────────────────────────────────────────────

async function paystack<T>(
  c: Config,
  path: string,
  init: RequestInit = {},
): Promise<T> {
  const response = await fetch(`${c.paystackBase}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${c.paystackKey}`,
      "Content-Type": "application/json",
      ...init.headers,
    },
  });
  const body = (await response.json().catch(() => null)) as {
    status?: boolean;
    message?: string;
    data?: T;
  } | null;
  if (!response.ok || !body?.status || !body.data) {
    throw new PaystackError(
      path,
      response.status,
      body?.message ?? "no response body",
    );
  }
  return body.data;
}

/** Paystack signs each webhook body with HMAC-SHA512 using the secret key. */
async function isValidSignature(
  c: Config,
  rawBody: string,
  signature: string | null,
): Promise<boolean> {
  if (!signature || !c.paystackKey) return false;
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(c.paystackKey),
    { name: "HMAC", hash: "SHA-512" },
    false,
    ["sign"],
  );
  const digest = await crypto.subtle.sign("HMAC", key, encoder.encode(rawBody));
  const expected = [...new Uint8Array(digest)]
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
  // Constant-time comparison
  if (expected.length !== signature.length) return false;
  let diff = 0;
  for (let i = 0; i < expected.length; i++) {
    diff |= expected.charCodeAt(i) ^ signature.charCodeAt(i);
  }
  return diff === 0;
}

// ── The one place a seat becomes "paid" ─────────────────────────────────────

export type Confirmation = {
  state: "paid" | "pending" | "failed" | "unknown";
  email?: string;
};

/**
 * Called by both the return page and the webhook, so it is idempotent, and it
 * never trusts the caller: it asks Paystack for the transaction and checks the
 * amount against what was quoted.
 */
async function confirmPayment(
  c: Config,
  reference: string,
): Promise<Confirmation> {
  if (!REFERENCE_PATTERN.test(reference)) return { state: "unknown" };

  const seat = await findSeat(c, reference);
  if (!seat) return { state: "unknown" };
  if (seat.status === "paid") return { state: "paid", email: seat.email };

  const tx = await paystack<{
    id: number;
    status: string;
    amount: number;
    currency: string;
    paid_at: string | null;
    channel: string | null;
  }>(c, `/transaction/verify/${encodeURIComponent(reference)}`);
  const now = new Date().toISOString();
  const where = `?reference=eq.${encodeURIComponent(reference)}`;

  if (tx.status === "success") {
    if (tx.amount !== seat.amount_minor || tx.currency !== seat.currency) {
      console.error(
        `[learn] ${reference}: paid ${tx.amount} ${tx.currency}, expected ${seat.amount_minor} ${seat.currency}`,
      );
      return { state: "failed", email: seat.email };
    }
    await db(c, `${where}&status=neq.paid`, {
      method: "PATCH",
      headers: { Prefer: "return=minimal" },
      body: JSON.stringify({
        status: "paid",
        paid_at: tx.paid_at ?? now,
        paystack_id: tx.id,
        channel: tx.channel,
        updated_at: now,
      }),
    });
    return { state: "paid", email: seat.email };
  }

  if (tx.status === "failed" || tx.status === "reversed") {
    await db(c, `${where}&status=eq.pending`, {
      method: "PATCH",
      headers: { Prefer: "return=minimal" },
      body: JSON.stringify({ status: "failed", updated_at: now }),
    });
    return { state: "failed", email: seat.email };
  }

  // abandoned, pending, ongoing, processing, queued: not paid yet, may still complete
  return { state: "pending", email: seat.email };
}

// ── Handlers ────────────────────────────────────────────────────────────────

/**
 * learn-checkout
 *   GET  → the offer: whether checkout is open, the price label, the refund line
 *   POST → { fullName, email } → records a pending seat, returns Paystack's pay page
 */
export async function handleCheckout(
  request: Request,
  env: Env,
): Promise<Response> {
  if (request.method === "OPTIONS")
    return new Response(null, { headers: CORS });
  const c = config(env);

  if (request.method === "GET") {
    return json({
      open: isOpen(c),
      priceLabel: priceLabel(c),
      refundPolicy: c.refundPolicy,
    });
  }
  if (request.method !== "POST") {
    return fail(405, "method", "Method not allowed.");
  }
  if (!isOpen(c)) return fail(503, "closed", "Checkout isn't open yet.");

  const body = (await request.json().catch(() => null)) as Record<
    string,
    unknown
  > | null;
  const fullName = String(body?.fullName ?? "")
    .trim()
    .replace(/\s+/g, " ");
  const email = String(body?.email ?? "")
    .trim()
    .toLowerCase();

  // Bot trap: a hidden checkbox no person can see or tick. It is a checkbox, not
  // a text box, because browsers and password managers autofill hidden text
  // boxes and that locked real buyers out. Only a literal `true` counts.
  if (body?.trap === true) {
    return fail(400, "invalid", "Something went wrong. Please try again.");
  }
  if (fullName.length < 2 || fullName.length > 80) {
    return fail(400, "name", "Enter your full name.");
  }
  if (email.length > 254 || !EMAIL_PATTERN.test(email)) {
    return fail(400, "email", "Enter a valid email address.");
  }

  try {
    const paid = await db(
      c,
      `?select=id&email=eq.${encodeURIComponent(email)}&status=eq.paid&limit=1`,
    );
    if (((await paid.json()) as unknown[]).length > 0) {
      return fail(409, "already", "This email is already on the waitlist.");
    }

    const reference = `learn_${crypto.randomUUID()}`;
    await db(c, "", {
      method: "POST",
      headers: { Prefer: "return=minimal" },
      body: JSON.stringify({
        reference,
        email,
        full_name: fullName,
        amount_minor: c.amountMinor,
        currency: c.currency,
      }),
    });

    let data: { authorization_url: string };
    try {
      data = await paystack<{ authorization_url: string }>(
        c,
        "/transaction/initialize",
        {
          method: "POST",
          body: JSON.stringify({
            email,
            amount: c.amountMinor,
            currency: c.currency,
            reference,
            callback_url: `${returnOrigin(request, c)}/learn/welcome`,
            metadata: {
              product: "Stravifx Learn waitlist",
              custom_fields: [
                {
                  display_name: "Name",
                  variable_name: "full_name",
                  value: fullName,
                },
              ],
            },
          }),
        },
      );
    } catch (error) {
      // Paystack refused, so this seat can never be paid: don't leave it pending.
      await db(c, `?reference=eq.${reference}&status=eq.pending`, {
        method: "PATCH",
        headers: { Prefer: "return=minimal" },
        body: JSON.stringify({
          status: "failed",
          updated_at: new Date().toISOString(),
        }),
      }).catch(() => undefined);
      throw error;
    }
    return json({ url: data.authorization_url });
  } catch (error) {
    console.error("[learn] checkout failed", error);
    if (error instanceof PaystackError) {
      return fail(
        502,
        "paystack",
        "We couldn't start the payment. Please try again in a moment.",
        error.reason,
      );
    }
    return fail(
      502,
      "unavailable",
      "We couldn't start the payment. Please try again in a moment.",
    );
  }
}

/** learn-confirm: GET ?reference=… → { state, email } after re-checking with Paystack. */
export async function handleConfirm(
  request: Request,
  env: Env,
): Promise<Response> {
  if (request.method === "OPTIONS")
    return new Response(null, { headers: CORS });
  const c = config(env);
  const reference = new URL(request.url).searchParams.get("reference") ?? "";
  if (!isOpen(c) || !REFERENCE_PATTERN.test(reference)) {
    return json({ state: "unknown" } satisfies Confirmation);
  }
  try {
    return json(await confirmPayment(c, reference));
  } catch (error) {
    console.error("[learn] confirm failed", error);
    return json({ state: "pending" } satisfies Confirmation);
  }
}

/**
 * paystack-webhook: Paystack calls this after a payment. It is what makes a seat
 * "paid" even if the buyer closes the tab before returning to the site.
 */
export async function handleWebhook(
  request: Request,
  env: Env,
): Promise<Response> {
  if (request.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }
  const c = config(env);
  const rawBody = await request.text();

  if (
    !(await isValidSignature(
      c,
      rawBody,
      request.headers.get("x-paystack-signature"),
    ))
  ) {
    return new Response("Invalid signature", { status: 401 });
  }

  let event: { event?: string; data?: { reference?: string } };
  try {
    event = JSON.parse(rawBody);
  } catch {
    return new Response("Invalid payload", { status: 400 });
  }

  const reference = event.data?.reference ?? "";
  if (event.event === "charge.success" && REFERENCE_PATTERN.test(reference)) {
    try {
      await confirmPayment(c, reference);
    } catch (error) {
      // A non-2xx makes Paystack retry, which is what we want if the database blipped.
      console.error("[learn] webhook confirm failed", error);
      return new Response("Temporary failure", { status: 500 });
    }
  }
  return new Response("ok");
}

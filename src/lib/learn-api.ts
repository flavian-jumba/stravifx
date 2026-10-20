/**
 * The site's side of the Learn waitlist. All payment logic and every secret
 * live in Supabase Edge Functions (supabase/functions); the site only needs
 * the project's public URL to reach them.
 */

/**
 * The Supabase project's public address. It is not a secret (every visitor's
 * browser calls it), so it has a built-in default and the site works on any
 * host without configuration. NEXT_PUBLIC_SUPABASE_URL overrides it.
 */
const SUPABASE_URL = (
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "https://goizzlaqynwdzoueqvmp.supabase.co"
).replace(/\/+$/, "");

const FUNCTIONS_BASE = `${SUPABASE_URL}/functions/v1`;

export const LEARN_CHECKOUT_ENDPOINT = `${FUNCTIONS_BASE}/learn-checkout`;

export type LearnOffer = {
  /** False until the functions are deployed and their secrets are set. */
  open: boolean;
  /** "KES 3,900" — comes from the amount Paystack will actually charge. */
  priceLabel: string;
  /** "$30" — the price shown to visitors. Same as priceLabel unless it was converted. */
  displayLabel: string;
  refundPolicy: string;
};

const CLOSED: LearnOffer = {
  open: false,
  priceLabel: "",
  displayLabel: "",
  refundPolicy: "",
};

/**
 * Shillings per US dollar, used only to show the KES charge in dollars.
 * Paystack still charges the KES amount; update this if the rate drifts.
 */
const KES_PER_USD = 129;

/** "KES 3,900" → "$30". Any other label is shown as it is. */
export function toDisplayLabel(priceLabel: string): string {
  const match = /^KES\s*([\d,]+(?:\.\d+)?)$/i.exec(priceLabel.trim());
  if (!match) return priceLabel;
  const usd = Math.round(Number(match[1].replace(/,/g, "")) / KES_PER_USD);
  return usd > 0 ? `$${usd.toLocaleString("en")}` : priceLabel;
}

/** Asks Supabase for the current offer. Re-checked every five minutes. */
export async function fetchLearnOffer(): Promise<LearnOffer> {
  try {
    const response = await fetch(LEARN_CHECKOUT_ENDPOINT, {
      next: { revalidate: 300 },
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) return CLOSED;
    const offer = (await response.json()) as Partial<LearnOffer>;
    const priceLabel = offer.priceLabel ?? "";
    return {
      open: offer.open === true && Boolean(priceLabel),
      priceLabel,
      displayLabel: toDisplayLabel(priceLabel),
      refundPolicy: offer.refundPolicy ?? "",
    };
  } catch {
    return CLOSED;
  }
}

export type LearnConfirmation = {
  state: "paid" | "pending" | "failed" | "unknown";
  email?: string;
};

/** Asks Supabase (which asks Paystack) whether this payment went through. */
export async function confirmLearnPayment(
  reference: string,
): Promise<LearnConfirmation> {
  try {
    const response = await fetch(
      `${FUNCTIONS_BASE}/learn-confirm?reference=${encodeURIComponent(reference)}`,
      { cache: "no-store", signal: AbortSignal.timeout(15000) },
    );
    if (!response.ok) return { state: "pending" };
    const result = (await response.json()) as LearnConfirmation;
    return ["paid", "pending", "failed", "unknown"].includes(result.state)
      ? result
      : { state: "unknown" };
  } catch {
    // Couldn't reach Supabase: don't tell a buyer their payment failed.
    return { state: "pending" };
  }
}

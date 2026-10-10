/**
 * The site's side of the Learn waitlist. All payment logic and every secret
 * live in Supabase Edge Functions (supabase/functions); the site only needs
 * the project's public URL to reach them.
 */

const FUNCTIONS_BASE = `${(process.env.NEXT_PUBLIC_SUPABASE_URL ?? "").replace(/\/+$/, "")}/functions/v1`;

export const LEARN_CHECKOUT_ENDPOINT = `${FUNCTIONS_BASE}/learn-checkout`;

export type LearnOffer = {
  /** False until the functions are deployed and their secrets are set. */
  open: boolean;
  /** "KES 2,500" — comes from the amount Paystack will actually charge. */
  priceLabel: string;
  refundPolicy: string;
};

const CLOSED: LearnOffer = { open: false, priceLabel: "", refundPolicy: "" };

/** Asks Supabase for the current offer. Re-checked every five minutes. */
export async function fetchLearnOffer(): Promise<LearnOffer> {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) return CLOSED;
  try {
    const response = await fetch(LEARN_CHECKOUT_ENDPOINT, {
      next: { revalidate: 300 },
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) return CLOSED;
    const offer = (await response.json()) as Partial<LearnOffer>;
    return {
      open: offer.open === true && Boolean(offer.priceLabel),
      priceLabel: offer.priceLabel ?? "",
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
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) return { state: "unknown" };
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

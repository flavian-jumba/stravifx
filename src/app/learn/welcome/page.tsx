import type { Metadata } from "next";
import Image from "next/image";
import { SITE } from "@/lib/site";
import { Sparkle } from "@/components/icons";
import { confirmLearnPayment, type LearnConfirmation } from "@/lib/learn-api";

export const metadata: Metadata = {
  title: { absolute: "StraviFX Learn — Waitlist" },
  robots: { index: false, follow: false },
};

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

const COPY: Record<
  LearnConfirmation["state"],
  { kicker: string; title: string; body: string; cta: string; href: string }
> = {
  paid: {
    kicker: "Payment received",
    title: "You’re on the waitlist.",
    body: "Your seat for the first StraviFX Learn cohort is reserved. We’ll email you before it opens.",
    cta: "Back to StraviFX",
    href: "/",
  },
  pending: {
    kicker: "Not confirmed yet",
    title: "We haven’t received your payment.",
    body: "If you completed it, give it a moment and refresh this page. If you closed the payment window, nothing was charged and you can start again.",
    cta: "Try again",
    href: "/#learn",
  },
  failed: {
    kicker: "Payment not completed",
    title: "That payment didn’t go through.",
    body: "You haven’t been added to the waitlist. If money left your account, reply to your Paystack receipt and we’ll sort it out.",
    cta: "Try again",
    href: "/#learn",
  },
  unknown: {
    kicker: "Nothing to show",
    title: "We couldn’t find that payment.",
    body: "This link doesn’t match a waitlist payment. If you were just paying, start again from the Learn section.",
    cta: "Go to Learn",
    href: "/#learn",
  },
};

/** Where Paystack sends the buyer back to. The payment is re-checked server-side before anything is shown. */
export default async function LearnWelcomePage({ searchParams }: Props) {
  const params = await searchParams;
  const raw = params.reference ?? params.trxref ?? "";
  const reference = Array.isArray(raw) ? (raw[0] ?? "") : raw;

  const result: LearnConfirmation = reference
    ? await confirmLearnPayment(reference)
    : { state: "unknown" };

  const copy = COPY[result.state];
  const paid = result.state === "paid";

  return (
    <main className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden bg-ink px-6 py-24 text-center">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_45%_at_50%_0%,rgba(246,186,24,0.16),transparent_70%)]"
      />
      <div className="relative w-full max-w-[640px]">
        <Image
          src={SITE.logo.src}
          alt="StraviFX"
          width={SITE.logo.width}
          height={SITE.logo.height}
          priority
          className="mx-auto h-10 w-auto"
        />

        <div className="mt-12 rounded-[32px] border border-white/[0.08] bg-ink-2 px-6 py-10 sm:px-12 sm:py-14">
          <p
            className={`flex items-center justify-center gap-2.5 font-mono text-xs uppercase tracking-[0.28em] ${paid ? "text-gold" : "text-fg-3"}`}
          >
            {paid ? <Sparkle className="size-3.5" /> : null}
            {copy.kicker}
          </p>
          <h1 className="mt-5 text-[clamp(2rem,8vw,3.5rem)] font-semibold leading-[1.02] tracking-[-0.04em]">
            {copy.title}
          </h1>
          <p className="mx-auto mt-5 max-w-[460px] text-[1.0625rem] leading-[1.5] text-fg-2">
            {copy.body}
          </p>
          {result.email ? (
            <p className="mt-6 inline-block max-w-full truncate rounded-full border border-white/10 bg-black/40 px-4 py-2 font-mono text-sm text-fg">
              {result.email}
            </p>
          ) : null}
          <div className="mt-9">
            <a
              href={copy.href}
              className={`inline-flex h-13 items-center justify-center rounded-full px-8 text-[1.0625rem] font-semibold transition-colors duration-300 ${
                paid
                  ? "bg-gold text-black hover:bg-gold-soft"
                  : "border border-white/20 text-fg hover:border-gold/60"
              }`}
            >
              {copy.cta}
            </a>
          </div>
        </div>

        <p className="mt-8 text-xs leading-[1.7] text-fg-3">
          Education only. No signals and no promise of profit.
        </p>
      </div>
    </main>
  );
}

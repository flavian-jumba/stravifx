import { Lock } from "lucide-react";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { WaitlistForm } from "@/components/WaitlistForm";
import { LEARN } from "@/lib/learn";
import { fetchLearnOffer, LEARN_CHECKOUT_ENDPOINT } from "@/lib/learn-api";

export async function Learn() {
  const { open, priceLabel, refundPolicy } = await fetchLearnOffer();

  return (
    <section id="learn" className="bg-ink py-24 sm:py-40">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] border border-gold/25 bg-ink-2 sm:rounded-[44px]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_0%_0%,rgba(246,186,24,0.16),transparent_70%)]"
            />

            <div className="relative grid gap-x-16 gap-y-12 p-6 pb-8 sm:p-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:p-16">
              {/* Pitch and payment */}
              <div className="self-start lg:sticky lg:top-24">
                <Eyebrow className="text-gold">Learn · Paid waitlist</Eyebrow>
                <h2 className="mt-5 text-[clamp(2rem,9.6vw,4.5rem)] font-semibold leading-[0.98] tracking-[-0.04em]">
                  Learn to read the market{" "}
                  <span className="text-gold-gradient">yourself.</span>
                </h2>
                <p className="mt-6 max-w-[520px] text-[1.0625rem] leading-[1.5] text-fg-2 sm:text-xl">
                  Stravifx Learn is a forex curriculum for beginners, built on
                  the same ideas as the app: structure first, risk before size,
                  and a written plan for every trade. Pay once to reserve your
                  place on the waitlist for the first cohort.
                </p>

                <div className="mt-8 rounded-[24px] border border-white/[0.08] bg-black/40 p-5 sm:p-6">
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="font-mono text-[0.6875rem] uppercase tracking-[0.24em] text-fg-3">
                      Waitlist seat
                    </p>
                    <p className="text-sm text-fg-3">One-time payment</p>
                  </div>
                  {priceLabel ? (
                    <p className="mt-3 whitespace-nowrap font-pixel text-4xl leading-none text-fg sm:text-5xl">
                      {priceLabel}
                    </p>
                  ) : null}

                  <div className="mt-5">
                    <WaitlistForm
                      endpoint={LEARN_CHECKOUT_ENDPOINT}
                      priceLabel={priceLabel}
                      open={open}
                    />
                  </div>

                  <ul className="flex flex-col gap-1.5 text-sm leading-[1.5] text-fg-3">
                    {open ? (
                      <li className="flex items-center gap-2">
                        <Lock className="size-3.5 shrink-0" />
                        Secure checkout by Paystack
                      </li>
                    ) : null}
                    {refundPolicy ? <li>{refundPolicy}</li> : null}
                    <li>
                      Education only. No signals and no promise of profit.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Curriculum */}
              <div>
                <p className="font-mono text-[0.6875rem] uppercase tracking-[0.28em] text-fg-3 sm:text-xs">
                  What you’ll cover
                </p>
                <ol className="mt-5 border-b border-white/[0.08]">
                  {LEARN.modules.map((module, i) => (
                    <li
                      key={module.title}
                      className="flex gap-5 border-t border-white/[0.08] py-5 sm:gap-7 sm:py-6"
                    >
                      <span className="w-9 shrink-0 pt-1 font-pixel text-xl leading-none text-gold sm:text-2xl">
                        0{i + 1}
                      </span>
                      <div>
                        <h3 className="text-xl font-semibold tracking-[-0.02em] sm:text-2xl">
                          {module.title}
                        </h3>
                        <p className="mt-1.5 text-[0.9375rem] leading-[1.5] text-fg-2 sm:text-[1.0625rem]">
                          {module.body}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

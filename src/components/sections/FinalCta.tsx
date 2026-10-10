import Image from "next/image";
import { CandleField } from "@/components/CandleField";
import { Sparkle } from "@/components/icons";
import { PlayBadge } from "@/components/PlayBadge";
import { Reveal } from "@/components/Reveal";

export function FinalCta() {
  return (
    <section
      id="download"
      className="relative overflow-hidden bg-ink px-6 py-32 text-center sm:py-48">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_55%_at_50%_100%,rgba(246,186,24,0.20),transparent_70%)]"
      />
      <CandleField
        seed={23}
        className="absolute inset-x-0 bottom-0 h-[420px] w-full opacity-[0.06] [mask-image:linear-gradient(to_top,#000,transparent)]"
      />

      <Reveal className="relative mx-auto max-w-[980px]">
        <div className="relative mx-auto w-fit">
          <Image
            src="/brand/stravifx-logo.png"
            alt="Stravifx"
            width={480}
            height={189}
            className="h-auto w-[220px] sm:w-[280px]"
          />
          <Sparkle className="absolute right-[4.5%] top-[4%] size-6 animate-twinkle text-[#fff6c8] drop-shadow-[0_0_14px_rgba(246,186,24,0.9)]" />
        </div>

        <h2 className="mt-10 text-[clamp(2.75rem,8vw,6.5rem)] font-semibold leading-[0.95] tracking-[-0.045em]">
          Read any chart.
          <br />
          <span className="text-gold-gradient">Trade with a plan.</span>
        </h2>

        <div className="mt-10 flex flex-col items-center gap-3">
          <PlayBadge size="lg" />
          <p className="font-mono text-[0.6875rem] uppercase tracking-[0.28em] text-fg-3">
            Available on Android
          </p>
        </div>
      </Reveal>
    </section>
  );
}

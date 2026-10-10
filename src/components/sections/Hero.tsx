import { CandleField } from "@/components/CandleField";
import { Eyebrow } from "@/components/Eyebrow";
import { FilmPlayer } from "@/components/FilmPlayer";
import { PlayBadge } from "@/components/PlayBadge";
import { WatchFilmButton } from "@/components/WatchFilmButton";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink">
      {/* Atmosphere: a gold dawn and a faint run of candles */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[900px] bg-[radial-gradient(55%_50%_at_50%_0%,rgba(246,186,24,0.14),transparent_72%)]"
      />
      <CandleField className="absolute inset-x-0 top-24 hidden h-[560px] w-full opacity-[0.13] [mask-image:linear-gradient(90deg,#000,transparent_26%,transparent_74%,#000)] md:block" />

      <div className="relative mx-auto max-w-[1080px] px-6 pt-28 text-center sm:pt-44">
        <Eyebrow className="animate-word text-gold [animation-delay:60ms]">
          Stravifx for Android
        </Eyebrow>

        <h1 className="mt-5 text-[clamp(2.5rem,13.2vw,8.25rem)] font-semibold leading-[0.92] sm:mt-6 tracking-[-0.045em] text-fg">
          <span className="block">
            <span className="inline-block animate-word [animation-delay:120ms]">
              Any
            </span>{" "}
            <span className="inline-block animate-word [animation-delay:220ms]">
              chart.
            </span>
          </span>
          <span className="block pb-[0.08em]">
            <span className="text-gold-gradient inline-block animate-word [animation-delay:380ms]">
              A
            </span>{" "}
            <span className="text-gold-gradient inline-block animate-word [animation-delay:480ms]">
              clear
            </span>{" "}
            <span className="text-gold-gradient inline-block animate-word [animation-delay:580ms]">
              plan.
            </span>
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-[660px] animate-word text-[clamp(1.125rem,1.7vw,1.4375rem)] leading-[1.4] text-fg-2 [animation-delay:760ms] sm:mt-8">
          Point your camera at a chart or pick a live market. Stravifx reads the
          structure, makes a call and lays out the trade: entry, stop, targets
          and position size.
        </p>

        <div className="mt-6 flex animate-word flex-col items-center justify-center gap-1 [animation-delay:900ms] sm:mt-9 sm:flex-row sm:gap-8">
          <PlayBadge />
          <WatchFilmButton />
        </div>
      </div>

      <div className="relative mx-auto mt-8 max-w-[1240px] px-4 pb-10 sm:mt-20 sm:px-8">
        <FilmPlayer />
        <p className="mt-6 text-center font-mono text-[0.6875rem] uppercase tracking-[0.28em] text-fg-3 sm:mt-8">
          35-second film · Best with sound
        </p>
      </div>
    </section>
  );
}

import { Eyebrow } from "@/components/Eyebrow";
import { Sparkle } from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

const SYMBOLS = [
  "EUR/USD",
  "GBP/JPY",
  "XAU/USD",
  "USD/JPY",
  "GBP/USD",
  "AUD/USD",
  "NVDA",
];

const TIMEFRAMES = ["5M", "15M", "1H", "4H", "1D", "1W"];

const CLASSES = [
  {
    name: "Forex",
    body: "Majors, crosses and gold, with six of them checked hourly by Signals.",
  },
  {
    name: "Stocks",
    body: "Search a supported ticker and read it on any timeframe.",
  },
  {
    name: "Crypto",
    body: "Live candles for supported pairs. No screenshot needed.",
  },
];

function Ticker({
  items,
  reverse = false,
  className,
}: {
  items: string[];
  reverse?: boolean;
  className?: string;
}) {
  // Repeated enough to overflow any viewport, then doubled for a seamless loop.
  const run = [...items, ...items, ...items];
  return (
    <div className="mask-fade-x overflow-hidden" aria-hidden="true">
      <div
        className={cn(
          "flex w-max",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
        )}
      >
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0 items-center">
            {run.map((item, i) => (
              <li key={`${item}-${i}`} className="flex items-center">
                <span className={cn("font-pixel leading-none", className)}>
                  {item}
                </span>
                <Sparkle className="mx-6 size-3 text-gold/60 sm:mx-10 sm:size-4" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

export function Markets() {
  return (
    <section id="markets" className="overflow-hidden bg-ink-1 py-24 sm:py-40">
      <div className="rule-fade -mt-28 mb-28 sm:-mt-40 sm:mb-40" />
      <Reveal className="mx-auto max-w-[900px] px-6 text-center">
        <Eyebrow>Markets</Eyebrow>
        <h2 className="mt-5 text-[clamp(2rem,9.6vw,5.25rem)] font-semibold leading-[0.98] tracking-[-0.04em]">
          Every market.
          <br />
          <span className="text-fg-3">Every timeframe.</span>
        </h2>
      </Reveal>

      <div className="mt-16 flex flex-col gap-6 sm:mt-24 sm:gap-10">
        <p className="sr-only">
          Popular markets include {SYMBOLS.join(", ")}. Timeframes:{" "}
          {TIMEFRAMES.join(", ")}.
        </p>
        <Ticker
          items={SYMBOLS}
          className="text-[clamp(2.5rem,7vw,5.5rem)] text-fg"
        />
        <Ticker
          items={TIMEFRAMES}
          reverse
          className="text-[clamp(2.5rem,7vw,5.5rem)] text-fg/20"
        />
      </div>

      <ul className="mx-auto mt-16 grid max-w-[1240px] gap-10 px-6 sm:mt-24 sm:grid-cols-3 sm:gap-8 sm:px-8">
        {CLASSES.map((item) => (
          <li key={item.name}>
            <Reveal className="border-t border-white/10 pt-6">
              <h3 className="text-2xl font-semibold tracking-[-0.02em]">
                {item.name}
              </h3>
              <p className="mt-2 max-w-[340px] text-[1.0625rem] leading-[1.5] text-fg-2">
                {item.body}
              </p>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}

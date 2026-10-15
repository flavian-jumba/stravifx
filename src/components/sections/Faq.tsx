import { Plus } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const QUESTIONS = [
  {
    q: "Do I need a screenshot of a chart?",
    a: "No. You can photograph your screen or upload a screenshot, but Quick analysis also works without either: pick a market and a timeframe and StraviFX pulls live candles and builds the setup from the data.",
  },
  {
    q: "Which markets and timeframes does it cover?",
    a: "Forex, stocks and crypto, on timeframes from 5 minutes to 1 week. Signals checks six major markets every hour: EUR/USD, GBP/USD, USD/JPY, XAU/USD, GBP/JPY and AUD/USD.",
  },
  {
    q: "What does the confidence score mean?",
    a: "It reflects how much evidence the analysis found for its read of the chart. It is not the probability that a trade will be profitable.",
  },
  {
    q: "Does StraviFX place trades for me?",
    a: "No. StraviFX analyses a chart and lays out a plan. Whether to act on it, and where to place the trade, is your decision.",
  },
  {
    q: "Is this financial advice?",
    a: "No. StraviFX provides AI-generated analysis for information and education. It does not know your circumstances and it can be wrong. Trading carries a high risk of loss.",
  },
];

export function Faq() {
  return (
    <section
      id="faq"
      className="border-t border-paper-line bg-paper pb-24 pt-20 text-ink-text sm:pb-40 sm:pt-32"
    >
      <div className="mx-auto grid max-w-[1240px] gap-12 px-6 sm:px-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <Reveal>
          <p className="font-mono text-[0.6875rem] uppercase tracking-[0.28em] text-ink-muted sm:text-xs">
            FAQ
          </p>
          <h2 className="mt-5 text-[clamp(2.25rem,4.6vw,3.75rem)] font-semibold leading-[1] tracking-[-0.04em]">
            Questions,
            <br />
            answered plainly.
          </h2>
        </Reveal>

        <Reveal>
          <ul className="border-b border-paper-line">
            {QUESTIONS.map(({ q, a }) => (
              <li key={q} className="border-t border-paper-line">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-xl font-semibold tracking-[-0.02em] sm:text-2xl [&::-webkit-details-marker]:hidden">
                    {q}
                    <span className="grid size-9 shrink-0 place-items-center rounded-full border border-paper-line bg-paper-card transition-transform duration-500 ease-out-expo group-open:rotate-45">
                      <Plus className="size-4" />
                    </span>
                  </summary>
                  <p className="max-w-[620px] pb-7 text-[1.0625rem] leading-[1.55] text-ink-muted">
                    {a}
                  </p>
                </details>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

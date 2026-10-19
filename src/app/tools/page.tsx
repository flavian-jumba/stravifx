import type { Metadata } from "next";
import { ContentPage, ContentSection } from "@/components/ContentPage";
import { SITE } from "@/lib/site";

const PATH = "/tools";

export const metadata: Metadata = {
  title: "Free Forex & Gold Trading Calculators",
  description:
    "Free lot size, pip value and risk reward calculators for forex pairs, JPY pairs and gold. Plan the stop, the target and the position size before you trade.",
  alternates: { canonical: PATH },
};

const TOOLS = [
  {
    name: "Risk reward calculator",
    href: "/tools/risk-reward-calculator",
    question: "Is this trade worth taking?",
    inputs: "Entry, stop loss, take profit, optional spread and commission",
    outputs:
      "R:R ratio, risk and reward in pips, and the win rate you need to break even",
  },
  {
    name: "Pip calculator",
    href: "/tools/pip-calculator",
    question: "What is one pip worth on my account?",
    inputs: "Pair or gold, account currency (USD, EUR or GBP), exchange rate",
    outputs:
      "Pip value per standard, mini and micro lot, and for any custom size",
  },
  {
    name: "Lot size calculator",
    href: "/tools/lot-size-calculator",
    question: "How big should my position be?",
    inputs: "Balance, risk %, stop loss in pips, pair or gold",
    outputs: "Lots, units and the money at risk if the stop is hit",
  },
] as const;

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Forex trading calculators",
  itemListElement: TOOLS.map((tool, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: tool.name,
    url: `${SITE.url}${tool.href}`,
  })),
};

export default function ToolsPage() {
  return (
    <ContentPage
      eyebrow="Tools"
      title="Forex trading calculators"
      breadcrumbs={[{ name: "Tools", href: PATH }]}
      schema={[itemListSchema]}
      wide
      answer={
        <p>
          Three free calculators cover the numbers behind every trade plan.
          The risk reward calculator tells you whether a setup is worth
          taking, the pip calculator tells you what each pip is worth on your
          account, and the lot size calculator turns your risk percentage into
          a position size. They work for forex pairs, JPY pairs and gold.
        </p>
      }
    >
      <ul className="mt-10 grid gap-4 md:grid-cols-3">
        {TOOLS.map((tool) => (
          <li key={tool.href}>
            <a
              href={tool.href}
              className="group flex h-full flex-col rounded-[28px] border border-white/10 bg-ink-2 p-6 transition-colors duration-300 hover:border-gold/50"
            >
              <span className="font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-fg-3">
                {tool.question}
              </span>
              <span className="mt-4 text-[1.25rem] font-semibold leading-[1.2] tracking-[-0.02em] text-fg">
                {tool.name}
              </span>
              <span className="mt-4 text-[0.9375rem] leading-[1.6] text-fg-2">
                <span className="text-fg">In:</span> {tool.inputs}.
              </span>
              <span className="mt-2 text-[0.9375rem] leading-[1.6] text-fg-2">
                <span className="text-fg">Out:</span> {tool.outputs}.
              </span>
              <span className="mt-auto pt-6 text-[0.9375rem] font-medium text-gold">
                Open the calculator{" "}
                <span
                  aria-hidden="true"
                  className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm leading-[1.6] text-fg-3">
        All three run in your browser. No live prices are fetched, and your
        inputs aren&apos;t sent anywhere.
      </p>

      <ContentSection id="order" title="Which calculator do I use first?">
        <p>
          Use them in the order you plan a trade. The chart gives you the
          levels; the calculators turn those levels into money.
        </p>
        <ol>
          <li>
            <strong>Check the trade is worth it.</strong> Put the entry, stop
            and target into the{" "}
            <a href="/tools/risk-reward-calculator">risk reward calculator</a>.
            If the break-even win rate is higher than you can honestly expect
            to win, move on to the next setup.
          </li>
          <li>
            <strong>Know what a pip costs.</strong> The{" "}
            <a href="/tools/pip-calculator">pip calculator</a> shows the value
            of one pip per lot for your pair and account currency. Skip this
            step for USD-quoted pairs in a dollar account, where a standard
            lot is always $10 a pip.
          </li>
          <li>
            <strong>Size the position.</strong> The{" "}
            <a href="/tools/lot-size-calculator">lot size calculator</a> takes
            your balance, the percentage you&apos;re willing to lose and the
            stop in pips, and gives you the lots to open.
          </li>
        </ol>
      </ContentSection>

      <ContentSection id="example" title="One trade, all three calculators">
        <p>
          A buy on EUR/USD in a $5,000 dollar account, risking 1%. The entry
          is 1.1000, the stop loss 1.0970 and the take profit 1.1060. These
          prices are an example, not a trade idea.
        </p>
        <h3>1. Risk to reward</h3>
        <p>
          The stop is 30 pips away and the target 60 pips, so the trade is{" "}
          <strong>1:2</strong>. It breaks even if it wins 30 ÷ (30 + 60) ={" "}
          <strong>33.3%</strong> of the time, before costs.
        </p>
        <h3>2. Pip value</h3>
        <p>
          EUR/USD is quoted in dollars, so one pip on a standard lot (100,000
          euros) is 100,000 × 0.0001 = <strong>$10</strong>. A mini lot is $1
          and a micro lot $0.10.
        </p>
        <h3>3. Lot size</h3>
        <p>
          1% of $5,000 is $50. A 30-pip stop on one standard lot loses 30 ×
          $10 = $300, so the size is $50 ÷ $300 = 0.1667 lots, rounded down to{" "}
          <strong>0.16 lots</strong>. If the stop is hit you lose 0.16 × 30 ×
          $10 = $48; if the target is hit you make 0.16 × 60 × $10 = $96.
        </p>
        <p>
          Rounding down keeps the loss under your limit. Rounding up to 0.17
          lots would risk $51, a little over 1%.
        </p>
      </ContentSection>

      <ContentSection id="conventions" title="Conventions the calculators share">
        <ul>
          <li>
            <strong>Standard lot:</strong> 100,000 units of the base currency.
            A mini lot is 0.1 (10,000 units) and a micro lot 0.01 (1,000
            units).
          </li>
          <li>
            <strong>Pip:</strong> 0.0001 for most pairs and 0.01 for pairs
            quoted in yen, such as USD/JPY and GBP/JPY.
          </li>
          <li>
            <strong>Gold (XAU/USD):</strong> one standard lot is 100 ounces
            and a pip is $0.01 of price, so one lot moves $1 per pip in a
            dollar account. Some brokers count a gold pip as $0.10 instead;
            check your platform&apos;s contract specification.
          </li>
          <li>
            <strong>Exchange rates</strong> for pairs not quoted in your
            account currency are example values you can change. Type
            today&apos;s rate from your platform for an exact answer.
          </li>
        </ul>
      </ContentSection>

      <ContentSection id="app" title="Skip the typing">
        <p>
          The calculators are free and stay free. If you&apos;d rather not
          read the levels off a chart and type them in, the {SITE.name} app
          does all three steps from a photo or screenshot of the chart: it
          marks the structure, proposes the entry, stop and two targets with
          the pips and R:R, and sizes the position from your equity and risk
          percentage. The plan is analysis, not a signal to trade; the
          decision stays with you.
        </p>
      </ContentSection>
    </ContentPage>
  );
}

import type { Metadata } from "next";
import { ContentPage, ContentSection } from "@/components/ContentPage";
import { RelatedTerms, TermFaq, TermFigure } from "@/components/glossary/TermParts";
import { definedTermSchema, faqSchema, GLOSSARY_PATH, glossaryHref } from "@/lib/glossary";
import { SITE } from "@/lib/site";

const SLUG = "risk-reward";
const PATH = glossaryHref(SLUG);
const CALCULATOR = "/tools/risk-reward-calculator";

export const metadata: Metadata = {
  title: "Risk-to-Reward Ratio (R:R): Meaning and Math",
  description:
    "Risk-to-reward compares a trade's stop with its target. How to read 1:3 and 3R, the win rate each ratio needs, and why a bigger ratio isn't always better.",
  alternates: { canonical: PATH },
};

const DEFINITION =
  "Risk-to-reward (R:R) compares what a trade can lose at its stop with what it can make at its target. Risking 30 pips to make 90 is 1:3: the target is three times as far as the stop. It sets how often you must win to break even, before costs: 25% of the time at 1:3, 50% at 1:1.";

const FAQ = [
  {
    q: "What is a good risk-to-reward ratio?",
    a: "There is no single good number, because the ratio only means something next to how often that kind of trade wins. Many traders want at least 1:1.5 or 1:2 so that they can be wrong more than half the time and still come out ahead. A higher ratio with a far-fetched target can be worse than a modest one that gets hit.",
  },
  {
    q: "Is 1:3 the same as 3:1?",
    a: "Usually, yes. 1:3 is written risk first (risk 1 to make 3); 3:1 is written reward first. Both describe a target three times as far as the stop. Check which way round a source writes it before comparing numbers. StraviFX writes risk first, and also uses R: a 1:3 target is 3R.",
  },
  {
    q: "Should I measure R:R to the first or the second target?",
    a: "To whichever exit you actually plan to take. If you close half at TP1, neither ratio alone describes the trade; work out what each outcome pays, as the take profit page does. Quoting the ratio to the furthest target while banking most of the position early overstates the trade.",
  },
  {
    q: "Do spreads and commissions change the ratio?",
    a: "Yes. You pay them win or lose, so they add to the loss and take from the win. A 20-pip stop and a 40-pip target with 2 pips of costs is really 22 pips risked to make 38: about 1:1.73 instead of 1:2, and the break-even win rate rises from 33.3% to about 36.7%. The tighter the stop, the more costs matter.",
  },
];

export default function RiskRewardPage() {
  return (
    <ContentPage
      eyebrow="Glossary · Risk"
      title="Risk-to-reward (R:R)"
      breadcrumbs={[
        { name: "Glossary", href: GLOSSARY_PATH },
        { name: "Risk-to-reward (R:R)", href: PATH },
      ]}
      schema={[definedTermSchema(SLUG, "Risk-to-reward (R:R)", DEFINITION), faqSchema(FAQ)]}
      answer={<p>{DEFINITION}</p>}
    >
      <TermFigure
        src="/glossary/risk-reward.svg"
        alt="A buy trade drawn as horizontal lines: the stop one unit of risk below the entry, and three targets above it at one, two and three times that distance. Each target is labelled with the win rate it needs to break even: 50% at 1:1, 33% at 1:2 and 25% at 1:3."
        caption="Each step further out lowers the win rate you need, but price also reaches it less often."
      />

      <ContentSection id="formula" title="How to work it out">
        <p>
          <strong>R:R = (target − entry) ÷ (entry − stop)</strong> for a buy,
          and the other way round for a sell. Measure both distances in the
          same unit (pips, points or price), and write the result as 1:x.
        </p>
        <p>
          <strong>Break-even win rate = 1 ÷ (1 + x).</strong> At 1:2 that is 1
          ÷ 3 = 33.3%: win one trade in three and you are level, before
          costs. The{" "}
          <a href={CALCULATOR}>risk reward calculator</a> does both from your
          entry, stop and target.
        </p>
        <p>
          &quot;R&quot; is the same idea in one letter: 1R is the amount you
          lose if the <a href={glossaryHref("stop-loss")}>stop</a> is hit, so
          a 1:3 target is +3R and a stop-out is −1R. Counting results in R
          lets you compare trades of different sizes.
        </p>
      </ContentSection>

      <ContentSection id="example" title="A worked example: the ratio is only half the story">
        <p>
          One EUR/USD buy at 1.1000 with a stop at 1.0970 (30 pips, 1R). The
          prices are an illustration, not real data.
        </p>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[480px] border-collapse text-left text-[0.9375rem]">
            <thead>
              <tr className="border-b border-white/10 text-fg">
                <th scope="col" className="py-3 pr-4 font-semibold">Target</th>
                <th scope="col" className="py-3 pr-4 font-semibold">Distance</th>
                <th scope="col" className="py-3 pr-4 font-semibold">R:R</th>
                <th scope="col" className="py-3 font-semibold">Break-even win rate</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/10">
                <td className="py-3 pr-4">1.1030</td>
                <td className="py-3 pr-4">30 pips</td>
                <td className="py-3 pr-4">1:1</td>
                <td className="py-3">50%</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-3 pr-4">1.1060</td>
                <td className="py-3 pr-4">60 pips</td>
                <td className="py-3 pr-4">1:2</td>
                <td className="py-3">33.3%</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-3 pr-4">1.1090</td>
                <td className="py-3 pr-4">90 pips</td>
                <td className="py-3 pr-4">1:3</td>
                <td className="py-3">25%</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-3 pr-4">1.1150</td>
                <td className="py-3 pr-4">150 pips</td>
                <td className="py-3 pr-4">1:5</td>
                <td className="py-3">16.7%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          The further target needs fewer wins, but it is also reached less
          often. What decides the result is both numbers together, the
          expectancy: <strong>win rate × reward − loss rate × risk</strong>,
          in R.
        </p>
        <ul>
          <li>
            <strong>Trader A</strong> takes 1:1 targets and wins 55% of the
            time: 0.55 × 1 − 0.45 × 1 = <strong>+0.10R</strong> a trade, or
            +10R over 100 trades.
          </li>
          <li>
            <strong>Trader B</strong> takes 1:3 targets and wins 22% of the
            time: 0.22 × 3 − 0.78 × 1 = <strong>−0.12R</strong> a trade, or
            −12R over 100 trades.
          </li>
        </ul>
        <p>
          B has the &quot;better&quot; ratio and loses; A has the
          &quot;worse&quot; one and gains. These win rates are made up to show
          the arithmetic. Your own come only from a record of your own trades.
        </p>
      </ContentSection>

      <ContentSection id="variants" title="What traders disagree on">
        <ul>
          <li>
            <strong>Which way round.</strong> Risk first (1:3), reward first
            (3:1), or in R (3R). They mean the same thing when read correctly.
          </li>
          <li>
            <strong>A minimum ratio, or none.</strong> Some skip any trade
            under 1:2; others accept 1:1 on setups that win often. A minimum
            is a useful filter, as long as it doesn&apos;t tempt you to stretch
            the target.
          </li>
          <li>
            <strong>Planned or realised.</strong> The planned ratio is what the
            levels say; the realised one is what you actually got after early
            exits, slippage and partial closes. Your journal should track both.
          </li>
        </ul>
        <p>
          {SITE.name} writes ratios risk first (1:2) and puts the stop and{" "}
          <a href={glossaryHref("take-profit")}>targets</a> at levels on the
          chart first, then reports the ratio those levels give. It never
          moves a target to make the number look better.
        </p>
      </ContentSection>

      <ContentSection id="why" title="Why it matters">
        <p>
          The ratio turns a chart into a question you can answer: how often
          does a trade like this need to work? If the nearest real level only
          pays 1:0.8, you need to be right more than half the time just to
          stay level, and that is worth knowing before you enter. It also
          shows when a better{" "}
          <a href={glossaryHref("entry")}>entry</a> would fix a trade: the{" "}
          <a href={glossaryHref("optimal-trade-entry")}>optimal trade entry</a>{" "}
          page works through that case.
        </p>
      </ContentSection>

      <ContentSection id="mistakes" title="Common mistakes">
        <ul>
          <li>
            <strong>Moving the target to reach a ratio.</strong> A 1:3 target
            placed beyond a level price rarely passes is a 1:3 on paper only.
          </li>
          <li>
            <strong>Shrinking the stop to improve it.</strong> A stop inside
            normal noise gets hit more often, so the better ratio is paid for
            with more losses. Move the entry, not the stop.
          </li>
          <li>
            <strong>Judging a trade by its ratio alone.</strong> As the example
            shows, a high ratio with a low hit rate can lose.
          </li>
          <li>
            <strong>Ignoring costs on tight stops.</strong> On a 10-pip stop,
            2 pips of spread is a fifth of the risk.
          </li>
        </ul>
      </ContentSection>

      <TermFaq faq={FAQ} />

      <ContentSection id="app" title="Risk-to-reward in the app">
        <p>
          Every {SITE.name} setup shows the ratio for each target on its
          execution ladder, next to the distance in pips. On Premium&apos;s
          extended analysis, the first target must be at least 1.5R and the
          second at least 2R at real opposing levels; if the chart
          doesn&apos;t offer that, you get &quot;no trade&quot; instead, and
          that analysis doesn&apos;t count toward your daily limit. The
          free performance insights show your win rate by market and
          timeframe, which you can set against the break-even win rate of the
          ratios you take.
        </p>
      </ContentSection>

      <RelatedTerms current={SLUG} />
    </ContentPage>
  );
}

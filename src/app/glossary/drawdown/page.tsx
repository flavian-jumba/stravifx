import type { Metadata } from "next";
import { ContentPage, ContentSection } from "@/components/ContentPage";
import { RelatedTerms, TermFaq, TermFigure } from "@/components/glossary/TermParts";
import { definedTermSchema, faqSchema, GLOSSARY_PATH, glossaryHref } from "@/lib/glossary";
import { SITE } from "@/lib/site";

const SLUG = "drawdown";
const PATH = glossaryHref(SLUG);
const LOT_CALCULATOR = "/tools/lot-size-calculator";
const MT4_TESTER_RESULTS =
  "https://www.metatrader4.com/en/trading-platform/help/autotrading/tester/tester_results";

export const metadata: Metadata = {
  title: "Drawdown: Peak-to-Trough Loss and Recovery",
  description:
    "Drawdown is the fall from an account's peak to its low after it. The formula, the gain each drawdown needs to recover, and how a losing streak builds one.",
  alternates: { canonical: PATH },
};

const DEFINITION =
  "Drawdown is how far an account has fallen from its highest value to the lowest point after it, as a percentage of that peak. It keeps counting until the account makes a new high. Losses compound against you: a 20% drawdown needs a 25% gain to get back, and a 50% drawdown needs 100%.";

const FAQ = [
  {
    q: "What is a good maximum drawdown?",
    a: "There is no standard figure. The useful question is how deep a drawdown you can sit through without breaking your rules, then sizing so that a realistic losing streak stays inside it. At 1% risk a trade, ten losses in a row cost about 9.6%; at 5%, about 40%.",
  },
  {
    q: "Is drawdown the same as a loss?",
    a: "No. A loss is one trade. Drawdown is the whole fall from the account's peak, across every losing and winning trade until a new peak, so several small losses can add up to a large drawdown.",
  },
  {
    q: "Does drawdown include open trades?",
    a: "It depends on whether it is measured on balance or equity. Balance drawdown counts only closed trades. Equity drawdown includes the floating profit or loss of open trades, so it is usually deeper. Prop firms and platform reports say which one they use; check before you compare numbers.",
  },
  {
    q: "How do I recover from a drawdown?",
    a: "Slowly, and not by trading bigger. Raising the size to win it back faster means the next losing streak starts from a smaller account with bigger positions. Keep risk per trade fixed or cut it, review the losing trades in your journal, and let the recovery take the trades it takes.",
  },
];

export default function DrawdownPage() {
  return (
    <ContentPage
      eyebrow="Glossary · Risk"
      title="Drawdown"
      breadcrumbs={[
        { name: "Glossary", href: GLOSSARY_PATH },
        { name: "Drawdown", href: PATH },
      ]}
      schema={[definedTermSchema(SLUG, "Drawdown", DEFINITION), faqSchema(FAQ)]}
      answer={<p>{DEFINITION}</p>}
    >
      <TermFigure
        src="/glossary/drawdown.svg"
        alt="An account curve rises to a peak of 1,000 dollars, falls to a low of 800 dollars, then climbs back. The drop is labelled minus 20 percent of the peak, 200 dollars. The climb back is labelled plus 25 percent of the low, the same 200 dollars. A note says the drawdown lasts until the curve passes 1,000 dollars again."
        caption="The same $200 is 20% of the peak but 25% of the low, so the way back is always steeper than the way down."
      />

      <ContentSection id="formula" title="The two formulas">
        <p>
          <strong>Drawdown % = (peak − low) ÷ peak × 100</strong>
        </p>
        <p>
          <strong>Gain needed to recover = drawdown ÷ (1 − drawdown)</strong>
        </p>
        <p>
          A $1,000 account that falls to $800 is in a 20% drawdown. To get
          back to $1,000 it needs $200 on $800, which is 0.20 ÷ 0.80 = 25%.
        </p>
        <div className="mt-2 overflow-x-auto">
          <table className="w-full min-w-[360px] border-collapse text-left text-[0.9375rem]">
            <thead>
              <tr className="border-b border-white/10 text-fg">
                <th scope="col" className="py-3 pr-4 font-semibold">Drawdown</th>
                <th scope="col" className="py-3 font-semibold">Gain needed to get back</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["5%", "5.3%"],
                ["10%", "11.1%"],
                ["20%", "25%"],
                ["30%", "42.9%"],
                ["50%", "100%"],
                ["75%", "300%"],
              ].map(([down, up]) => (
                <tr key={down} className="border-b border-white/10">
                  <td className="py-3 pr-4">{down}</td>
                  <td className="py-3">{up}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ContentSection>

      <ContentSection id="example" title="A worked example: how a losing streak becomes a drawdown">
        <p>
          A $1,000 account takes ten losses in a row, each risking a fixed
          percentage of the balance at the time. This is arithmetic, not a
          forecast.
        </p>
        <div className="mt-2 overflow-x-auto">
          <table className="w-full min-w-[480px] border-collapse text-left text-[0.9375rem]">
            <thead>
              <tr className="border-b border-white/10 text-fg">
                <th scope="col" className="py-3 pr-4 font-semibold">Risk a trade</th>
                <th scope="col" className="py-3 pr-4 font-semibold">After 10 losses</th>
                <th scope="col" className="py-3 pr-4 font-semibold">Drawdown</th>
                <th scope="col" className="py-3 font-semibold">Gain to recover</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/10">
                <td className="py-3 pr-4">1%</td>
                <td className="py-3 pr-4">$904.38</td>
                <td className="py-3 pr-4">9.6%</td>
                <td className="py-3">10.6%</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-3 pr-4">2%</td>
                <td className="py-3 pr-4">$817.07</td>
                <td className="py-3 pr-4">18.3%</td>
                <td className="py-3">22.4%</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-3 pr-4">5%</td>
                <td className="py-3 pr-4">$598.74</td>
                <td className="py-3 pr-4">40.1%</td>
                <td className="py-3">67.0%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Each balance is $1,000 × (1 − risk)<sup>10</sup>. At 1% a trade,
          the account is back above $1,000 after six winners in a row at 1:2{" "}
          <a href={glossaryHref("risk-reward")}>risk-to-reward</a> (1.02
          <sup>6</sup> × $904.38 ≈ $1,018; five winners reach only about
          $998.50). At 5% a trade the hole is four times deeper.
        </p>
        <p>
          Is ten in a row realistic? At a 40% win rate, any one run of ten
          trades is all losses only about 0.6% of the time (0.6
          <sup>10</sup>). Over 500 trades, though, the chance of at least one
          run of ten losses is about 70%. Plan your risk for the streak
          you will eventually meet, not the average trade.
        </p>
      </ContentSection>

      <ContentSection id="variants" title="What traders disagree on">
        <ul>
          <li>
            <strong>Balance or equity.</strong> Balance drawdown counts closed
            trades only; equity drawdown includes open trades&apos; floating
            losses and is usually deeper.
          </li>
          <li>
            <strong>From the peak or from the deposit.</strong>{" "}
            MetaTrader 4&apos;s strategy tester reports three figures: an{" "}
            <em>absolute</em> drawdown (the largest fall below the initial
            deposit), a <em>maximal</em> drawdown in money and a{" "}
            <em>relative</em> drawdown in percent, both measured from the
            highest local equity value to the next low (
            <a href={MT4_TESTER_RESULTS} rel="noopener">
              MetaTrader 4 Help: Results
            </a>
            ). When people say &quot;drawdown&quot; without a word in front,
            they almost always mean peak to low, as on this page.
          </li>
          <li>
            <strong>Prop firm limits.</strong> Funded-account firms usually
            set a daily loss limit and a maximum drawdown, but they measure
            them differently (from the starting balance, or trailing the
            highest balance or equity). Read your firm&apos;s own rules; the
            same trades can pass one firm&apos;s limit and break another&apos;s.
          </li>
        </ul>
      </ContentSection>

      <ContentSection id="why" title="Why it matters">
        <p>
          Win rate and average R tell you how a strategy makes money.
          Maximum drawdown tells you what it costs to stay with it. A method
          that makes money on paper is no use if its normal losing streaks
          are deeper than you can sit through, because most traders change
          the rules, or the size, at the bottom. That is the case for a
          small, fixed{" "}
          <a href={glossaryHref("position-size")}>position size</a> from
          your risk: it decides how deep your drawdowns get before they
          happen.
        </p>
      </ContentSection>

      <ContentSection id="mistakes" title="Common mistakes">
        <ul>
          <li>
            <strong>Sizing up to win it back.</strong> Ten losses at 1% leave
            you 9.6% down. Double the risk to 2% and the next ten losses
            leave you about 26% below the peak.
          </li>
          <li>
            <strong>Measuring from the deposit only.</strong> An account that
            went from $1,000 to $1,500 and back to $1,100 is still up, but it
            is in a 26.7% drawdown.
          </li>
          <li>
            <strong>Ignoring open trades.</strong> A balance that looks fine
            can hide an equity drawdown from positions that are deep in loss
            without a stop.
          </li>
          <li>
            <strong>Judging a strategy by win rate alone.</strong> Ask for the
            maximum drawdown and the longest losing streak too.
          </li>
        </ul>
      </ContentSection>

      <TermFaq faq={FAQ} />

      <ContentSection id="app" title="Drawdown and the app">
        <p>
          {SITE.name} doesn&apos;t calculate your account&apos;s drawdown
          today. What it does is keep each loss to the size you choose: the
          free lot size calculator sizes from your equity and risk
          percentage, flags anything above 2% and caps the input at 10%. The
          journal tracks every setup to its outcome, losses included, so a
          losing streak is visible while it happens. The{" "}
          <a href={LOT_CALCULATOR}>lot size calculator</a> on this site does
          the same sizing for forex and gold.
        </p>
      </ContentSection>

      <RelatedTerms current={SLUG} />
    </ContentPage>
  );
}

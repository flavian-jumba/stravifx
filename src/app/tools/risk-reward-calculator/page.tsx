import type { Metadata } from "next";
import { ContentPage, ContentSection } from "@/components/ContentPage";
import { RiskRewardCalculator } from "@/components/tools/RiskRewardCalculator";
import { SITE } from "@/lib/site";

const PATH = "/tools/risk-reward-calculator";

export const metadata: Metadata = {
  title: "Risk Reward Calculator: R:R & Break-Even Win Rate",
  description:
    "Free risk reward calculator for forex and gold. Enter entry, stop loss and take profit to get the R:R ratio, the pips and the win rate you need to break even.",
  alternates: { canonical: PATH },
};

const FAQ = [
  {
    q: "What is a good risk-to-reward ratio?",
    a: "There is no single good number, because R:R trades off against how often you win. At 1:2 you need to win more than a third of your trades; at 1:1, more than half. A distant target improves the ratio but is reached less often, so judge R:R together with how often setups like yours actually hit their target.",
  },
  {
    q: "How do I calculate the break-even win rate?",
    a: "Divide the risk by the risk plus the reward. A trade risking 30 pips to make 60 breaks even at 30 ÷ 90 = 33.3%. The same thing written with the ratio is 1 ÷ (1 + R), so 1:3 breaks even at 25%.",
  },
  {
    q: "Is 1:2 the same as 2:1?",
    a: "They usually describe the same trade written in a different order. This page puts the risk first, so 1:2 means risking 1 to make 2. Some platforms and books put the reward first and write 2:1. Check which number belongs to the stop before you compare setups.",
  },
  {
    q: "Do spreads and commissions change my R:R?",
    a: "Yes. You pay the spread and commission whether the trade wins or loses, so they make the loss a little bigger and the win a little smaller. On a 30-pip stop and a 60-pip target, 1.5 pips of costs turn 1:2 into about 1:1.86 and lift the break-even win rate from 33.3% to 35%.",
  },
  {
    q: "Does R:R tell me how much money I'll lose?",
    a: "No. R:R is a ratio of distances, so it's the same on 0.01 lots and on 1 lot. The money comes from your position size: the stop in pips times the pip value times your lots. Use the lot size calculator to set that from the percentage of your account you're willing to lose.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function RiskRewardCalculatorPage() {
  return (
    <ContentPage
      eyebrow="Tool"
      title="Risk reward calculator"
      breadcrumbs={[
        { name: "Tools", href: "/tools" },
        { name: "Risk reward calculator", href: PATH },
      ]}
      schema={[faqSchema]}
      wide
      answer={
        <p>
          Risk-to-reward (R:R) compares what a trade can lose, from the entry
          to the stop loss, with what it aims to make, from the entry to the
          take profit. A buy at 1.1000 with a stop at 1.0970 and a target at
          1.1060 risks 30 pips to make 60, which is 1:2. At 1:2 you break
          even by winning one trade in three.
        </p>
      }
    >
      <RiskRewardCalculator />
      <p className="mt-4 text-sm leading-[1.6] text-fg-3">
        The prices are examples until you type your own; no live prices are
        fetched. Your inputs stay in your browser.
      </p>

      <ContentSection id="formula" title="The formulas">
        <p className="font-mono text-[0.9375rem] text-fg">
          R:R = (Take profit − Entry) ÷ (Entry − Stop loss)
        </p>
        <p className="font-mono text-[0.9375rem] text-fg">
          Break-even win rate = Risk ÷ (Risk + Reward) = 1 ÷ (1 + R)
        </p>
        <p>
          Measure both distances from the entry and ignore the sign, so the
          same formulas work for a sell, where the stop sits above the entry
          and the target below it. The calculator shows the distances in pips:
          0.0001 on most forex pairs, 0.01 on yen pairs and $0.01 on gold.
        </p>
        <p>
          With costs, add the spread and commission to the risk and take them
          off the reward before dividing:
        </p>
        <p className="font-mono text-[0.9375rem] text-fg">
          R:R after costs = (Reward − Costs) ÷ (Risk + Costs)
        </p>
        <p>
          The calculator also shows the average result per trade in R, the
          amount you risk on one trade, at a few win rates:
        </p>
        <p className="font-mono text-[0.9375rem] text-fg">
          Average result = Win rate × R − (1 − Win rate)
        </p>
      </ContentSection>

      <ContentSection id="examples" title="Worked examples">
        <h3>EUR/USD buy, no costs</h3>
        <p>
          Entry 1.1000, stop 1.0970, target 1.1060. Risk 30 pips, reward 60
          pips: 60 ÷ 30 = <strong>1:2</strong>. Break-even win rate: 30 ÷ 90 ={" "}
          <strong>33.3%</strong>.
        </p>
        <h3>The same trade with 1.5 pips of costs</h3>
        <p>
          Risk becomes 31.5 pips and reward 58.5 pips: 58.5 ÷ 31.5 ={" "}
          <strong>1:1.86</strong>. Break-even: 31.5 ÷ 90 = <strong>35%</strong>.
          The tighter the stop, the more the spread matters: on a 10-pip stop
          and a 20-pip target, the same 1.5 pips push the break-even from
          33.3% to 38.3%.
        </p>
        <h3>Gold (XAU/USD) sell</h3>
        <p>
          Entry 4,000.00, stop 4,010.00, target 3,970.00. Risk $10.00 (1,000
          pips of $0.01), reward $30.00 (3,000 pips): <strong>1:3</strong>.
          Break-even: 1 ÷ (1 + 3) = <strong>25%</strong>.
        </p>
        <h3>Why the win rate matters as much as the ratio</h3>
        <p>
          Winning 40% of 1:2 trades averages 0.4 × 2 − 0.6 ={" "}
          <strong>+0.2R</strong> per trade. Winning 40% of 1:1 trades averages
          0.4 × 1 − 0.6 = <strong>−0.2R</strong>. Same hit rate, opposite
          result. These are arithmetic, not forecasts: your real win rate
          only comes from your own record.
        </p>
      </ContentSection>

      <ContentSection id="why" title="Why R:R matters">
        <p>
          R:R sets the bar a setup has to clear. Before you place a trade, the
          break-even win rate tells you how often it must work for the plan to
          pay over many trades. If you know from your journal that a pattern
          reaches its target about a third of the time, a 1:1 plan on it is a
          slow loss, while a 1:2.5 plan has room for error.
        </p>
        <p>
          It also keeps targets honest. Stretching the target to show a
          better ratio doesn&apos;t help if price rarely gets there. Put the
          stop where the trade idea is wrong and the target where the next
          real level sits, then read the ratio. If it&apos;s poor, the better
          choice is often to skip the trade.
        </p>
        <p>
          R:R is a ratio, not an amount. To turn the stop into money, size
          the position with the{" "}
          <a href="/tools/lot-size-calculator">lot size calculator</a>, and
          check what each pip is worth with the{" "}
          <a href="/tools/pip-calculator">pip calculator</a>.
        </p>
      </ContentSection>

      <ContentSection id="mistakes" title="Common mistakes">
        <ul>
          <li>
            Moving the target further away just to make the ratio look
            better. The ratio rises, but the chance of reaching it falls.
          </li>
          <li>
            Ignoring costs on short trades. A 1.5-pip spread is small on a
            60-pip stop and large on a 10-pip one.
          </li>
          <li>
            Widening the stop after entry. The trade you planned was 1:2; the
            one you now hold may be 1:1.
          </li>
          <li>
            Judging a strategy by R:R alone. A high ratio with a low win rate
            and a low ratio with a high win rate can both lose money.
          </li>
          <li>
            Mixing up 1:2 and 2:1 when comparing tools or courses. Check which
            number is the risk.
          </li>
        </ul>
      </ContentSection>

      <ContentSection id="in-the-app" title={`R:R in ${SITE.name}`}>
        <p>
          When {SITE.name} plans a trade, its execution ladder lists the
          entry, stop loss and two targets (TP1 and TP2), each with the
          distance in pips and the reward-to-risk, then sizes the position
          from your equity and risk percentage. The journal follows every
          setup to its target or stop, so your own win rate builds up over
          time. See <a href="/#features">what the app does</a> or{" "}
          <a href="/#learn">learn the basics of trading</a> first.
        </p>
      </ContentSection>

      <ContentSection id="faq" title="FAQ">
        {FAQ.map(({ q, a }) => (
          <div key={q}>
            <h3>{q}</h3>
            <p>{a}</p>
          </div>
        ))}
      </ContentSection>
    </ContentPage>
  );
}

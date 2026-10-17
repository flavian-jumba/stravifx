import type { Metadata } from "next";
import { ContentPage, ContentSection } from "@/components/ContentPage";
import { PipCalculator } from "@/components/tools/PipCalculator";
import { SITE } from "@/lib/site";

const PATH = "/tools/pip-calculator";

export const metadata: Metadata = {
  title: "Pip Calculator: Pip Value for Forex, Gold & JPY",
  description:
    "Free pip calculator for forex pairs, JPY pairs and gold (XAU/USD). Get the pip value per standard, mini and micro lot in USD, EUR or GBP, with the formula.",
  alternates: { canonical: PATH },
};

const FAQ = [
  {
    q: "How much is one pip worth?",
    a: "It depends on the pair, the lot size and your account currency. In a US dollar account, one pip on a standard lot of any XXX/USD pair such as EUR/USD is $10, a mini lot is $1 and a micro lot is $0.10. For other pairs the value moves with the exchange rate, which is why the calculator asks for one.",
  },
  {
    q: "Why is a JPY pip 0.01 and not 0.0001?",
    a: "One yen is worth far less than one dollar or euro, so yen pairs are quoted with two decimal places instead of four. A pip is the second decimal: USD/JPY moving from 150.00 to 150.01 is one pip, worth ¥1,000 on a standard lot.",
  },
  {
    q: "What is a pipette?",
    a: "Most brokers quote one extra digit, a tenth of a pip, called a pipette or point. EUR/USD at 1.10005 shows five decimals; the last digit is pipettes. Ten pipettes make one pip, so check whether your platform's stop distance is in pips or points.",
  },
  {
    q: "How much is a pip on gold?",
    a: "This calculator counts a $0.01 move in XAU/USD as one pip, worth $1 on a 100-ounce standard lot. Many brokers and platforms call $0.10 a pip instead, which makes one pip worth $10 per lot. Both describe the same money: a $1.00 move in gold is $100 on one lot either way.",
  },
  {
    q: "Does my account currency change the pip value?",
    a: "Yes. The pip is paid in the pair's quote currency and then converted. One pip on a standard lot of EUR/USD is always $10, but in a euro account at EUR/USD 1.1000 that is €9.09.",
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

export default function PipCalculatorPage() {
  return (
    <ContentPage
      eyebrow="Tool"
      title="Pip calculator"
      breadcrumbs={[{ name: "Pip calculator", href: PATH }]}
      schema={[faqSchema]}
      wide
      answer={
        <p>
          A pip is the standard smallest price step: 0.0001 on most forex
          pairs and 0.01 on yen pairs. Pip value is that step times the units
          you trade, converted into your account currency. On one standard lot
          of EUR/USD in a US dollar account, a pip is worth $10; on a micro
          lot, $0.10.
        </p>
      }
    >
      <PipCalculator />
      <p className="mt-4 text-sm leading-[1.6] text-fg-3">
        Exchange rates are examples until you type your own; no live prices
        are fetched. Contract sizes are the common standard ones, so check
        your broker&apos;s specification. Your inputs stay in your browser.
      </p>

      <ContentSection id="formula" title="The formula">
        <p className="font-mono text-[0.9375rem] text-fg">
          Pip value = Pip size × Units, in the quote currency, then converted
          to your account currency
        </p>
        <p>
          The profit or loss on a pair is paid in its second currency, the
          quote currency. So the first step always gives an amount in that
          currency:
        </p>
        <ul>
          <li>
            <strong>Most pairs (EUR/USD, GBP/USD, USD/CAD, EUR/GBP…):</strong>{" "}
            0.0001 × 100,000 = 10 units of the quote currency per standard
            lot.
          </li>
          <li>
            <strong>Yen pairs (USD/JPY, GBP/JPY…):</strong> 0.01 × 100,000 =
            ¥1,000 per standard lot.
          </li>
          <li>
            <strong>XAU/USD (gold):</strong> $0.01 × 100 oz = $1 per standard
            lot.
          </li>
        </ul>
        <p>
          If the quote currency is your account currency, you&apos;re done.
          Otherwise convert it with the rate between the two. Divide when
          your account currency comes first in the conventional pair (yen to
          dollars with USD/JPY), multiply when it comes second (pounds to
          dollars with GBP/USD). A mini lot is a tenth of the standard figure
          and a micro lot a hundredth.
        </p>
      </ContentSection>

      <ContentSection id="examples" title="Worked examples">
        <h3>EUR/USD in a US dollar account</h3>
        <p>
          0.0001 × 100,000 = <strong>$10 per pip</strong> on a standard lot,
          $1 on a mini lot and $0.10 on a micro lot. No conversion is needed,
          because the dollar is both the quote and the account currency.
        </p>
        <h3>USD/JPY at 150.00 in a US dollar account</h3>
        <p>
          0.01 × 100,000 = ¥1,000 per pip. Divide by the USD/JPY price:
          1,000 ÷ 150 = <strong>$6.67 per pip</strong> on a standard lot, so
          about $0.67 on a mini lot. If USD/JPY rises to 160.00, the same pip
          is worth $6.25.
        </p>
        <h3>EUR/GBP in a US dollar account, GBP/USD at 1.3000</h3>
        <p>
          One pip on a standard lot is £10. The pound is the base of GBP/USD,
          so multiply: 10 × 1.30 = <strong>$13.00 per pip</strong>.
        </p>
        <h3>EUR/USD in a euro account, EUR/USD at 1.1000</h3>
        <p>
          The pip is still $10. The euro is the base of EUR/USD, so divide:
          10 ÷ 1.10 = <strong>€9.09 per pip</strong>.
        </p>
        <h3>Gold (XAU/USD) in a US dollar account</h3>
        <p>
          $0.01 × 100 oz = <strong>$1 per pip</strong> on a standard lot. A
          $5.00 move is 500 of these pips: $500 on one lot, or $5 on a 0.01
          lot (1 ounce).
        </p>
      </ContentSection>

      <ContentSection id="why" title="Why pip value matters">
        <p>
          A stop of 30 pips sounds the same on every pair, but it isn&apos;t
          the same money. On a standard lot it costs $300 on EUR/USD, about
          $200 on USD/JPY at 150.00 and $390 on EUR/GBP at GBP/USD 1.3000.
          Knowing the pip value turns a stop distance into an amount you can
          compare with what you&apos;re willing to lose.
        </p>
        <p>
          That is the core of position sizing: decide the money at risk
          first, then divide it by the stop in pips times the pip value. The{" "}
          <a href="/tools/lot-size-calculator">lot size calculator</a> does
          that step for you.
        </p>
      </ContentSection>

      <ContentSection id="mistakes" title="Common mistakes">
        <ul>
          <li>
            Assuming every pip is $10. It only holds for XXX/USD pairs on a
            standard lot in a US dollar account.
          </li>
          <li>
            Reading pipettes as pips. A five-decimal quote moving 10 points
            has moved one pip.
          </li>
          <li>
            Using last month&apos;s rate for yen or cross pairs. The pip value
            changes as the conversion rate moves, so use a current quote.
          </li>
          <li>
            Mixing gold conventions. Confirm whether your platform calls $0.01
            or $0.10 a pip before you set a stop.
          </li>
        </ul>
      </ContentSection>

      <ContentSection id="in-the-app" title={`Pips in ${SITE.name}`}>
        <p>
          When {SITE.name} plans a trade, its execution ladder shows the
          entry, stop and two targets with the distance in pips and the
          reward-to-risk, then sizes the position from your equity and risk
          percentage. See <a href="/#features">what the app does</a> or{" "}
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

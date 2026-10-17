import type { Metadata } from "next";
import { ContentPage, ContentSection } from "@/components/ContentPage";
import { LotSizeCalculator } from "@/components/tools/LotSizeCalculator";
import { SITE } from "@/lib/site";

const PATH = "/tools/lot-size-calculator";

export const metadata: Metadata = {
  title: "Lot Size Calculator for Forex, Gold & JPY Pairs",
  description:
    "Free lot size calculator for forex, gold (XAU/USD) and JPY pairs. Enter balance, risk % and stop loss in pips to get lots, units and the money at risk.",
  alternates: { canonical: PATH },
};

const FAQ = [
  {
    q: "What is a standard, mini and micro lot?",
    a: "A standard lot is 100,000 units of the base currency, a mini lot is 10,000 (0.10 lots) and a micro lot is 1,000 (0.01 lots). For gold, one standard lot is usually 100 troy ounces, so 0.01 lots is 1 ounce. Check your broker's contract specification, because a few use different sizes.",
  },
  {
    q: "What lot size should I use on a $100 account?",
    a: "Risking 1% of $100 is $1. With a 20-pip stop on EUR/USD, one standard lot risks $200, so the size would be 0.005 lots, below the 0.01 minimum many brokers allow. The honest answer is that a small account limits how tight your risk can be, so either accept fewer trades that fit or skip the ones that don't.",
  },
  {
    q: "Why does the calculator round down?",
    a: "Brokers trade in steps, usually 0.01 lots. Rounding up would risk more than you planned, so the calculator always rounds down and shows the money actually at risk after rounding.",
  },
  {
    q: "How are pips counted on gold?",
    a: "This calculator counts one gold pip as a $0.01 move in the XAU/USD price, which is worth $1 on one 100-ounce lot. Some brokers and platforms call $0.10 a pip instead. If yours does, multiply your stop by ten before entering it, so a $5.00 move is 500 pips here.",
  },
  {
    q: "Why do USD/JPY and USD/CAD need a price?",
    a: "When the US dollar isn't the quote currency, a pip is worth a fixed amount of yen or Canadian dollars, not dollars. Turning that into US dollars needs the current exchange rate, so the calculator asks for it.",
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

export default function LotSizeCalculatorPage() {
  return (
    <ContentPage
      eyebrow="Tool"
      title="Lot size calculator"
      breadcrumbs={[{ name: "Lot size calculator", href: PATH }]}
      schema={[faqSchema]}
      wide
      answer={
        <p>
          Lot size is the risk you can afford divided by what your stop costs
          on one lot. Multiply your balance by your risk percentage, then
          divide by the stop in pips times the pip value per lot. On a $5,000
          account risking 1% with a 25-pip EUR/USD stop, that&apos;s $50 ÷
          $250 = 0.20 lots.
        </p>
      }
    >
      <LotSizeCalculator />
      <p className="mt-4 text-sm leading-[1.6] text-fg-3">
        Results assume a US dollar account and standard contract sizes. Your
        calculations stay in your browser; nothing is sent anywhere.
      </p>

      <ContentSection id="formula" title="The formula">
        <p className="font-mono text-[0.9375rem] text-fg">
          Lots = (Balance × Risk %) ÷ (Stop in pips × Pip value per lot)
        </p>
        <p>
          The pip value per standard lot depends on the pair, because the
          profit or loss is paid in the pair&apos;s quote currency:
        </p>
        <ul>
          <li>
            <strong>EUR/USD, GBP/USD and other XXX/USD pairs:</strong> 100,000
            × 0.0001 = $10 per pip.
          </li>
          <li>
            <strong>USD/JPY:</strong> 100,000 × 0.01 = ¥1,000 per pip, which
            is 1,000 ÷ the USD/JPY price in dollars.
          </li>
          <li>
            <strong>GBP/JPY and other JPY crosses:</strong> also ¥1,000 per
            pip, converted at the USD/JPY rate.
          </li>
          <li>
            <strong>USD/CAD and USD/CHF:</strong> 100,000 × 0.0001 = 10 units
            of the quote currency, which is 10 ÷ the pair&apos;s price in
            dollars.
          </li>
          <li>
            <strong>XAU/USD (gold):</strong> 100 oz × $0.01 = $1 per pip.
          </li>
        </ul>
        <p>
          Units are the lots times the contract size: 0.20 lots of EUR/USD is
          20,000 euros, and 0.10 lots of gold is 10 ounces.
        </p>
        <p>
          For any other pair or a euro or pound account, the{" "}
          <a href="/tools/pip-calculator">pip calculator</a> works out the pip
          value per lot.
        </p>
      </ContentSection>

      <ContentSection id="examples" title="Worked examples">
        <h3>EUR/USD: $5,000 account, 1% risk, 25-pip stop</h3>
        <p>
          The risk budget is $5,000 × 1% = $50. A 25-pip stop on one standard
          lot costs 25 × $10 = $250. $50 ÷ $250 = <strong>0.20 lots</strong>,
          or 20,000 units, risking exactly $50.
        </p>
        <h3>Gold: $5,000 account, 1% risk, $5.00 stop</h3>
        <p>
          A $5.00 move is 500 pips at $0.01 each. One lot loses 500 × $1 =
          $500 over that move, so $50 ÷ $500 = <strong>0.10 lots</strong>, or
          10 ounces. Check: 10 oz × $5.00 = $50.
        </p>
        <h3>USD/JPY at 150.00: $5,000 account, 1% risk, 30-pip stop</h3>
        <p>
          One pip on a standard lot is ¥1,000, or 1,000 ÷ 150 = $6.67. Thirty
          pips cost $200 per lot, so $50 ÷ $200 = <strong>0.25 lots</strong>.
          Check: 25,000 × 0.30 yen = ¥7,500, which is $50 at 150.00.
        </p>
      </ContentSection>

      <ContentSection id="why" title="Why size from the stop, not the other way round">
        <p>
          Put the stop where the trade idea is proven wrong, beyond the swing
          or level that matters, and then let the size follow. Traders who
          pick a lot size first and squeeze the stop to fit tend to get
          stopped out by normal noise. A wider stop simply means a smaller
          position for the same money at risk.
        </p>
        <p>
          Many traders cap risk at 1–2% of the account per trade so a losing
          run doesn&apos;t do lasting damage. That is a convention, not a
          rule; choose a figure you could lose several times in a row without
          changing how you trade.
        </p>
      </ContentSection>

      <ContentSection id="mistakes" title="Common mistakes">
        <ul>
          <li>
            Using $10 a pip for every pair. It only holds when the US dollar is
            the quote currency and your account is in dollars.
          </li>
          <li>
            Mixing up gold pip conventions. Confirm whether your platform calls
            $0.01 or $0.10 a pip before you enter a stop.
          </li>
          <li>
            Forgetting spread and commission. They add to the real cost of a
            trade, so leave a little room under your risk budget.
          </li>
          <li>
            Sizing from equity you don&apos;t have. Use your current balance,
            not last month&apos;s high.
          </li>
        </ul>
      </ContentSection>

      <ContentSection id="in-the-app" title={`Lot sizing in ${SITE.name}`}>
        <p>
          When {SITE.name} reads a chart, it plans the entry, stop and two
          targets, then sizes the position from your account equity and risk
          percentage, using the same stop-first method. See{" "}
          <a href="/#features">what the app does</a> or{" "}
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

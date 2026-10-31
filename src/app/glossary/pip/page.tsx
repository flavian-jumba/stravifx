import type { Metadata } from "next";
import { ContentPage, ContentSection } from "@/components/ContentPage";
import { RelatedTerms, TermFaq, TermFigure } from "@/components/glossary/TermParts";
import { definedTermSchema, faqSchema, GLOSSARY_PATH, glossaryHref } from "@/lib/glossary";
import { SITE } from "@/lib/site";

const SLUG = "pip";
const PATH = glossaryHref(SLUG);
const PIP_CALCULATOR = "/tools/pip-calculator";
const LOT_CALCULATOR = "/tools/lot-size-calculator";

export const metadata: Metadata = {
  title: "What Is a Pip? Forex, JPY Pairs and Gold",
  description:
    "A pip is the standard unit of a currency pair's price move: 0.0001, or 0.01 on yen pairs. How to count pips, pipettes vs points, gold, and what a pip is worth.",
  alternates: { canonical: PATH },
};

const DEFINITION =
  "A pip is the standard unit for measuring how far a currency pair's price moves: 0.0001 for most pairs and 0.01 for pairs quoted in Japanese yen. It is a distance, not an amount of money. What one pip is worth depends on the pair and your position size, so stops are planned in pips and sized in money.";

const FAQ = [
  {
    q: "What does pip stand for?",
    a: "There is no official answer. It is usually expanded as \"percentage in point\" or \"price interest point\", but traders simply use it as a word for the fourth decimal place of most currency quotes. What matters is the size: 0.0001, or 0.01 on yen pairs.",
  },
  {
    q: "How much is one pip worth on 0.01 lots?",
    a: "On a pair quoted in US dollars, such as EUR/USD or GBP/USD, one pip on 0.01 lots (1,000 units) is worth $0.10 in a dollar account. On other pairs it is a different amount, because the pip is worth 0.0001 or 0.01 of the quote currency, which then has to be converted.",
  },
  {
    q: "What is the difference between a pip and a pipette?",
    a: "A pipette is a tenth of a pip: the fifth decimal on most pairs and the third on yen pairs. Brokers that quote five digits (1.08503) show pipettes. In MetaTrader, the smallest quoted step is called a point, so on a five-digit quote one pip is ten points.",
  },
  {
    q: "How many pips is a move from 1.0850 to 1.0950?",
    a: "100 pips. The move is 0.0100, and 0.0100 divided by 0.0001 is 100. On one standard lot of EUR/USD that is $1,000; on 0.01 lots it is $10.",
  },
];

export default function PipPage() {
  return (
    <ContentPage
      eyebrow="Glossary · Risk"
      title="Pip"
      breadcrumbs={[
        { name: "Glossary", href: GLOSSARY_PATH },
        { name: "Pip", href: PATH },
      ]}
      schema={[definedTermSchema(SLUG, "Pip", DEFINITION), faqSchema(FAQ)]}
      answer={<p>{DEFINITION}</p>}
    >
      <TermFigure
        src="/glossary/pip.svg"
        alt="Two price readouts. EUR/USD 1.08503: the fourth decimal, 0, is marked as the pip and the fifth decimal, 3, as the pipette. USD/JPY 150.253: the second decimal, 5, is the pip and the third, 3, the pipette. A note below says gold has no settled pip: 0.01 dollars on StraviFX's calculators, 0.10 dollars on many platforms, and that a 1 dollar move on one 100-ounce lot is 100 dollars either way."
        caption="The pip is the fourth decimal on most pairs and the second on yen pairs. The digit after it is a pipette."
      />

      <ContentSection id="sizes" title="Pip sizes at a glance">
        <div className="mt-2 overflow-x-auto">
          <table className="w-full min-w-[480px] border-collapse text-left text-[0.9375rem]">
            <thead>
              <tr className="border-b border-white/10 text-fg">
                <th scope="col" className="py-3 pr-4 font-semibold">Market</th>
                <th scope="col" className="py-3 pr-4 font-semibold">One pip</th>
                <th scope="col" className="py-3 font-semibold">Example of a one-pip move</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/10">
                <td className="py-3 pr-4">Most pairs (EUR/USD, GBP/USD, EUR/GBP)</td>
                <td className="py-3 pr-4">0.0001</td>
                <td className="py-3">1.0850 → 1.0851</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-3 pr-4">Yen pairs (USD/JPY, GBP/JPY)</td>
                <td className="py-3 pr-4">0.01</td>
                <td className="py-3">150.25 → 150.26</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-3 pr-4">Gold (XAU/USD)</td>
                <td className="py-3 pr-4">No standard: $0.01 or $0.10</td>
                <td className="py-3">See below</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          A <strong>pipette</strong> is a tenth of a pip: the fifth decimal
          on most pairs, the third on yen pairs. Crypto, indices and stocks
          have no pip convention at all; their moves are measured in price.
        </p>
      </ContentSection>

      <ContentSection id="counting" title="How to count pips">
        <p>
          <strong>Pips = price difference ÷ pip size</strong>
        </p>
        <p>The prices below are an illustration, not real data.</p>
        <ul>
          <li>
            <strong>EUR/USD from 1.08500 to 1.08275:</strong> a move of
            0.00225. 0.00225 ÷ 0.0001 = <strong>22.5 pips</strong>.
          </li>
          <li>
            <strong>USD/JPY from 151.300 to 150.880:</strong> a move of 0.420.
            0.420 ÷ 0.01 = <strong>42 pips</strong>.
          </li>
          <li>
            <strong>Gold from 4,050.00 to 4,042.50:</strong> a move of $7.50.
            That is 750 pips if a pip is $0.01, or 75 pips if a pip is $0.10.
            On one 100-ounce lot it is $750 either way.
          </li>
        </ul>
        <p>
          The gold case is why a pip count alone can mislead. Two traders can
          both say &quot;75-pip stop on gold&quot; and mean $7.50 and $0.75.
          Say the price distance when you share a gold level.
        </p>
      </ContentSection>

      <ContentSection id="value" title="What a pip is worth">
        <p>
          <strong>
            Pip value per lot = pip size × contract size, in the quote
            currency, then converted to your account currency
          </strong>
        </p>
        <ul>
          <li>
            <strong>EUR/USD:</strong> 0.0001 × 100,000 = <strong>$10</strong>{" "}
            per standard lot. No conversion needed in a dollar account.
          </li>
          <li>
            <strong>USD/JPY at 150.00:</strong> 0.01 × 100,000 = ¥1,000, which
            is ¥1,000 ÷ 150.00 = <strong>$6.67</strong> per standard lot.
          </li>
          <li>
            <strong>EUR/GBP with GBP/USD at 1.3000:</strong> 0.0001 × 100,000
            = £10, which is £10 × 1.3000 = <strong>$13.00</strong> per
            standard lot.
          </li>
          <li>
            <strong>Gold, $0.01 pip:</strong> $0.01 × 100 oz ={" "}
            <strong>$1</strong> per standard lot (or $10 if your platform
            calls $0.10 a pip).
          </li>
        </ul>
        <p>
          A mini lot (0.10) is worth a tenth of these, a micro lot (0.01) a
          hundredth. The <a href={PIP_CALCULATOR}>pip calculator</a> works
          these out for USD, EUR and GBP accounts, and the{" "}
          <a href={glossaryHref("position-size")}>position size</a> page
          shows how pip value turns a stop into a lot size.
        </p>
      </ContentSection>

      <ContentSection id="variants" title="What traders disagree on">
        <ul>
          <li>
            <strong>What a pip is on gold.</strong> Some brokers and platforms
            call $0.01 a pip, many call $0.10 a pip, and a few use other
            steps. {SITE.name}&apos;s calculators on this site use $0.01. The
            app&apos;s lot size calculator skips the question: for gold,
            crypto and stocks it measures the stop as a price move and sizes
            from that.
          </li>
          <li>
            <strong>Pips or points.</strong> In MetaTrader, a point is the
            smallest quoted step. On a five-digit EUR/USD quote, a 200-point
            stop is 20 pips, not 200.
          </li>
          <li>
            <strong>Pips on anything that isn&apos;t a currency.</strong>{" "}
            Some traders talk about &quot;pips&quot; on indices or bitcoin
            and mean whole points of price. There is no shared rule, so ask
            what the number means before you copy a level.
          </li>
        </ul>
      </ContentSection>

      <ContentSection id="why" title="Why it matters">
        <p>
          Pips are how traders compare distances across pairs: a 25-pip stop
          on EUR/USD and a 25-pip stop on GBP/USD are the same distance. They
          are not the same money. That is why a plan is drawn in pips and
          sized in money: decide where the{" "}
          <a href={glossaryHref("stop-loss")}>stop loss</a> goes, count the
          pips to it, multiply by the pip value, and choose the size that
          keeps the loss to what you planned. The{" "}
          <a href={LOT_CALCULATOR}>lot size calculator</a> does the last two
          steps.
        </p>
      </ContentSection>

      <ContentSection id="mistakes" title="Common mistakes">
        <ul>
          <li>
            <strong>Reading the fifth decimal as a pip.</strong> 1.08503 to
            1.08508 is half a pip, not five.
          </li>
          <li>
            <strong>Using &quot;$10 a pip&quot; everywhere.</strong> It holds
            only for pairs quoted in US dollars on a dollar account. Yen
            pairs, crosses and gold are worth different amounts.
          </li>
          <li>
            <strong>Mixing points and pips.</strong> A stop typed as 50 in a
            field that expects points is 5 pips, ten times tighter than
            planned.
          </li>
          <li>
            <strong>Sharing a gold level as a pip count.</strong> Give the
            price, or the dollar distance, instead.
          </li>
        </ul>
      </ContentSection>

      <TermFaq faq={FAQ} />

      <ContentSection id="app" title="Pips in the app">
        <p>
          {SITE.name}&apos;s trade plan lists the entry, stop, TP1 and TP2
          with the distance to each and its risk-to-reward. Its free lot size
          calculator counts pips only for currency pairs (0.0001, or 0.01 for
          yen pairs) and measures gold, crypto and stocks as a price move,
          then works out the money at risk from the contract size, so the
          gold convention doesn&apos;t change your size.
        </p>
      </ContentSection>

      <RelatedTerms current={SLUG} />
    </ContentPage>
  );
}

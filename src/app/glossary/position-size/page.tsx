import type { Metadata } from "next";
import { ContentPage, ContentSection } from "@/components/ContentPage";
import { RelatedTerms, TermFaq, TermFigure } from "@/components/glossary/TermParts";
import { definedTermSchema, faqSchema, GLOSSARY_PATH, glossaryHref } from "@/lib/glossary";
import { SITE } from "@/lib/site";

const SLUG = "position-size";
const PATH = glossaryHref(SLUG);
const LOT_CALCULATOR = "/tools/lot-size-calculator";
const PIP_CALCULATOR = "/tools/pip-calculator";

export const metadata: Metadata = {
  title: "Position Size and Lots: What a Lot Means",
  description:
    "Position size is how much you trade; in forex it's counted in lots. Standard, mini and micro lots, sizing from your risk, and why leverage isn't the answer.",
  alternates: { canonical: PATH },
};

const DEFINITION =
  "Position size is how much of a market you buy or sell. In forex it is counted in lots: one standard lot is 100,000 units of the base currency, a mini lot 10,000 and a micro lot 1,000. You choose the size from the money you are willing to lose and the stop distance, not from leverage.";

const FAQ = [
  {
    q: "What is 0.01 lots?",
    a: "A micro lot: 1,000 units of the base currency. On a pair quoted in US dollars, such as EUR/USD, each pip is worth about $0.10 at that size, so a 20-pip stop risks about $2. It is the smallest size most brokers allow, which matters on small accounts.",
  },
  {
    q: "Is lot size the same as position size?",
    a: "In forex, people use them to mean the same thing: lot size is position size counted in lots. Position size is the wider term and also covers ounces of gold, coins of crypto or shares of a stock, which are counted in their own units.",
  },
  {
    q: "Does higher leverage let me trade bigger safely?",
    a: "Leverage lets you open a bigger position with less margin, but it doesn't change what the position loses if the stop is hit. That loss depends only on the size and the stop distance. Sizing from the stop and your risk keeps the loss the same whatever leverage the account has.",
  },
  {
    q: "What if my calculated size is below 0.01 lots?",
    a: "Then even the smallest position risks more than you planned on that stop. Your choices are to skip the trade, find a setup with a tighter stop that is still in a sensible place, or accept the larger risk knowingly. Don't squeeze a well-placed stop just to make the size fit. The lot size calculator shows when this happens.",
  },
];

export default function PositionSizePage() {
  return (
    <ContentPage
      eyebrow="Glossary · Risk"
      title="Position size / lot"
      breadcrumbs={[
        { name: "Glossary", href: GLOSSARY_PATH },
        { name: "Position size / lot", href: PATH },
      ]}
      schema={[definedTermSchema(SLUG, "Position size / lot", DEFINITION), faqSchema(FAQ)]}
      answer={<p>{DEFINITION}</p>}
    >
      <TermFigure
        src="/glossary/position-size.svg"
        alt="Three boxes in a row. The first shows 20 dollars at risk, 1% of a 2,000 dollar account. The second shows 250 dollars, the cost of a 25-pip stop on one standard lot of EUR/USD. The third, highlighted, shows the result: 20 divided by 250 is 0.08 lots, which is 8,000 units of euros. A note says leverage changes the margin, not the 20 dollars."
        caption="Decide the stop on the chart, decide the money you'll lose, and let the size follow."
      />

      <ContentSection id="units" title="Lot sizes at a glance">
        <div className="mt-2 overflow-x-auto">
          <table className="w-full min-w-[480px] border-collapse text-left text-[0.9375rem]">
            <thead>
              <tr className="border-b border-white/10 text-fg">
                <th scope="col" className="py-3 pr-4 font-semibold">Name</th>
                <th scope="col" className="py-3 pr-4 font-semibold">Lots</th>
                <th scope="col" className="py-3 pr-4 font-semibold">Units</th>
                <th scope="col" className="py-3 font-semibold">Pip value, USD-quoted pair</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/10">
                <td className="py-3 pr-4">Standard</td>
                <td className="py-3 pr-4">1.00</td>
                <td className="py-3 pr-4">100,000</td>
                <td className="py-3">$10</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-3 pr-4">Mini</td>
                <td className="py-3 pr-4">0.10</td>
                <td className="py-3 pr-4">10,000</td>
                <td className="py-3">$1</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-3 pr-4">Micro</td>
                <td className="py-3 pr-4">0.01</td>
                <td className="py-3 pr-4">1,000</td>
                <td className="py-3">$0.10</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          The pip values hold for pairs quoted in US dollars (EUR/USD, GBP/USD,
          AUD/USD) on a dollar account. For JPY pairs and crosses, a pip is worth a different amount,
          which the <a href={PIP_CALCULATOR}>pip calculator</a> works out.
          Gold is usually 100 ounces per lot, so a $1 move is $100 per lot.
          Crypto and shares are traded in coins and shares. Brokers can set
          their own contract sizes, so check the contract specification before
          you size a trade.
        </p>
      </ContentSection>

      <ContentSection id="formula" title="How to size a position">
        <p>
          <strong>
            Lots = money at risk ÷ (stop distance in pips × pip value per lot)
          </strong>
        </p>
        <ol>
          <li>
            <strong>Place the stop on the chart</strong>, beyond the level that
            would prove the idea wrong (see{" "}
            <a href={glossaryHref("stop-loss")}>stop loss</a> and{" "}
            <a href={glossaryHref("invalidation")}>invalidation</a>).
          </li>
          <li>
            <strong>Decide the money at risk</strong>, usually a small
            percentage of the account.
          </li>
          <li>
            <strong>Divide</strong>, then round down to the nearest size your
            broker allows, so you never risk more than planned.
          </li>
        </ol>
        <p>
          The <a href={LOT_CALCULATOR}>lot size calculator</a> does this for
          forex, JPY pairs and gold.
        </p>
      </ContentSection>

      <ContentSection id="example" title="A worked example: same risk, three markets">
        <p>
          A $2,000 account risking 1% ($20) a trade, with a 25-pip or $8 stop.
          The prices are an illustration, not real data.
        </p>
        <ul>
          <li>
            <strong>EUR/USD, 25-pip stop:</strong> $20 ÷ (25 × $10) ={" "}
            <strong>0.08 lots</strong>, which risks exactly $20.
          </li>
          <li>
            <strong>USD/JPY at 150.00, 25-pip stop:</strong> a pip on one lot
            is ¥1,000, which is $6.67 at 150.00. $20 ÷ (25 × $6.67) ={" "}
            <strong>0.12 lots</strong>, which risks $20.
          </li>
          <li>
            <strong>Gold, $8 stop:</strong> $8 × 100 oz = $800 per lot. $20 ÷
            $800 = 0.025, rounded down to <strong>0.02 lots</strong>, which
            risks $16 (0.8%). Rounding up to 0.03 would risk $24 (1.2%).
          </li>
        </ul>
        <p>
          Same account, same risk, three different sizes. That is the point:
          the size changes so the money at risk doesn&apos;t.
        </p>
      </ContentSection>

      <ContentSection id="leverage" title="Size, margin and leverage">
        <p>
          The 0.08 lots of EUR/USD above is 8,000 euros, worth about $8,800 at
          1.1000. At 1:100 leverage your broker holds about $88 of margin to
          keep it open; at 1:500, about $17.60. Either way, if the 25-pip stop
          is hit, you lose $20. Leverage decides how big a position you{" "}
          <em>can</em> open, not how much you <em>should</em>. Sizing from
          leverage (&quot;I have 1:500, so I can trade 1 lot&quot;) is how a
          single stop-out takes a large part of a small account.
        </p>
      </ContentSection>

      <ContentSection id="variants" title="What traders disagree on">
        <ul>
          <li>
            <strong>Fixed percentage or fixed money.</strong> Risking 1% of the
            current balance shrinks your size after losses and grows it after
            wins; a fixed $20 stays the same until you change it.
          </li>
          <li>
            <strong>How much to risk.</strong> 0.5%, 1% and 2% are all common,
            and there is no correct figure. Ten losses in a row cost about 4.9%
            of the account at 0.5% a trade, 9.6% at 1% and 18.3% at 2%.
          </li>
          <li>
            <strong>Stop first or risk first.</strong> Some pick the money
            first and let it set the stop distance. {SITE.name} places the stop
            where the chart says the idea is wrong, then sizes from it, because
            a stop chosen to fit a budget often sits inside normal price noise.
          </li>
        </ul>
      </ContentSection>

      <ContentSection id="why" title="Why it matters">
        <p>
          The stop decides <em>where</em> you are wrong; the size decides{" "}
          <em>how much</em> that costs. Two traders with the same entry, stop
          and target can have completely different results if one sizes by
          feel. Sizing from risk is what keeps one loss from wiping out a
          week, and it is what makes{" "}
          <a href={glossaryHref("risk-reward")}>risk-to-reward</a> and R
          multiples mean the same thing in money from trade to trade.
        </p>
      </ContentSection>

      <ContentSection id="mistakes" title="Common mistakes">
        <ul>
          <li>
            <strong>Using the same lot size on every trade.</strong> A fixed
            0.10 lots risks $15 on a 15-pip stop and $60 on a 60-pip one.
          </li>
          <li>
            <strong>Using the EUR/USD shortcut on gold.</strong> &quot;$10 a
            pip per lot&quot; is only true for USD-quoted pairs. A gold lot
            moves $100 for every $1.
          </li>
          <li>
            <strong>Rounding up.</strong> Always round the size down to the
            nearest allowed step, or you risk more than you planned.
          </li>
          <li>
            <strong>Sizing from margin or leverage.</strong> Free margin tells
            you what you can open, not what you can afford to lose.
          </li>
        </ul>
      </ContentSection>

      <TermFaq faq={FAQ} />

      <ContentSection id="app" title="Position size in the app">
        <p>
          The lot size calculator in {SITE.name} is free. It sizes from your
          account equity, your risk percentage and the setup&apos;s entry and
          stop, and works in money terms (contract size × stop distance ×
          currency conversion), so gold, crypto and stocks are sized with
          their own contract sizes instead of the forex shortcut. It rounds
          down to 0.01 lots for forex and metals, to whole shares for stocks
          and to small fractions for crypto, then shows what the rounded size
          actually risks. It flags any risk above 2% and caps the input at
          10%. It assumes a US dollar account. The app never opens positions;
          you enter the size at your broker.
        </p>
      </ContentSection>

      <RelatedTerms current={SLUG} />
    </ContentPage>
  );
}

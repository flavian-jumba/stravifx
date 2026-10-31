import type { Metadata } from "next";
import { ContentPage, ContentSection } from "@/components/ContentPage";
import { RelatedTerms, TermFaq, TermFigure } from "@/components/glossary/TermParts";
import { definedTermSchema, faqSchema, GLOSSARY_PATH, glossaryHref } from "@/lib/glossary";
import { SITE } from "@/lib/site";

const SLUG = "spread";
const PATH = glossaryHref(SLUG);
const PIP_CALCULATOR = "/tools/pip-calculator";
const INVESTOR_GOV_ASK =
  "https://www.investor.gov/introduction-investing/investing-basics/glossary/ask-price";

export const metadata: Metadata = {
  title: "Spread: Bid, Ask and What It Costs a Trade",
  description:
    "The spread is the gap between the bid and ask price. Why every trade starts down by it, why a sell stop can trigger before the chart touches it, and its cost.",
  alternates: { canonical: PATH },
};

const DEFINITION =
  "The spread is the gap between the price you can buy at (the ask) and the price you can sell at (the bid). A trade opens on one side and closes on the other, so it starts down by about the spread. It is a cost, usually counted in pips, and it widens around news and in quiet hours.";

const FAQ = [
  {
    q: "Why did my sell stop trigger when the chart never reached it?",
    a: "Most charts draw the bid price, but a sell closes at the ask, which sits one spread higher. So a sell's stop triggers when the ask reaches it, while the bid candle on your chart can still be a spread below. Around news, when the spread widens, that gap can be several pips.",
  },
  {
    q: "Do I pay the spread twice, to open and to close?",
    a: "No, you pay it once per trade. You buy at the ask and sell at the bid (or the other way round), so the round trip crosses the gap once. Some accounts charge a commission on top, usually on both the open and the close.",
  },
  {
    q: "What is a good spread?",
    a: "It depends on the market, the broker and the time of day. Major pairs usually have the tightest spreads, crosses and exotics wider ones, and every market widens around big news. Compare a broker's typical spread at the hours you trade, not the lowest figure it advertises.",
  },
  {
    q: "Does the spread affect a buy trade's stop loss?",
    a: "Not where it triggers: a buy closes at the bid, which is what most charts show, so its stop triggers as drawn. But the entry was at the ask, a spread above the chart price, so the loss at the stop is the distance you measured on the chart plus the spread.",
  },
];

export default function SpreadPage() {
  return (
    <ContentPage
      eyebrow="Glossary · Risk"
      title="Spread"
      breadcrumbs={[
        { name: "Glossary", href: GLOSSARY_PATH },
        { name: "Spread", href: PATH },
      ]}
      schema={[definedTermSchema(SLUG, "Spread", DEFINITION), faqSchema(FAQ)]}
      answer={<p>{DEFINITION}</p>}
    >
      <TermFigure
        src="/glossary/spread.svg"
        alt="Two horizontal price lines on a GBP/USD chart: the ask at 1.30015 above the bid at 1.30000, 1.5 pips apart. A sell trade's stop loss is drawn at 1.30200. The highest bid candle reaches 1.30190, one pip short of the stop, but the ask at that moment is 1.30205, past the stop, so the trade is stopped out. A label says the chart shows the bid but a sell closes at the ask."
        caption="A sell closes at the ask. When the bid on your chart is 1.5 pips from the stop, the ask is already there."
      />

      <ContentSection id="sides" title="Bid, ask and which one your orders use">
        <p>
          The <strong>bid</strong> is the price you can sell at; the{" "}
          <strong>ask</strong> (or offer) is the price you can buy at, and it
          is almost always higher. Investor.gov calls the difference between
          the two the spread (
          <a href={INVESTOR_GOV_ASK} rel="noopener">
            Investor.gov: ask price
          </a>
          ).
        </p>
        <div className="mt-2 overflow-x-auto">
          <table className="w-full min-w-[420px] border-collapse text-left text-[0.9375rem]">
            <thead>
              <tr className="border-b border-white/10 text-fg">
                <th scope="col" className="py-3 pr-4 font-semibold">Trade</th>
                <th scope="col" className="py-3 pr-4 font-semibold">Opens at</th>
                <th scope="col" className="py-3 font-semibold">Closes at (stop and target too)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/10">
                <td className="py-3 pr-4">Buy</td>
                <td className="py-3 pr-4">Ask</td>
                <td className="py-3">Bid</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-3 pr-4">Sell</td>
                <td className="py-3 pr-4">Bid</td>
                <td className="py-3">Ask</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Most charting platforms, including MetaTrader by default, draw
          candles from the bid. So a buy behaves as drawn when it closes, and
          a sell doesn&apos;t: its stop and target are hit by the ask, which
          you only see if you switch on the ask line.
        </p>
      </ContentSection>

      <ContentSection id="example" title="A worked example: the sell stop the chart didn't reach">
        <p>
          GBP/USD, a 1.5-pip spread. The prices are an illustration, not real
          data.
        </p>
        <ul>
          <li>
            <strong>Entry:</strong> sell at the bid, 1.30000. The ask is
            1.30015.
          </li>
          <li>
            <strong>Stop:</strong> 1.30200, 20 pips above the entry on the
            chart. It triggers when the <em>ask</em> reaches 1.30200, which
            is when the bid is 1.30185.
          </li>
          <li>
            <strong>What the chart shows:</strong> the high of the bid candle
            is 1.30190, one pip below the stop. The trade is closed anyway,
            because the ask touched 1.30205.
          </li>
          <li>
            <strong>Target:</strong> 1.29600, 40 pips below. It fills only
            when the ask gets there, so the bid has to reach 1.29585.
          </li>
        </ul>
        <p>
          The fix is to place a sell&apos;s stop a spread further away than
          the level you marked (and a target a spread short of it), then size
          from that wider stop with the{" "}
          <a href={glossaryHref("position-size")}>position size</a> rule.
          If the news spread is five pips, a stop with a 1.5-pip allowance
          can still be hit.
        </p>
      </ContentSection>

      <ContentSection id="cost" title="What the spread costs">
        <p>
          <strong>
            Spread cost = spread in pips × pip value per lot × lots
          </strong>
        </p>
        <ul>
          <li>
            <strong>EUR/USD, 1.0-pip spread, 0.10 lots:</strong> 1.0 × $10 ×
            0.10 = <strong>$1.00</strong> a trade. If the spread is 5 pips
            during news, $5.00.
          </li>
          <li>
            <strong>Gold, $0.30 spread, 0.10 lots (10 oz):</strong> $0.30 ×
            10 = <strong>$3.00</strong> a trade.
          </li>
        </ul>
        <p>
          The share of your risk matters more than the dollars. The same
          1-pip spread is 10% of a 10-pip stop but 2.5% of a 40-pip one, so
          tight-stop strategies pay a much bigger cost on every trade. The{" "}
          <a href={PIP_CALCULATOR}>pip calculator</a> gives the pip value for
          other pairs.
        </p>
      </ContentSection>

      <ContentSection id="variants" title="Kinds of spread and account">
        <ul>
          <li>
            <strong>Variable or fixed.</strong> Most brokers quote a variable
            spread that tightens when the market is busy and widens when it
            isn&apos;t. A fixed spread stays the same in normal conditions,
            usually at a higher level, and the broker&apos;s terms say when
            it can still change.
          </li>
          <li>
            <strong>Spread only, or raw spread plus commission.</strong> Some
            accounts build the broker&apos;s charge into a wider spread;
            others quote a tighter spread and charge a commission per lot. To
            compare, turn the commission into pips: on a pair quoted in US
            dollars a pip is $10 a lot, so a $7 round-trip commission (an
            illustrative figure) is the same as 0.7 pips.
          </li>
          <li>
            <strong>When it widens.</strong> Around high-impact news, around
            the daily rollover when liquidity is thin, at the weekly open,
            and on less traded pairs. That is also when stops get hit by the
            spread alone.
          </li>
        </ul>
      </ContentSection>

      <ContentSection id="why" title="Why it matters">
        <p>
          The spread is a cost you pay before the trade can earn anything,
          and it eats into{" "}
          <a href={glossaryHref("risk-reward")}>risk-to-reward</a> from both
          ends: the loss at the stop grows by the spread and the profit at
          the target shrinks by it. On a swing trade with a 40-pip stop that
          barely shows. On a 10-pip scalp it can turn a strategy that works
          on the chart into one that loses in the account.
        </p>
      </ContentSection>

      <ContentSection id="mistakes" title="Common mistakes">
        <ul>
          <li>
            <strong>Placing a sell&apos;s stop exactly at the high.</strong>{" "}
            Add the spread, or the ask will take you out at a level the chart
            never printed.
          </li>
          <li>
            <strong>Measuring R:R from the chart only.</strong> Include the
            spread in the stop distance before you size the trade.
          </li>
          <li>
            <strong>Trading the minute of a big release.</strong> Spreads can
            jump to several times normal, and stops and entries fill there.
          </li>
          <li>
            <strong>Comparing brokers by the lowest advertised spread.</strong>{" "}
            &quot;From 0.0 pips&quot; describes the best moment, not the
            typical one, and may come with a commission.
          </li>
        </ul>
      </ContentSection>

      <TermFaq faq={FAQ} />

      <ContentSection id="app" title="Spread and the app">
        <p>
          {SITE.name} plans levels from market prices and doesn&apos;t know
          your broker&apos;s spread, so on a sell, check that the stop allows
          for it before you place the order. The plan already puts the{" "}
          <a href={glossaryHref("stop-loss")}>stop loss</a> beyond the level
          that proves the idea wrong, with a buffer, which usually leaves
          room for a normal spread but not for a news spike.
        </p>
      </ContentSection>

      <RelatedTerms current={SLUG} />
    </ContentPage>
  );
}

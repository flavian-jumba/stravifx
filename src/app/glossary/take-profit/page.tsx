import type { Metadata } from "next";
import { ContentPage, ContentSection } from "@/components/ContentPage";
import { RelatedTerms, TermFaq, TermFigure } from "@/components/glossary/TermParts";
import { definedTermSchema, faqSchema, GLOSSARY_PATH, glossaryHref } from "@/lib/glossary";
import { SITE } from "@/lib/site";

const SLUG = "take-profit";
const PATH = glossaryHref(SLUG);

const INVESTOR_GOV_ORDER_TYPES =
  "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins-14";

export const metadata: Metadata = {
  title: "Take Profit (TP1 and TP2): Where Targets Go",
  description:
    "A take profit closes a trade at a set price to lock in the gain. Where TP1 and TP2 go, what splitting a position really pays, and why a target can be missed.",
  alternates: { canonical: PATH },
};

const DEFINITION =
  "A take profit is an order that closes your trade at a set price once the market has moved your way, locking in the gain. TP1 and TP2 are two targets on one trade: TP1 at the nearest level likely to stop price, to bank part of the position early, and TP2 further out for the rest.";

const FAQ = [
  {
    q: "Should I always use two targets?",
    a: "No. One target is simpler and pays the full ratio when it is hit. Two targets bank something earlier, so fewer trades that went your way end as losses, but the winners that run the whole way pay less. Pick one method and use it on every trade, so your journal can tell you which suits you.",
  },
  {
    q: "Should I move my stop to break-even after TP1?",
    a: "It is a choice, not a rule. Moving it means the rest of the trade can't lose, but normal pullbacks will close it at the entry more often. Leaving it gives the trade room but risks giving back part of TP1. Decide before you enter, then follow it.",
  },
  {
    q: "Is a take profit guaranteed to fill?",
    a: "A take profit usually works like a limit order: it fills at your price or better, but only if the market actually trades there. If price turns a pip short of it, nothing fills. On a sell trade the target is a buy order, which fills at the ask, so the chart (usually the bid) has to go past the target by about the spread.",
  },
  {
    q: "How far should my take profit be?",
    a: "Where the chart says price is likely to stall: the next opposing swing, liquidity pool or zone. Then check the ratio. If the nearest real level is too close to justify the risk, skip the trade or wait for a better entry. Don't push the target past real levels to make the numbers work.",
  },
];

export default function TakeProfitPage() {
  return (
    <ContentPage
      eyebrow="Glossary · Execution"
      title="Take profit (TP1 / TP2)"
      breadcrumbs={[
        { name: "Glossary", href: GLOSSARY_PATH },
        { name: "Take profit (TP1 / TP2)", href: PATH },
      ]}
      schema={[definedTermSchema(SLUG, "Take profit (TP1 / TP2)", DEFINITION), faqSchema(FAQ)]}
      answer={<p>{DEFINITION}</p>}
    >
      <TermFigure
        src="/glossary/take-profit.svg"
        alt="A buy trade drawn as a ladder of four horizontal lines: the stop loss at the bottom, the entry above it, TP1 at 1.5 times the risk at the next swing high, and TP2 at 2.5 times the risk at the higher swing high. Price rises from the entry, touches TP1, pulls back and then reaches TP2."
        caption="Targets sit at levels on the chart, not at round numbers. TP1 is the nearest level likely to stall price; TP2 is the next one."
      />

      <ContentSection id="placement" title="Where a take profit goes">
        <ol>
          <li>
            <strong>Find the levels in the way.</strong> For a buy, the swing
            highs above the entry, the{" "}
            <a href={glossaryHref("buy-side-sell-side-liquidity")}>
              buy-side liquidity
            </a>{" "}
            resting there, and any{" "}
            <a href={glossaryHref("supply-demand-zone")}>supply zone</a>. Each
            is a place where sellers have shown up before.
          </li>
          <li>
            <strong>Put TP1 at the nearest one, TP2 at the next.</strong>{" "}
            Targets go just before a level, not beyond it, because price often
            turns a little short of an obvious high.
          </li>
          <li>
            <strong>Check the ratio.</strong> Divide each target&apos;s
            distance by the{" "}
            <a href={glossaryHref("stop-loss")}>stop loss</a> distance. If the
            first real level pays less than the risk you are taking, the trade
            isn&apos;t worth it from this{" "}
            <a href={glossaryHref("entry")}>entry</a>. The{" "}
            <a href="/tools/risk-reward-calculator">risk reward calculator</a>{" "}
            does the arithmetic.
          </li>
        </ol>
      </ContentSection>

      <ContentSection id="example" title="A worked example: what splitting really pays">
        <p>
          A EUR/USD buy on a $3,000 account, risking 1% ($30). The prices are
          an illustration, not real data.
        </p>
        <ul>
          <li>
            <strong>The levels:</strong> entry 1.1000, stop 1.0970 (30 pips,
            which is 1R), TP1 1.1045 at the next swing high (45 pips, 1.5R),
            TP2 1.1075 at the higher one (75 pips, 2.5R).
          </li>
          <li>
            <strong>The size:</strong> $30 ÷ (30 pips × $10 per pip per lot) =
            0.10 lots. Half (0.05 lots, $0.50 a pip) closes at TP1 and half
            runs to TP2.
          </li>
        </ul>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[480px] border-collapse text-left text-[0.9375rem]">
            <thead>
              <tr className="border-b border-white/10 text-fg">
                <th scope="col" className="py-3 pr-4 font-semibold">What happens</th>
                <th scope="col" className="py-3 pr-4 font-semibold">Result</th>
                <th scope="col" className="py-3 font-semibold">In R</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/10">
                <td className="py-3 pr-4">Stop hit before TP1</td>
                <td className="py-3 pr-4">−$30.00</td>
                <td className="py-3">−1R</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-3 pr-4">TP1, then the original stop</td>
                <td className="py-3 pr-4">$22.50 − $15.00 = $7.50</td>
                <td className="py-3">+0.25R</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-3 pr-4">TP1, then a stop moved to the entry</td>
                <td className="py-3 pr-4">$22.50 + $0 = $22.50</td>
                <td className="py-3">+0.75R</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-3 pr-4">TP1 and TP2</td>
                <td className="py-3 pr-4">$22.50 + $37.50 = $60.00</td>
                <td className="py-3">+2R</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-3 pr-4">One target only, at TP2, and it is hit</td>
                <td className="py-3 pr-4">75 pips × $1.00 = $75.00</td>
                <td className="py-3">+2.5R</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Splitting turns some losers into small winners, but it takes a
          fifth of the profit off the trades that run all the way (2R
          instead of 2.5R). Neither is better in general. Which one suits you
          depends on how often price reaches TP1 but not TP2 on your setups,
          and only a journal of your own trades can answer that.
        </p>
      </ContentSection>

      <ContentSection id="order" title="How the order fills">
        <p>
          A take profit is normally a limit order resting at your target. The
          US SEC&apos;s investor education site explains that a limit order
          fills at the stated price or better, but only if the market reaches
          that price, so it is never guaranteed to fill (
          <a href={INVESTOR_GOV_ORDER_TYPES} rel="noopener">
            Investor.gov: understanding order types
          </a>
          ). It is written about shares, but forex and gold limit orders work
          the same way.
        </p>
        <p>
          Two practical results. A gap through your target fills at the better
          price, unlike a stop. And on a sell trade the target is a buy order,
          which fills at the ask, so the bid price most charts show has to fall
          past your target by roughly the spread before it fills.
        </p>
      </ContentSection>

      <ContentSection id="variants" title="What traders disagree on">
        <ul>
          <li>
            <strong>Structure or a fixed multiple.</strong> Some set targets at
            chart levels; others at a fixed 2R or 3R regardless of the chart. A
            fixed multiple is simple to test but may sit just beyond a level
            price rarely passes.
          </li>
          <li>
            <strong>How to split.</strong> Half and half, a third at TP1, or a
            quarter. There is no standard; the table above shows the trade-off.
          </li>
          <li>
            <strong>What to do with the runner.</strong> Leave it to TP2, move
            the stop to the entry, or trail it behind new swings.
          </li>
        </ul>
        <p>
          {SITE.name} uses chart levels: each target sits at a real opposing
          level, and neither is pushed further out just to improve the ratio.
        </p>
      </ContentSection>

      <ContentSection id="why" title="Why it matters">
        <p>
          The take profit is half of the{" "}
          <a href="/tools/risk-reward-calculator">risk-to-reward ratio</a>, and
          the ratio decides how often you need to win. A plan without a target
          usually ends with a winner closed early out of nerves, or held until
          it turns into a loser. Deciding the exit before the entry takes that
          choice out of the moment.
        </p>
      </ContentSection>

      <ContentSection id="mistakes" title="Common mistakes">
        <ul>
          <li>
            <strong>A target beyond the level.</strong> Price often stalls just
            short of an obvious high. Set the target just before it.
          </li>
          <li>
            <strong>Stretching the target to fix the ratio.</strong> If the
            nearest real level doesn&apos;t pay enough, the problem is the entry
            or the trade, not the target.
          </li>
          <li>
            <strong>Moving the target further once price gets close.</strong>{" "}
            Greed turns a planned exit into a hope. If you want a runner, plan
            it as TP2 before you enter.
          </li>
          <li>
            <strong>Forgetting the spread on sells.</strong> A sell&apos;s
            target fills on the ask; leave room for it.
          </li>
        </ul>
      </ContentSection>

      <TermFaq faq={FAQ} />

      <ContentSection id="app" title="Take profits in the app">
        <p>
          Every {SITE.name} setup shows two targets on its execution ladder,
          labelled TP1 (trim) and TP2 (runner), each with its distance in pips
          and its ratio to the stop. On Premium&apos;s extended analysis, TP1
          is the nearest opposing liquidity or structure level that is at
          least 1.5 times the risk away, and TP2 the next major level at least
          2 times the risk away. If the chart has no such levels, you get
          &quot;no trade&quot; instead of invented targets, and that analysis
          doesn&apos;t count toward your daily limit. How much to close at TP1
          is your choice. The journal follows each setup: once TP1 is hit it
          keeps tracking toward TP2. The app never places the orders; you do
          that at your broker.
        </p>
      </ContentSection>

      <RelatedTerms current={SLUG} />
    </ContentPage>
  );
}

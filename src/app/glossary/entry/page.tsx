import type { Metadata } from "next";
import { ContentPage, ContentSection } from "@/components/ContentPage";
import { RelatedTerms, TermFaq, TermFigure } from "@/components/glossary/TermParts";
import { definedTermSchema, faqSchema, GLOSSARY_PATH, glossaryHref } from "@/lib/glossary";
import { SITE } from "@/lib/site";

const SLUG = "entry";
const PATH = glossaryHref(SLUG);

export const metadata: Metadata = {
  title: "Entry Price: Market, Limit and Stop Entries",
  description:
    "The entry is the price a trade opens at. Market, limit and stop entries compared, why it sets your risk for the same stop and target, and the spread catch.",
  alternates: { canonical: PATH },
};

const DEFINITION =
  "The entry is the price at which a trade is opened. With the stop loss and target fixed by the chart, the entry decides how much you risk, how much you can make and how large a position your account allows.";

const FAQ = [
  {
    q: "Should I use a market order or a limit order to enter?",
    a: "A market order fills now at the current price, so you never miss the trade but often pay more. A limit order waits for a better price, so the risk is smaller but the trade may never fill. Use a limit when your plan names a level; use market when the reason to enter is happening now and the ratio still works.",
  },
  {
    q: "What is an entry zone?",
    a: "A range of prices where the setup is valid, such as an order block or the optimal trade entry band, instead of one exact price. Many traders still place a single order inside it, often at the edge nearest the market for more fills, or the middle for a better ratio.",
  },
  {
    q: "Why didn't my buy limit fill when price touched my level?",
    a: "Most charts plot the bid price, but a buy fills at the ask, which is higher by the spread. If price touched your level on the bid chart, the ask may have stayed a pip or two above it. Some traders place buy limits a little above the level for this reason.",
  },
  {
    q: "Can I move my entry after placing the order?",
    a: "You can change a pending order until it fills. Moving it to chase price is the usual mistake: it widens the stop distance and shrinks the reward. If you move the entry, recalculate the lot size and the ratio before you do.",
  },
];

export default function EntryPage() {
  return (
    <ContentPage
      eyebrow="Glossary · Execution"
      title="Entry"
      breadcrumbs={[
        { name: "Glossary", href: GLOSSARY_PATH },
        { name: "Entry", href: PATH },
      ]}
      schema={[definedTermSchema(SLUG, "Entry", DEFINITION), faqSchema(FAQ)]}
      answer={
        <p>
          {DEFINITION} A good idea entered at a bad price can still be a bad
          trade.
        </p>
      }
    >
      <TermFigure
        src="/glossary/entry.svg"
        alt="A bullish chart with one target line above and one stop loss line below. Three entry prices are marked: a stop entry above the recent high that buys the break, a market entry at the current price, and a limit entry lower down at the support level that waits for price to come back."
        caption="One idea, three ways in. The stop and the target don't move; the lower the entry, the smaller the risk and the bigger the reward, and the more likely price never gets there."
      />

      <ContentSection id="types" title="The three ways to enter">
        <ul>
          <li>
            <strong>Market entry.</strong> Buy or sell now at the current price.
            It always fills, but you take whatever price is there, including
            any slippage in a fast market.
          </li>
          <li>
            <strong>Limit entry.</strong> A pending order to buy below the
            current price or sell above it. It is how you enter on a{" "}
            <a href={glossaryHref("retest")}>retest</a> or a pullback into a
            zone. Better price, but no fill if price turns early.
          </li>
          <li>
            <strong>Stop entry.</strong> A pending order to buy above the
            current price or sell below it, so you only get in if price breaks
            a level. It confirms the move but pays up for it, and a{" "}
            <a href={glossaryHref("liquidity-sweep")}>sweep</a> can fill it and
            reverse.
          </li>
        </ul>
        <p>
          Whichever you use, the{" "}
          <a href={glossaryHref("stop-loss")}>stop loss</a> comes from the
          chart first: where the idea is proven wrong. The entry is then chosen
          so that the distance to the stop and to the target makes sense.
        </p>
      </ContentSection>

      <ContentSection id="variants" title="What traders disagree on">
        <ul>
          <li>
            <strong>One price or a zone.</strong> Some plans give a single entry;
            others give a zone and leave the exact fill to you.
          </li>
          <li>
            <strong>Confirmation or anticipation.</strong> Confirmation traders
            wait for a close, a break or a lower-timeframe signal and accept a
            worse price. Anticipation traders place limits at the level and
            accept that some of them fill on trades that fail.
          </li>
          <li>
            <strong>Scaling in.</strong> Splitting one position across two or
            three entries gives an average price that depends on how many
            fill. If you scale in, size the whole position from the worst
            case: all orders filled and the stop hit.
          </li>
        </ul>
        <p>
          {SITE.name} gives one entry level with each setup, so the stop
          distance, the ratio and the lot size are all measured from the same
          price.
        </p>
      </ContentSection>

      <ContentSection id="example" title="A worked example">
        <p>
          A 4-hour USD/JPY chart, a sell. The prices are an illustration, not
          real data. A JPY pip is 0.01.
        </p>
        <ul>
          <li>
            <strong>The plan:</strong> stop at 151.80, above the swing high;
            target at 150.20, the next low. Price is at 151.20 now; a zone the
            idea sells from sits at 151.50.
          </li>
          <li>
            <strong>Market entry at 151.20:</strong> 60 pips of risk, 100 pips of
            reward, 1:1.67.
          </li>
          <li>
            <strong>Limit entry at 151.50:</strong> 30 pips of risk, 130 pips of
            reward, 1:4.33.
          </li>
          <li>
            <strong>Sized at 1% of a $2,000 account ($20):</strong> a USD/JPY
            pip is worth about $6.60 per standard lot at these prices
            (100,000 × 0.01 ÷ price). The market entry allows 0.05 lots,
            risking about $20 to make about $33. The limit entry allows 0.10
            lots, risking about $20 to make about $86.
          </li>
        </ul>
        <p>
          Same idea, same stop, same target, same dollar risk. The limit entry
          pays well over twice as much if it fills, and nothing if price rises
          only to 151.40 before falling to the target without it. The{" "}
          <a href="/tools/pip-calculator">pip calculator</a> and the{" "}
          <a href="/tools/lot-size-calculator">lot size calculator</a> do this
          for any pair.
        </p>
      </ContentSection>

      <ContentSection id="why" title="Why it matters">
        <p>
          Beginners spend most of their time on direction: up or down. But a
          right call entered late can still lose money over time, because it
          risks a lot to make a little and needs a high win rate to break
          even. The entry is where direction turns into numbers, and the{" "}
          <a href="/tools/risk-reward-calculator">risk-to-reward ratio</a>{" "}
          shows whether those numbers are worth it.
        </p>
      </ContentSection>

      <ContentSection id="mistakes" title="Common mistakes">
        <ul>
          <li>
            <strong>Chasing.</strong> Entering after a big candle because the
            move &quot;is happening&quot;. The stop is now far away and the
            target close.
          </li>
          <li>
            <strong>Picking the entry first, then a stop that fits.</strong>{" "}
            Shrinking the stop to make a late entry look good puts it inside
            normal price noise. Move the entry, not the stop.
          </li>
          <li>
            <strong>Forgetting the spread.</strong> Buys fill at the ask,
            sells at the bid. On a tight plan, a 2-pip spread changes the
            ratio.
          </li>
          <li>
            <strong>Not resizing.</strong> A different entry means a different
            stop distance, which means a different lot size. Recalculate every
            time.
          </li>
        </ul>
      </ContentSection>

      <TermFaq faq={FAQ} />

      <ContentSection id="app" title="Entries in the app">
        <p>
          Each {SITE.name} setup comes with one entry price, a stop loss and
          two targets, with the pips and the ratio for each, and the lot size
          for your account and risk. On Premium&apos;s extended analysis, when
          price at market is too far from the level that would prove the idea
          wrong to reach a target of at least 1.5 times the risk, the plan uses
          a pullback entry closer to that level instead of shrinking the stop.
          The app never places the trade; the decision stays with you.
        </p>
      </ContentSection>

      <RelatedTerms current={SLUG} />
    </ContentPage>
  );
}

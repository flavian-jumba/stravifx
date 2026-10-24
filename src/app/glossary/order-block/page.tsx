import type { Metadata } from "next";
import { ContentPage, ContentSection } from "@/components/ContentPage";
import { RelatedTerms, TermFaq, TermFigure } from "@/components/glossary/TermParts";
import { definedTermSchema, faqSchema, GLOSSARY_PATH, glossaryHref } from "@/lib/glossary";
import { SITE } from "@/lib/site";

const SLUG = "order-block";
const PATH = glossaryHref(SLUG);

export const metadata: Metadata = {
  title: "Order Block (OB) in Trading: How to Mark One",
  description:
    "An order block is the last opposing candle before a strong move away. How to mark it (body or wick), when it counts, where the stop goes, with a worked example.",
  alternates: { canonical: PATH },
};

const DEFINITION =
  "An order block is the last opposing candle before a strong move away: the final down candle before a rally, or the final up candle before a drop.";

const FAQ = [
  {
    q: "Do you mark an order block from the wicks or the bodies?",
    a: "Traders disagree. Wick to wick gives the widest zone and catches more touches; bodies only is tighter and misses more. A common middle way plans the entry from the body and puts the stop beyond the wick, because a move past the wick means the block has failed.",
  },
  {
    q: "What makes an order block valid?",
    a: "There is no standard test. Most definitions want the move away to be strong (a large candle, often called displacement) and to break structure. Many also prefer that the move left a fair value gap. A down candle before a weak drift higher is just a candle, not an order block.",
  },
  {
    q: "What does it mean when an order block is mitigated?",
    a: "Price has come back and traded into it. Many traders treat a block as used once it has been touched, so a second visit is weaker. If price closes through the far side instead, the block has failed, and some traders then watch it as a breaker block.",
  },
  {
    q: "Is an order block the same as a supply or demand zone?",
    a: "They overlap. Both mark an area a strong move left from. An order block is narrower: one candle, or a short run of same-colour candles, picked by a rule. A supply or demand zone is usually drawn around the whole base the move started from.",
  },
];

export default function OrderBlockPage() {
  return (
    <ContentPage
      eyebrow="Glossary · Zones"
      title="Order block (OB)"
      breadcrumbs={[
        { name: "Glossary", href: GLOSSARY_PATH },
        { name: "Order block (OB)", href: PATH },
      ]}
      schema={[definedTermSchema(SLUG, "Order block (OB)", DEFINITION), faqSchema(FAQ)]}
      answer={
        <p>
          {DEFINITION} Traders mark it as a zone price may come back to, and
          use it as an entry area with the stop just beyond it.
        </p>
      }
    >
      <TermFigure
        src="/glossary/order-block.svg"
        alt="A falling price path ends in one down candle, then a large up candle breaks above the last swing high. The down candle is boxed in gold and labelled bullish order block. Price later returns into the box, with the entry at the top of the body and the stop below the wick."
        caption="A bullish order block: the last down candle before a strong move up that breaks the last swing high. The zone runs from its body to its wick; a close below the wick means it failed."
      />

      <ContentSection id="what" title="How to find one">
        <p>
          Start from the move, not the candle. Find a strong push that breaks
          structure: a{" "}
          <a href={glossaryHref("break-of-structure")}>break of structure</a>{" "}
          or a <a href={glossaryHref("change-of-character")}>change of character</a>
          . Then step back to the last candle that went the other way before
          it started.
        </p>
        <ul>
          <li>
            <strong>Bullish order block:</strong> the last down (red) candle
            before a strong rally. It is a possible buy zone if price returns.
          </li>
          <li>
            <strong>Bearish order block:</strong> the last up (green) candle
            before a strong drop. It is a possible sell zone.
          </li>
          <li>
            <strong>Several candles:</strong> if two or three same-colour
            candles sit before the move, most traders box them as one zone.
          </li>
        </ul>
        <p>
          The usual explanation is that large traders filled part of a
          position there and may defend or add to it on a return. That is a
          story about why it might work; a chart can&apos;t show whose orders
          were filled.
        </p>
      </ContentSection>

      <ContentSection id="variants" title="Where traders disagree">
        <p>
          The order block comes from ICT and smart-money teaching, and it has
          no single rule book. Three choices change what you mark:
        </p>
        <ul>
          <li>
            <strong>Body or wick.</strong> Wick to wick is the widest zone; the
            body alone is the tightest. Planning the entry from the body and
            the stop beyond the wick is a common compromise.
          </li>
          <li>
            <strong>How strong the move must be.</strong> Some want only a
            large candle; others also want a break of structure, a{" "}
            <a href={glossaryHref("liquidity-sweep")}>liquidity sweep</a> just
            before it, or a{" "}
            <a href={glossaryHref("fair-value-gap")}>fair value gap</a> left
            behind.
          </li>
          <li>
            <strong>When it is used up.</strong> Many traders count a block
            once: after the first touch it is &quot;mitigated&quot;. Others
            keep it until price closes through its far side.
          </li>
        </ul>
        <p>
          {SITE.name}&apos;s glossary uses the plain version: the last
          opposing candle before an aggressive move away. Use the filters you
          like, but use the same ones every time, or your journal can&apos;t
          tell you whether they work.
        </p>
      </ContentSection>

      <ContentSection id="example" title="A worked example">
        <p>
          A 4-hour EUR/USD chart. The prices are an illustration, not real
          data.
        </p>
        <ul>
          <li>
            <strong>The block:</strong> after a dip, the last down candle opens
            at 1.0912, trades between 1.0918 and 1.0884, and closes at 1.0890.
            The next candle rallies to 1.0975 and closes above the last swing
            high at 1.0950. That down candle is a bullish order block, with a
            body of 1.0890–1.0912 and a wick low of 1.0884.
          </li>
          <li>
            <strong>Entry at the top of the body:</strong> a buy at 1.0912 when
            price returns, with the stop at 1.0879, 5 pips below the wick (33
            pips of risk). The target is the new high at 1.0975, 63 pips away:
            a 1:1.91{" "}
            <a href="/tools/risk-reward-calculator">risk-to-reward</a>. On a
            $1,000 account risking 1% ($10), 33 pips at $10 a pip per standard
            lot gives 0.03 lots, risking $9.90.
          </li>
          <li>
            <strong>Entry at the middle of the block:</strong> a buy at 1.0901,
            halfway between 1.0918 and 1.0884, with the same stop, risks 22
            pips for 74: 1:3.36, and 0.04 lots risking $8.80. Better numbers,
            but price may turn at 1.0912 and never fill the order.
          </li>
        </ul>
        <p>
          A deeper entry improves the ratio and lowers the chance of a fill.
          The <a href="/tools/lot-size-calculator">lot size calculator</a>{" "}
          resizes the trade for whichever stop distance you choose.
        </p>
      </ContentSection>

      <ContentSection id="why" title="Why it matters">
        <p>
          An order block gives a pullback trade two things a beginner usually
          lacks: a specific area to wait for instead of chasing the move, and a
          clear point where the idea is wrong (beyond the far side of the
          block). That makes the stop a structural decision rather than a
          guess, and the lot size follows from it.
        </p>
      </ContentSection>

      <ContentSection id="mistakes" title="Common mistakes">
        <ul>
          <li>
            <strong>Marking every opposite candle.</strong> Every rally starts
            after some down candle. Without a strong move that breaks structure,
            it isn&apos;t an order block.
          </li>
          <li>
            <strong>Buying a bullish block in a downtrend.</strong> A block
            against the higher-timeframe trend is often run straight through.
            Check the bigger picture first.
          </li>
          <li>
            <strong>Putting the stop inside the block.</strong> Price often
            trades deep into the zone before turning. A stop at the middle gets
            taken on a normal test.
          </li>
          <li>
            <strong>Trading the third or fourth touch.</strong> Each visit uses
            up whatever orders were there. The first return is the one most
            traders plan for.
          </li>
        </ul>
      </ContentSection>

      <TermFaq faq={FAQ} />

      <ContentSection id="app" title="Order blocks in the app">
        <p>
          On Premium&apos;s extended analysis, {SITE.name} places the stop just
          beyond the swing high or low, or the order block, whose break would
          prove the idea wrong, plus a buffer of about half the average candle
          range over the last 14 candles (ATR). It doesn&apos;t place stops
          inside recent candle noise. The hourly Swing signals check doesn&apos;t
          look for order blocks; it works from sweeps, breaks of structure and
          fair value gaps. Either way, the levels are a reading of the chart,
          not a prediction, and the decision stays with you.
        </p>
      </ContentSection>

      <RelatedTerms current={SLUG} />
    </ContentPage>
  );
}

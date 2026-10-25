import type { Metadata } from "next";
import { ContentPage, ContentSection } from "@/components/ContentPage";
import { RelatedTerms, TermFaq, TermFigure } from "@/components/glossary/TermParts";
import { definedTermSchema, faqSchema, GLOSSARY_PATH, glossaryHref } from "@/lib/glossary";
import { SITE } from "@/lib/site";

const SLUG = "supply-demand-zone";
const PATH = glossaryHref(SLUG);

export const metadata: Metadata = {
  title: "Supply and Demand Zones: How to Draw and Use Them",
  description:
    "A supply or demand zone is an area where price turned sharply before. How to draw one from the base, fresh vs tested zones, and a worked gold example.",
  alternates: { canonical: PATH },
};

const DEFINITION =
  "A supply or demand zone is an area where price previously turned sharply, suggesting unfilled selling (supply) or buying (demand) interest may still be resting there.";

const FAQ = [
  {
    q: "What is the difference between a supply and demand zone and support and resistance?",
    a: "Support and resistance is usually a line at a price that has held several times. A supply or demand zone is an area, drawn around the base a sharp move started from, and it is often strongest before price has come back to it at all. The ideas overlap; the zone gives you a top and bottom to put the entry and the stop.",
  },
  {
    q: "Is a demand zone the same as an order block?",
    a: "They overlap. Both mark an area a strong move left from. An order block is narrower: the last opposing candle before the move. A supply or demand zone is usually drawn around the whole base, which can be several candles, so it is wider.",
  },
  {
    q: "How many times can a supply or demand zone be used?",
    a: "There is no fixed number. Many traders treat the first return as the best one and each later touch as weaker, on the idea that the resting orders get used up. A close beyond the far edge of the zone ends it.",
  },
  {
    q: "Which timeframe should I draw zones on?",
    a: "Draw them on the timeframe you plan the trade on, and check the zone sits in the direction of the higher timeframe. A 15-minute demand zone inside a daily downtrend is a weaker buy than the same zone inside a daily uptrend.",
  },
];

export default function SupplyDemandZonePage() {
  return (
    <ContentPage
      eyebrow="Glossary · Zones"
      title="Supply and demand zones"
      breadcrumbs={[
        { name: "Glossary", href: GLOSSARY_PATH },
        { name: "Supply / demand zone", href: PATH },
      ]}
      schema={[
        definedTermSchema(SLUG, "Supply / demand zone", DEFINITION),
        faqSchema(FAQ),
      ]}
      answer={
        <p>
          {DEFINITION} A demand zone sits below price and is watched for buys; a
          supply zone sits above it and is watched for sells. The first return
          to a zone usually counts most.
        </p>
      }
    >
      <TermFigure
        src="/glossary/supply-demand-zone.svg"
        alt="Price drops into a tight base of small candles, then rallies hard away from it. The base is shaded as a demand zone, with its top marked proximal line and its bottom marked distal line. Later price falls back into the zone and rallies again."
        caption="A demand zone drawn from a drop-base-rally: the base's top is the proximal line (the entry edge), its lowest wick the distal line (where the zone is broken). A supply zone is the same shape upside down."
      />

      <ContentSection id="draw" title="How to draw a zone">
        <ol>
          <li>
            <strong>Find the sharp move.</strong> Look for several large
            candles leaving an area quickly, ideally breaking a recent high or
            low on the way. A slow drift away doesn&apos;t count.
          </li>
          <li>
            <strong>Find the base.</strong> The base is the one to three small
            candles just before the move, where price paused. If there is no
            pause, use the candle the move turned on.
          </li>
          <li>
            <strong>Draw two lines.</strong> The proximal line is the edge of
            the base nearest current price; the distal line is the far edge,
            taken from the extreme wick. For demand, the proximal line is the
            top of the base and the distal line its lowest low.
          </li>
        </ol>
        <p>
          The move before the base tells you the pattern. Drop, base, rally or
          rally, base, rally make a demand zone. Rally, base, drop or drop,
          base, drop make a supply zone. The first two of each pair are
          reversals; the second are continuations of a trend that paused.
        </p>
      </ContentSection>

      <ContentSection id="variants" title="What traders disagree on">
        <ul>
          <li>
            <strong>The proximal line.</strong> Some draw it at the top of the
            base&apos;s candle bodies, others at the top of the wicks. Bodies
            give a narrower zone and a tighter stop; wicks get filled more
            often.
          </li>
          <li>
            <strong>Fresh or tested.</strong> Many trade only fresh zones,
            ones price hasn&apos;t returned to. Others accept a second or third
            touch.
          </li>
          <li>
            <strong>How strong the move must be.</strong> Some want the move to
            break structure; others accept any fast move away.
          </li>
          <li>
            <strong>Zone or order block.</strong> Smart-money traders often
            narrow a demand zone to its{" "}
            <a href={glossaryHref("order-block")}>order block</a>, the last
            down candle in the base. Same idea, smaller box.
          </li>
        </ul>
        <p>
          {SITE.name}&apos;s glossary uses the plain definition above. This
          page draws the distal line from the wick and counts a zone as broken
          only when a candle closes beyond it, the same close rule the rest of
          the glossary uses. Pick your own version of the rest and keep it
          fixed, so your journal can show whether it works.
        </p>
      </ContentSection>

      <ContentSection id="example" title="A worked example">
        <p>
          A 1-hour gold (XAU/USD) chart. The prices are an illustration, not
          real data.
        </p>
        <ul>
          <li>
            <strong>The zone:</strong> gold drops, pauses for three small
            candles, then rallies hard to 4,048, breaking the last lower high.
            The base&apos;s candle bodies top out at 4,020 (proximal line) and
            its lowest wick is 4,013 (distal line). The zone is fresh.
          </li>
          <li>
            <strong>The trade idea:</strong> a buy limit at 4,020, with the stop
            at 4,010, $3 below the distal line. That is a $10 stop. The target is
            the high at 4,048, $28 away: a 1:2.8{" "}
            <a href="/tools/risk-reward-calculator">risk-to-reward</a>.
          </li>
          <li>
            <strong>The size:</strong> one standard lot of gold is 100 ounces,
            so a $10 move is $1,000 per lot. On a $2,000 account risking 1%
            ($20), that is 0.02 lots, risking $20.
          </li>
        </ul>
        <p>
          Buy at the middle of the zone instead, 4,016.50, and the stop shrinks
          to $6.50 and the ratio grows to about 1:4.8, but price may never
          trade that deep and you miss the trade. A close below 4,013 ends the
          zone either way. The{" "}
          <a href="/tools/lot-size-calculator">lot size calculator</a> handles
          gold and works out the size for any stop.
        </p>
      </ContentSection>

      <ContentSection id="why" title="Why it matters">
        <p>
          A zone turns &quot;price might bounce around here&quot; into two
          numbers: where to enter and where you&apos;re wrong. That is what a
          stop loss and a lot size need. It also keeps you from buying in the
          middle of nowhere: if price isn&apos;t at a zone, there is often no
          trade yet.
        </p>
      </ContentSection>

      <ContentSection id="mistakes" title="Common mistakes">
        <ul>
          <li>
            <strong>Zones everywhere.</strong> Marking every pause gives you a
            zone at every price, which means none of them tells you anything.
            Keep the ones with a sharp move away.
          </li>
          <li>
            <strong>Boxes that are too wide.</strong> A wide zone means a wide
            stop and a small position. If the base is huge, look for a tighter
            one on a lower timeframe or skip it.
          </li>
          <li>
            <strong>Trading against the bigger trend.</strong> Demand zones in
            a downtrend fail more often than the chart makes them look. Check{" "}
            <a href={glossaryHref("market-structure")}>market structure</a> on
            the higher timeframe first.
          </li>
          <li>
            <strong>Using a broken zone.</strong> Once a candle closes beyond
            the distal line, the zone is gone. It may now work the other way, as
            a <a href={glossaryHref("retest")}>retest</a> from the other side.
          </li>
          <li>
            <strong>The stop on the line.</strong> Price often wicks to the
            distal line exactly. Leave a little room beyond it.
          </li>
        </ul>
      </ContentSection>

      <TermFaq faq={FAQ} />

      <ContentSection id="app" title="Supply and demand in the app">
        <p>
          The {SITE.name} glossary defines supply and demand zones so you can
          follow any reading that mentions one, and every term in an analysis
          links to its definition. An analysis gives an entry zone, a stop and
          two targets from the chart&apos;s structure; on Premium&apos;s
          extended analysis the stop goes just beyond the swing point or order
          block that would prove the idea wrong, and each target must offer at
          least 1.5 and 2 times the risk. The decision stays with you.
        </p>
      </ContentSection>

      <RelatedTerms current={SLUG} />
    </ContentPage>
  );
}

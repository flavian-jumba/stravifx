import type { Metadata } from "next";
import { ContentPage, ContentSection } from "@/components/ContentPage";
import { RelatedTerms, TermFaq, TermFigure } from "@/components/glossary/TermParts";
import { definedTermSchema, faqSchema, GLOSSARY_PATH, glossaryHref } from "@/lib/glossary";
import { SITE } from "@/lib/site";

const SLUG = "range-consolidation";
const PATH = glossaryHref(SLUG);

export const metadata: Metadata = {
  title: "Trading Range and Consolidation: How to Spot One",
  description:
    "A range, or consolidation, is price moving between a ceiling and a floor without breaking either. How to mark the edges, when it ends, and a GBP/USD example.",
  alternates: { canonical: PATH },
};

const DEFINITION =
  "A range, also called consolidation, is price moving back and forth between a ceiling and a floor without making progress in either direction.";

const FAQ = [
  {
    q: "Is consolidation the same as a range?",
    a: "Mostly, yes. Traders say range for a clear sideways box with well-tested edges, and consolidation for any pause after a move, which may be a tight box or a small flag. The StraviFX glossary treats them as one term: price stops making higher highs and higher lows, or lower highs and lower lows, and moves between two edges.",
  },
  {
    q: "How many touches make a range?",
    a: "There is no fixed number. Two swing highs at roughly the same price and two swing lows at roughly the same price is the usual minimum, because one touch of each is just a pullback. More touches make the edges clearer, and also put more stop orders just beyond them.",
  },
  {
    q: "How do I know when a range has ended?",
    a: "When a candle closes beyond one of its edges. A wick that pokes through and closes back inside doesn't end the range; it often marks a liquidity sweep instead. After a close outside, a retest of the broken edge from the other side is the usual next thing to watch.",
  },
  {
    q: "Should I trade inside a range or wait for the breakout?",
    a: "Both are valid plans, and neither is safer by default. Trading the edges means buying near the floor and selling near the ceiling, with a stop just outside. Waiting means doing nothing until a close outside, then planning with the trend that follows. Trading the middle of the range is the one choice with no edge to lean on.",
  },
];

export default function RangeConsolidationPage() {
  return (
    <ContentPage
      eyebrow="Glossary · Structure"
      title="Range / consolidation"
      breadcrumbs={[
        { name: "Glossary", href: GLOSSARY_PATH },
        { name: "Range / consolidation", href: PATH },
      ]}
      schema={[
        definedTermSchema(SLUG, "Range / consolidation", DEFINITION),
        faqSchema(FAQ),
      ]}
      answer={
        <p>
          {DEFINITION} The highs and lows stop trending and line up along two
          edges. Trend strategies struggle here, and a range often comes
          before a larger move, so it is usually a reason to wait.
        </p>
      }
    >
      <TermFigure
        src="/glossary/range-consolidation.svg"
        alt="Diagram of price bouncing between a dashed ceiling and a dashed floor four times each, with a grey midpoint line between them. On the right, price closes above the ceiling and the range ends."
        caption="A range: four touches of each edge without a close beyond either. The close above the ceiling on the right is what ends it."
      />

      <ContentSection id="spot" title="How to spot a range">
        <p>
          A range is what{" "}
          <a href={glossaryHref("market-structure")}>market structure</a>{" "}
          looks like when it is neither bullish nor bearish. Instead of{" "}
          <a href={glossaryHref("higher-highs-higher-lows")}>higher highs and
          higher lows</a>, or lower highs and lower lows, you see:
        </p>
        <ul>
          <li>
            <strong>Swing highs at about the same price.</strong> They form the
            ceiling. Mark it from the wicks, the highest prices reached.
          </li>
          <li>
            <strong>Swing lows at about the same price.</strong> They form the
            floor, also marked from the wicks.
          </li>
          <li>
            <strong>No close beyond either edge.</strong> Wicks can poke
            through; candle bodies keep closing back inside.
          </li>
        </ul>
        <p>
          A quick way to tell a range from a pullback: in a pullback the last{" "}
          <a href={glossaryHref("swing-high-swing-low")}>swing</a> in the
          trend direction is still being exceeded. In a range, new swings
          keep stopping at the same two prices.
        </p>
      </ContentSection>

      <ContentSection id="end" title="When a range ends">
        <p>
          {SITE.name} uses one rule for every level: it counts as broken only
          when a candle closes beyond it. So a range ends on the first close
          outside the ceiling or the floor. That close is a{" "}
          <a href={glossaryHref("break-of-structure")}>break of structure</a>{" "}
          for whichever side wins.
        </p>
        <p>
          A wick through an edge that closes back inside is something else.
          Stop orders tend to rest just beyond a range&apos;s edges, and a
          spike that triggers them and snaps back is often called a sweep (see{" "}
          <a href={glossaryHref("liquidity")}>liquidity</a>). Treat it as a
          sign the edge was tested, not broken.
        </p>
      </ContentSection>

      <ContentSection id="example" title="A worked example">
        <p>
          On a 1-hour GBP/USD chart, two swing highs top out at 1.2708 and
          1.2710, and two swing lows bottom at 1.2652 and 1.2650. The prices
          are an illustration, not real data.
        </p>
        <ul>
          <li>
            <strong>The edges:</strong> ceiling 1.2710, floor 1.2650, so the
            range is 60 pips tall. The midpoint is 1.2680.
          </li>
          <li>
            <strong>A plan at the floor:</strong> buy at 1.2655, stop at
            1.2635 (15 pips below the floor), target 1.2700 (just under the
            ceiling). That risks 20 pips to make 45, a reward-to-risk ratio of
            1:2.25, which needs a win rate above about 31% to break even.
          </li>
          <li>
            <strong>The same plan from the midpoint:</strong> buy at 1.2680
            with the same stop and target, and you risk 45 pips to make 20,
            1:0.44. That is why the middle of a range is the worst place to
            enter.
          </li>
          <li>
            <strong>When the plan is off:</strong> a 1-hour close below
            1.2650 ends the range, and the buy idea with it.
          </li>
        </ul>
        <p>
          You can check numbers like these in the{" "}
          <a href="/tools/risk-reward-calculator">risk reward calculator</a>.
        </p>
      </ContentSection>

      <ContentSection id="why" title="Why it matters">
        <p>
          Most trend tools assume a trend. In a range they give a stream of
          breakouts that fail and pullbacks that never resume, which is where
          many beginners lose a week of gains. Recognising a range tells you
          to change plans: trade the edges with tight stops, or step aside
          until price closes outside. Ranges also tend to come before larger
          moves, so the break, when it comes, is worth being ready for.
        </p>
      </ContentSection>

      <ContentSection id="mistakes" title="Common mistakes">
        <ul>
          <li>
            <strong>Calling a range after one touch.</strong> A single high
            and a single low are a pullback until a second swing stops at the
            same place.
          </li>
          <li>
            <strong>Treating a wick as a breakout.</strong> Wait for a close
            outside the edge. Wicks through range edges are common, and many
            reverse.
          </li>
          <li>
            <strong>Entering in the middle.</strong> There is no level to put
            a stop behind, and the reward-to-risk is poor in both directions.
          </li>
          <li>
            <strong>Putting the stop exactly on the edge.</strong> The
            obvious price just beyond an edge is where many other stops sit.
            Leave room beyond it, and size the position for that distance.
          </li>
        </ul>
      </ContentSection>

      <TermFaq faq={FAQ} />

      <ContentSection id="app" title="Ranges in the app">
        <p>
          {SITE.name} describes a chart&apos;s structure in plain English, and
          a range is one of the three readings, next to bullish and bearish.
          Stand aside is one of its three possible calls, next to buy and
          sell, so a sideways chart doesn&apos;t have to be forced into a
          trade. The read is analysis, not a signal to trade; the decision
          stays with you.
        </p>
      </ContentSection>

      <RelatedTerms current={SLUG} />
    </ContentPage>
  );
}

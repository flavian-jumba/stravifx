import type { Metadata } from "next";
import { ContentPage, ContentSection } from "@/components/ContentPage";
import { RelatedTerms, TermFaq, TermFigure } from "@/components/glossary/TermParts";
import { definedTermSchema, faqSchema, GLOSSARY_PATH, glossaryHref } from "@/lib/glossary";
import { SITE } from "@/lib/site";

const SLUG = "market-structure-shift";
const PATH = glossaryHref(SLUG);

export const metadata: Metadata = {
  title: "Market Structure Shift (MSS): Meaning and Rules",
  description:
    "A market structure shift (MSS) is the confirmed flip after a trend breaks. See the three meanings traders use, the StraviFX rule and a worked GBP/USD example.",
  alternates: { canonical: PATH },
};

const DEFINITION =
  "A market structure shift (MSS) is a confirmed flip in direction: structure breaks against the old trend and then starts printing highs and lows in the new direction.";

const FAQ = [
  {
    q: "What is the difference between a CHoCH and an MSS?",
    a: "In the StraviFX glossary, a change of character is the first close against the trend, and a market structure shift is the confirmation that follows: a failed swing in the old direction and then a close beyond the next swing. A CHoCH says the trend may be ending; an MSS says the structure now points the other way.",
  },
  {
    q: "Does an MSS need displacement?",
    a: "Many ICT-style traders say yes: the break should come from a large, fast candle that closes well beyond the level, not a slow drift. Others don't require it. A strong candle is useful evidence, but it is not part of the StraviFX definition, which only asks for the failed swing and the close.",
  },
  {
    q: "Does an MSS need a liquidity sweep first?",
    a: "No. Some traders give more weight to a shift that starts with price spiking beyond an old high or low and snapping back, because it suggests stops were taken first. It is an extra condition some strategies add, not part of the definition.",
  },
  {
    q: "Is a market structure shift a guaranteed reversal?",
    a: "No. An MSS can fail like any other pattern: price can recover and close back beyond the lower high (or higher low) that defined it. It is the point where a reversal can be planned with a clear invalidation level, not a promise about where price goes next.",
  },
];

export default function MarketStructureShiftPage() {
  return (
    <ContentPage
      eyebrow="Glossary · Structure"
      title="Market Structure Shift (MSS)"
      breadcrumbs={[
        { name: "Glossary", href: GLOSSARY_PATH },
        { name: "Market Structure Shift (MSS)", href: PATH },
      ]}
      schema={[
        definedTermSchema(SLUG, "Market Structure Shift (MSS)", DEFINITION),
        faqSchema(FAQ),
      ]}
      answer={
        <p>
          {DEFINITION} It follows a change of character, once price fails to
          make a new extreme in the old direction: the point where a reversal
          can be planned.
        </p>
      }
    >
      <TermFigure
        src="/glossary/market-structure-shift.svg"
        alt="Diagram of a bearish market structure shift: an uptrend of higher highs and higher lows, a first close below the last higher low marked CHoCH, a rally that fails below the last high marked LH, then a close below the low that followed the CHoCH, marked MSS."
        caption="A bearish MSS: the CHoCH breaks the last higher low, the next rally fails as a lower high, and a close below the low in between confirms the new bearish structure."
      />

      <ContentSection id="meanings" title="Three meanings of MSS">
        <p>
          &quot;Market structure shift&quot; has no single agreed definition.
          When you read about it, check which of these the author means:
        </p>
        <ul>
          <li>
            <strong>Another name for a CHoCH.</strong> Some traders and
            indicators use MSS and{" "}
            <a href={glossaryHref("change-of-character")}>change of
            character</a> for the same first break against the trend.
          </li>
          <li>
            <strong>A CHoCH with displacement.</strong> In many ICT-style
            guides, a break only counts as an MSS when a large, fast candle
            closes through the level, often after a liquidity sweep. A slow
            break without that candle is called a CHoCH.
          </li>
          <li>
            <strong>The confirmed flip.</strong> The old trend breaks, the
            next swing fails in the old direction, and price then closes
            beyond the following swing. This is the meaning the {SITE.name}{" "}
            glossary uses.
          </li>
        </ul>
        <p>
          The three overlap more than they differ: all of them describe price
          breaking structure against the trend. The difference is how much
          evidence each one waits for.
        </p>
      </ContentSection>

      <ContentSection id="sequence" title="The StraviFX sequence">
        <p>For a bearish shift, after an uptrend:</p>
        <ol>
          <li>
            <strong>CHoCH.</strong> A candle closes below the last higher low.
          </li>
          <li>
            <strong>A new low forms.</strong> Price makes a{" "}
            <a href={glossaryHref("swing-high-swing-low")}>swing low</a> below
            the broken level.
          </li>
          <li>
            <strong>A lower high.</strong> The next rally turns before it
            reaches the last high. The buyers have failed to make a new
            extreme.
          </li>
          <li>
            <strong>MSS.</strong> A candle closes below the swing low from
            step 2. Price now has a lower high and a lower low: bearish
            structure.
          </li>
        </ol>
        <p>
          A bullish shift is the mirror image: a close above the last lower
          high, a higher low, then a close above the swing high in between.
          As with every break in the {SITE.name} glossary, the candle has to
          close beyond the level; a wick that pokes through and closes back
          does not count.
        </p>
      </ContentSection>

      <ContentSection id="example" title="A worked example">
        <p>
          GBP/USD on the 1-hour chart has been making{" "}
          <a href={glossaryHref("higher-highs-higher-lows")}>higher highs and
          higher lows</a>. The last high is 1.3120 and the last higher low is
          1.3060. These prices are an illustration, not a trade idea.
        </p>
        <ul>
          <li>
            <strong>CHoCH:</strong> a candle closes at 1.3052, below 1.3060.
          </li>
          <li>
            <strong>New low:</strong> price falls to 1.3035 and bounces.
          </li>
          <li>
            <strong>Lower high:</strong> the bounce stalls at 1.3095, 25 pips
            short of 1.3120.
          </li>
          <li>
            <strong>MSS:</strong> a candle closes at 1.3028, below 1.3035. The
            structure is now bearish.
          </li>
        </ul>
        <p>
          The lower high at 1.3095 is now the level that would prove the
          shift wrong: a close above it would put price back into its old
          range. That is why traders who sell after an MSS often place the
          stop loss just beyond the lower high. From a sell at 1.3028, a stop
          at 1.3100 is 72 pips away, and the{" "}
          <a href="/tools/lot-size-calculator">lot size calculator</a> turns
          that distance into a position size for your account.
        </p>
      </ContentSection>

      <ContentSection id="why" title="Why it matters">
        <p>
          A change of character tells you a trend-following trade has lost
          its reason. An MSS is the first point where a trade in the{" "}
          <em>new</em> direction has one: a structure to follow and a swing
          that marks where the idea is wrong. Waiting for it costs some of the
          move, because the shift confirms after price has already turned, but
          it filters out many of the CHoCHs that turn out to be deep
          pullbacks.
        </p>
      </ContentSection>

      <ContentSection id="mistakes" title="Common mistakes">
        <ul>
          <li>
            <strong>Mixing up the meanings.</strong> A course that calls the
            first break an MSS and a glossary that calls it a CHoCH are
            describing the same candle. Check the definition before you copy a
            rule.
          </li>
          <li>
            <strong>Calling an MSS on a wick.</strong> A spike below the low
            that closes back above it is more often a stop sweep than a shift.
          </li>
          <li>
            <strong>Ignoring the higher timeframe.</strong> A 5-minute MSS
            inside a 4-hour uptrend usually marks the end of a pullback, not a
            new 4-hour downtrend.
          </li>
          <li>
            <strong>Using the wrong swing for the stop.</strong> The level that
            invalidates a bearish shift is the lower high, not the old high
            further up the chart.
          </li>
        </ul>
      </ContentSection>

      <TermFaq faq={FAQ} />

      <ContentSection id="app" title="Market structure shifts in the app">
        <p>
          When {SITE.name} reads a chart, it describes the structure in plain
          English and links each term, MSS included, to its definition. If the
          chart shows a break with no confirmation yet, standing aside is one
          of its possible calls. The read is analysis, not a signal to trade;
          the decision stays with you.
        </p>
      </ContentSection>

      <RelatedTerms current={SLUG} />
    </ContentPage>
  );
}

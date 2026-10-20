import type { Metadata } from "next";
import { ContentPage, ContentSection } from "@/components/ContentPage";
import { RelatedTerms, TermFaq, TermFigure } from "@/components/glossary/TermParts";
import { definedTermSchema, faqSchema, GLOSSARY_PATH, glossaryHref } from "@/lib/glossary";
import { SITE } from "@/lib/site";

const SLUG = "market-structure";
const PATH = glossaryHref(SLUG);

export const metadata: Metadata = {
  title: "What Is Market Structure in Trading?",
  description:
    "Market structure is the pattern of swing highs and lows on a chart. Learn to read bullish, bearish and ranging structure, with a diagram and common mistakes.",
  alternates: { canonical: PATH },
};

const DEFINITION =
  "Market structure is the pattern of swing highs and swing lows a market prints. Higher highs and higher lows make bullish structure, lower highs and lower lows make bearish structure, and anything else is a range.";

const FAQ = [
  {
    q: "Is market structure the same as the trend?",
    a: "Almost. The trend is the direction; market structure is the evidence for it. Saying \"the trend is up\" is an opinion, while \"the last two highs and the last two lows are each higher than the ones before\" is something anyone can check on the chart.",
  },
  {
    q: "Which timeframe should I read market structure on?",
    a: "Start with the higher timeframe you trade from, such as the 4-hour or daily chart, to decide direction, then drop to a lower timeframe to plan the entry. A lower timeframe can show the opposite structure during a pullback, and that is normal.",
  },
  {
    q: "Does market structure work for gold, crypto and stocks?",
    a: "The idea applies to any market that prints a price chart, because it only uses swing highs and lows. Fast markets such as gold and crypto print more small swings, so traders often use a stricter swing definition, or a higher timeframe, to filter the noise.",
  },
  {
    q: "What breaks market structure?",
    a: "A candle closing beyond a swing point. A close beyond the last swing high in an uptrend is a break of structure (continuation); a close below the last higher low is a change of character (the first warning of a reversal).",
  },
];

export default function MarketStructurePage() {
  return (
    <ContentPage
      eyebrow="Glossary · Structure"
      title="Market structure"
      breadcrumbs={[
        { name: "Glossary", href: GLOSSARY_PATH },
        { name: "Market structure", href: PATH },
      ]}
      schema={[
        definedTermSchema(SLUG, "Market structure", DEFINITION),
        faqSchema(FAQ),
      ]}
      answer={
        <p>
          {DEFINITION} Traders read it first because it sets which direction
          they should be trading in.
        </p>
      }
    >
      <TermFigure
        src="/glossary/market-structure.svg"
        alt="Diagram of bullish market structure: a zigzag price line where each swing high is labelled HH, higher than the last, and each swing low is labelled HL, holding above the previous low."
        caption="Bullish structure: every new high clears the last one and every pullback stops above the previous low. Bearish structure is the mirror image."
      />

      <ContentSection id="read" title="How to read market structure">
        <ol>
          <li>
            <strong>Mark the swing points.</strong> A swing high is a candle
            whose high is above the candles on either side of it; a swing low
            is a candle whose low is below both neighbours. That is the
            simplest definition, and the one the {SITE.name} glossary uses.
            Many traders and indicators ask for two or more candles on each
            side, which marks fewer, more important swings.
          </li>
          <li>
            <strong>Compare each swing with the one before.</strong> Label
            each high as a higher high (HH) or a lower high (LH), and each low
            as a higher low (HL) or a lower low (LL).
          </li>
          <li>
            <strong>Name the structure.</strong> HH and HL together are
            bullish. LH and LL together are bearish. Mixed labels, such as
            lower highs with higher lows, or highs and lows stalling at the
            same prices, are a range.
          </li>
        </ol>
      </ContentSection>

      <ContentSection id="states" title="The three states">
        <h3>Bullish structure</h3>
        <p>
          Higher highs and higher lows. Buyers push past the last peak, and
          sellers can&apos;t drive price back to the previous low. The latest
          higher low is the level that has to hold for the uptrend to stay
          intact.
        </p>
        <h3>Bearish structure</h3>
        <p>
          Lower highs and lower lows. Each rally fails below the last one,
          and each drop goes further. The latest lower high is the level that
          has to hold for the downtrend to stay intact.
        </p>
        <h3>Range</h3>
        <p>
          Price moves between a ceiling and a floor without making progress.
          Trend strategies do badly here, and a range often comes before a
          bigger move, so it can be a reason to wait rather than to trade.
        </p>
      </ContentSection>

      <ContentSection id="breaks" title="How structure changes">
        <p>
          Structure changes when a candle closes beyond a swing point. Two
          breaks matter, and they mean opposite things:
        </p>
        <ul>
          <li>
            A <a href={glossaryHref("break-of-structure")}>break of structure
            (BOS)</a> closes beyond the last swing in the direction of the
            trend. It says the trend is continuing.
          </li>
          <li>
            A <a href={glossaryHref("change-of-character")}>change of
            character (CHoCH)</a> closes beyond the last swing against the
            trend, such as an uptrend closing below its last higher low. It is
            the first warning that the trend may be ending.
          </li>
        </ul>
      </ContentSection>

      <ContentSection id="timeframes" title="Structure depends on the timeframe">
        <p>
          The same market can be bullish on the daily chart and bearish on
          the 15-minute chart at the same moment, because a pullback inside a
          daily uptrend is a small downtrend of its own. Neither reading is
          wrong; they answer different questions.
        </p>
        <p>
          A common way to handle it is to let the higher timeframe set the
          direction and use the lower one only to time the entry. The{" "}
          {SITE.name} app shows a 1-hour, 4-hour and daily brief in one view
          for this reason.
        </p>
      </ContentSection>

      <ContentSection id="why" title="Why it matters">
        <p>
          Market structure sets the direction you are allowed to trade in.
          Buying into bearish structure means fighting the trend, and it is
          the most common reason a well-placed entry still fails. It also
          gives the stop loss a logical home: beyond the swing point that
          would prove the structure wrong, rather than a random number of
          pips. Once the stop is set, the{" "}
          <a href="/tools/lot-size-calculator">lot size calculator</a> turns
          that distance into a position size.
        </p>
      </ContentSection>

      <ContentSection id="mistakes" title="Common mistakes">
        <ul>
          <li>
            <strong>Marking every wiggle as a swing.</strong> On a fast chart
            this turns every few candles into a &quot;trend change&quot;. Use
            a stricter swing definition or a higher timeframe.
          </li>
          <li>
            <strong>Mixing timeframes.</strong> A 5-minute downtrend is not a
            reason to sell against a 4-hour uptrend. Decide which timeframe
            sets your direction before you look.
          </li>
          <li>
            <strong>Switching between wicks and closes.</strong> Decide
            whether a break needs a candle close or only a wick, and use the
            same rule every time. {SITE.name} uses the close.
          </li>
          <li>
            <strong>Calling a reversal on one break.</strong> A single close
            against the trend is a warning, not a new trend. A new trend
            needs new highs and lows in the other direction.
          </li>
        </ul>
      </ContentSection>

      <TermFaq faq={FAQ} />

      <ContentSection id="app" title="Market structure in the app">
        <p>
          When you scan a chart, {SITE.name} describes its structure in plain
          English before anything else: the trend, the swing points that
          define it, and any break of structure or change of character. Every
          term in the analysis links to its definition. The read is analysis,
          not a signal to trade; the decision stays with you.
        </p>
      </ContentSection>

      <RelatedTerms current={SLUG} />
    </ContentPage>
  );
}

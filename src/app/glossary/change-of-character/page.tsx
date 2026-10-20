import type { Metadata } from "next";
import { ContentPage, ContentSection } from "@/components/ContentPage";
import { RelatedTerms, TermFaq, TermFigure } from "@/components/glossary/TermParts";
import { definedTermSchema, faqSchema, GLOSSARY_PATH, glossaryHref } from "@/lib/glossary";
import { SITE } from "@/lib/site";

const SLUG = "change-of-character";
const PATH = glossaryHref(SLUG);

export const metadata: Metadata = {
  title: "Change of Character (CHoCH) vs BOS, Explained",
  description:
    "A change of character (CHoCH) is the first break against a trend. See which level it breaks, how it differs from a BOS and an MSS, and why it is only a warning.",
  alternates: { canonical: PATH },
};

const DEFINITION =
  "A change of character (CHoCH) is the first break against the prevailing trend: an uptrend closing below its last higher low, or a downtrend closing above its last lower high.";

const FAQ = [
  {
    q: "Is a change of character a reversal signal?",
    a: "It is a warning, not a confirmed reversal. Plenty of uptrends close below a higher low, pause, and then carry on higher. A reversal is confirmed only when price starts printing highs and lows in the new direction. Success rates quoted for CHoCH online are usually unsourced; your own journal is the only honest number.",
  },
  {
    q: "Is CHoCH the same as a market structure shift (MSS)?",
    a: "It depends who you ask. Some traders use the two names for the same thing. Others call it an MSS only when the break comes with a strong, fast candle after a liquidity sweep. In the StraviFX glossary, a CHoCH is the first break and an MSS is the confirmed flip that follows, once the new direction has its own highs and lows.",
  },
  {
    q: "Does a CHoCH on the 5-minute chart matter?",
    a: "Only for the 5-minute trend. Inside a 4-hour uptrend, a 5-minute CHoCH usually marks the start or end of a pullback, which can help time an entry, but it says little about the 4-hour direction.",
  },
  {
    q: "What happens after a change of character?",
    a: "One of two things. Either the old trend resumes, with a new break of structure in its direction, or price builds a lower high (after a bullish trend) and then closes below the next low, which turns the structure bearish. Waiting to see which one happens is a valid choice.",
  },
];

export default function ChangeOfCharacterPage() {
  return (
    <ContentPage
      eyebrow="Glossary · Structure"
      title="Change of Character (CHoCH)"
      breadcrumbs={[
        { name: "Glossary", href: GLOSSARY_PATH },
        { name: "Change of Character (CHoCH)", href: PATH },
      ]}
      schema={[
        definedTermSchema(SLUG, "Change of Character (CHoCH)", DEFINITION),
        faqSchema(FAQ),
      ]}
      answer={
        <p>
          {DEFINITION} It is the earliest structural warning that the trend
          may be ending, and because it comes early, it is less reliable than
          a later break in the new direction.
        </p>
      }
    >
      <TermFigure
        src="/glossary/change-of-character.svg"
        alt="Diagram of a bearish change of character: an uptrend of higher highs and higher lows, a dashed line at the last higher low, and a candle whose body closes below that line after the final high."
        caption="A bearish CHoCH: after the last higher high, a candle body closes below the last higher low. The uptrend's pattern is broken for the first time."
      />

      <ContentSection id="which-level" title="Which level does a CHoCH break?">
        <p>
          In an uptrend, the level is the last higher low: the low price
          pulled back to before it made the latest high. In a downtrend, it
          is the last lower high. That is the definition the {SITE.name}{" "}
          glossary uses. You will also see two refinements:
        </p>
        <ul>
          <li>
            <strong>The &quot;strong&quot; or &quot;protected&quot;
            low.</strong> Some traders only count the swing low that led to a
            break of the previous high. In a clean trend this is the same
            point as the last higher low; in a messy one it can sit further
            away.
          </li>
          <li>
            <strong>Internal vs swing structure.</strong> Small swings inside
            a pullback (internal structure) break all the time. A CHoCH of the
            main swings is rarer and carries more weight than a CHoCH of the
            internal ones.
          </li>
        </ul>
        <p>
          On the close-or-wick question, {SITE.name} applies the same rule as
          for a <a href={glossaryHref("break-of-structure")}>break of
          structure</a>: a candle has to close beyond the level. A wick
          through the higher low that closes back above it may be a sweep of
          the stops below, not a change of character.
        </p>
      </ContentSection>

      <ContentSection id="example" title="A worked example">
        <p>
          Gold (XAU/USD) on the 1-hour chart has been making higher highs and
          higher lows. The latest high is 4,032 and the pullback before it
          held at 3,995, the last higher low. These prices are an
          illustration, not a trade idea.
        </p>
        <ul>
          <li>
            <strong>CHoCH:</strong> a candle closes at 3,988, below 3,995. For
            the first time, the uptrend has failed to hold a higher low.
          </li>
          <li>
            <strong>Not yet a new downtrend:</strong> price now needs a lower
            high, a rally that fails below 4,032, and then a close below the
            next low before the structure is bearish. The StraviFX glossary
            calls that confirmed flip a market structure shift (MSS).
          </li>
          <li>
            <strong>Or the trend resumes:</strong> if price recovers and
            closes above 4,032, that is a new break of structure upward, and
            the CHoCH was a deep pullback.
          </li>
        </ul>
      </ContentSection>

      <ContentSection id="vs" title="CHoCH vs BOS vs MSS">
        <ul>
          <li>
            <strong>BOS:</strong> a close beyond the last swing{" "}
            <em>with</em> the trend. The trend continues.
          </li>
          <li>
            <strong>CHoCH:</strong> the first close beyond a swing{" "}
            <em>against</em> the trend. The trend may be ending.
          </li>
          <li>
            <strong>MSS:</strong> the meaning varies by author. In the{" "}
            {SITE.name} glossary it is the confirmed flip: structure breaks
            against the old trend and then prints highs and lows in the new
            direction. Other traders use MSS as another name for a CHoCH, or
            for a CHoCH that follows a liquidity sweep with a strong candle.
          </li>
        </ul>
      </ContentSection>

      <ContentSection id="why" title="Why it matters">
        <p>
          A CHoCH is the point where a trend-following plan loses its reason
          to exist. If you are holding a buy in an uptrend, a close below the
          last higher low is the structure telling you it no longer supports
          the trade, which is why many traders put the stop loss just beyond
          that level. If you are looking for a reversal, it is the first
          piece of evidence, but only the first.
        </p>
      </ContentSection>

      <ContentSection id="mistakes" title="Common mistakes">
        <ul>
          <li>
            <strong>Trading the CHoCH as if the reversal were
            confirmed.</strong> Selling the first close below a higher low
            means betting against a trend that was intact one candle ago.
          </li>
          <li>
            <strong>Reading a lower timeframe CHoCH as a higher timeframe
            reversal.</strong> A 15-minute CHoCH inside a daily uptrend is
            usually a pullback.
          </li>
          <li>
            <strong>Counting wicks.</strong> A spike below the higher low that
            closes back above it is often a stop sweep, the opposite of a
            change in character.
          </li>
          <li>
            <strong>Marking the wrong low.</strong> Measure from the higher
            low that came right before the latest high, not from an older one
            further down the chart.
          </li>
        </ul>
      </ContentSection>

      <TermFaq faq={FAQ} />

      <ContentSection id="app" title="Change of character in the app">
        <p>
          When {SITE.name} reads a chart, it names a change of character when
          it sees one, in plain English, and links the term to its
          definition. Standing aside is one of its possible calls, for charts
          with no clear direction. The read is analysis, not a signal to
          trade; the decision stays with you.
        </p>
      </ContentSection>

      <RelatedTerms current={SLUG} />
    </ContentPage>
  );
}

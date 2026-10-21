import type { Metadata } from "next";
import { ContentPage, ContentSection } from "@/components/ContentPage";
import { RelatedTerms, TermFaq, TermFigure } from "@/components/glossary/TermParts";
import { definedTermSchema, faqSchema, GLOSSARY_PATH, glossaryHref } from "@/lib/glossary";
import { SITE } from "@/lib/site";

const SLUG = "swing-high-swing-low";
const PATH = glossaryHref(SLUG);

export const metadata: Metadata = {
  title: "Swing High and Swing Low: How Many Candles?",
  description:
    "A swing high is a candle whose high tops its neighbours; a swing low is the reverse. See the 1, 2 and 3-candle rules, why swings confirm late, and an example.",
  alternates: { canonical: PATH },
};

const DEFINITION =
  "A swing high is a candle whose high is above the highs of the candles on either side of it. A swing low is a candle whose low is below the lows on either side.";

const FAQ = [
  {
    q: "Is a swing high measured from the wick or the body?",
    a: "From the wick: a swing high uses the candle's high and a swing low uses its low, because those are the prices the market actually reached. Breaks are different. In the StraviFX glossary, a swing is only broken when a later candle closes beyond it.",
  },
  {
    q: "How many candles make a swing, 3 or 5?",
    a: "Both are common, and neither is wrong. A 3-candle swing has one candle on each side; a 5-candle swing has two on each side and marks fewer, more important points. Pick one rule and use it every time, because changing it changes every structure reading you make.",
  },
  {
    q: "Why did my indicator move a swing point after the fact?",
    a: "Because a swing can only be confirmed once the candles on its right have closed. Until then the newest high is only a candidate, and the next candle can go higher and replace it. Indicators that draw swings early and then redraw them are showing that delay.",
  },
  {
    q: "What if two candles have the same high?",
    a: "Conventions differ. Some tools pick one of them; StraviFX's swing engine requires the high to be strictly above its neighbours, so two equal tops side by side don't make a swing high. Equal highs matter in their own right, because traders often see stop orders resting above them.",
  },
];

export default function SwingHighSwingLowPage() {
  return (
    <ContentPage
      eyebrow="Glossary · Structure"
      title="Swing high and swing low"
      breadcrumbs={[
        { name: "Glossary", href: GLOSSARY_PATH },
        { name: "Swing high / swing low", href: PATH },
      ]}
      schema={[
        definedTermSchema(SLUG, "Swing high / swing low", DEFINITION),
        faqSchema(FAQ),
      ]}
      answer={
        <p>
          {DEFINITION} Trends, breaks and stop placements are all measured
          from these pivots, so your swing rule shapes every reading.
        </p>
      }
    >
      <TermFigure
        src="/glossary/swing-high-swing-low.svg"
        alt="Diagram of two five-candle groups. On the left the middle candle has the highest high and is labelled swing high; on the right the middle candle has the lowest low and is labelled swing low. A note says each is confirmed only when the candles on its right have closed."
        caption="With two candles on each side, the middle candle is a swing high when its high tops all four neighbours, and a swing low when its low is below all four."
      />

      <ContentSection id="how-many" title="How many candles make a swing?">
        <p>
          There is no single standard. The rule is how many candles on each
          side the middle candle has to beat:
        </p>
        <ul>
          <li>
            <strong>One on each side (3 candles).</strong> The simplest rule,
            and the one the {SITE.name} glossary uses. It marks many swings,
            including small ones inside a pullback.
          </li>
          <li>
            <strong>Two on each side (5 candles).</strong> A common default in
            charting indicators. It skips minor wiggles and marks the swings
            most traders would draw by eye.
          </li>
          <li>
            <strong>Three or more on each side.</strong> Stricter still, for
            noisy markets or for the main swings only. {SITE.name}&apos;s
            hourly Swing signals check uses three candles on each side on the
            4-hour chart.
          </li>
        </ul>
        <p>
          A wider rule gives fewer, more meaningful swings, but each one is
          confirmed later. Whatever you choose, use the same rule on every
          chart you compare, or your highs and lows won&apos;t line up with
          your own past analysis.
        </p>
      </ContentSection>

      <ContentSection id="confirmation" title="A swing is confirmed late">
        <p>
          A candle can&apos;t be a swing high until the candles to its right
          have closed below it. With one candle on each side, you know one
          candle later; with three on each side, three candles later. On a
          4-hour chart, that is 12 hours after the high itself was printed.
        </p>
        <p>
          This delay is built into the idea, not a flaw in your chart. It is
          also why some indicators appear to &quot;repaint&quot;: they mark
          the newest high straight away and move the marker if a later candle
          goes higher.
        </p>
      </ContentSection>

      <ContentSection id="example" title="A worked example">
        <p>
          Five 1-hour EUR/USD candles have these highs, in order. The prices
          are an illustration, not real data.
        </p>
        <ol>
          <li>1.0851</li>
          <li>1.0858</li>
          <li>1.0866</li>
          <li>1.0862</li>
          <li>1.0855</li>
        </ol>
        <ul>
          <li>
            <strong>One-candle rule:</strong> candle 3 (1.0866) is above
            candle 2 (1.0858) and candle 4 (1.0862), so it is a swing high. It
            is confirmed when candle 4 closes.
          </li>
          <li>
            <strong>Two-candle rule:</strong> 1.0866 is also above candles 1
            and 5, so it is a swing high under this rule too, confirmed when
            candle 5 closes.
          </li>
          <li>
            <strong>If candle 4 had reached 1.0866:</strong> the two candles
            would tie. Under a strict rule, neither is a swing high, because
            neither is above both of its neighbours.
          </li>
        </ul>
      </ContentSection>

      <ContentSection id="why" title="Why it matters">
        <p>
          Every other structure term is built from swings.{" "}
          <a href={glossaryHref("higher-highs-higher-lows")}>Higher highs and
          higher lows</a> compare one swing with the last. A{" "}
          <a href={glossaryHref("break-of-structure")}>break of structure</a>{" "}
          is a close beyond one. A sensible stop loss usually sits just
          beyond one. If two traders define swings differently, they can look
          at the same chart and disagree about the trend, and both be applying
          their rule correctly.
        </p>
      </ContentSection>

      <ContentSection id="mistakes" title="Common mistakes">
        <ul>
          <li>
            <strong>Marking a swing before it is confirmed.</strong> The
            newest high on the chart is a candidate until the candles on its
            right have closed.
          </li>
          <li>
            <strong>Changing the rule between charts.</strong> A 1-candle
            swing on one chart and a 5-candle swing on another give readings
            you can&apos;t compare.
          </li>
          <li>
            <strong>Using bodies for some swings and wicks for others.</strong>{" "}
            Measure swing highs and lows from the wicks, consistently.
          </li>
          <li>
            <strong>Treating every small swing as important.</strong> On a fast
            chart, a 1-candle rule marks swings inside swings. Decide whether
            you are reading the main swings or the small ones inside a
            pullback.
          </li>
        </ul>
      </ContentSection>

      <TermFaq faq={FAQ} />

      <ContentSection id="app" title="Swings in the app">
        <p>
          When {SITE.name} reads a chart, it describes the swings and the
          structure they form in plain English. On Premium, the extended
          analysis anchors its levels to that structure.
          The read is analysis, not a signal to trade; the decision stays with
          you.
        </p>
      </ContentSection>

      <RelatedTerms current={SLUG} />
    </ContentPage>
  );
}

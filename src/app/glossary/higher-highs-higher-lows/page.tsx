import type { Metadata } from "next";
import { ContentPage, ContentSection } from "@/components/ContentPage";
import { RelatedTerms, TermFaq, TermFigure } from "@/components/glossary/TermParts";
import { definedTermSchema, faqSchema, GLOSSARY_PATH, glossaryHref } from "@/lib/glossary";
import { SITE } from "@/lib/site";

const SLUG = "higher-highs-higher-lows";
const PATH = glossaryHref(SLUG);

export const metadata: Metadata = {
  title: "Higher Highs and Higher Lows: Reading a Trend",
  description:
    "Higher highs and higher lows define an uptrend; lower highs and lower lows a downtrend. Learn to label HH, HL, LH and LL swings and spot when a trend is ending.",
  alternates: { canonical: PATH },
};

const DEFINITION =
  "Higher highs and higher lows define an uptrend: each peak rises above the last, and each pullback holds above the previous low. Lower highs and lower lows, the mirror image, define a downtrend.";

const FAQ = [
  {
    q: "How many higher highs make an uptrend?",
    a: "There is no fixed number. You need at least two highs and two lows to compare, so one higher high and one higher low is the minimum to call the structure bullish. Each extra pair adds evidence, and a long run of them also means the trend is older.",
  },
  {
    q: "Is a lower high the start of a downtrend?",
    a: "Not on its own. A lower high in an uptrend is a warning that buyers couldn't make a new extreme, but the trend is only broken when price closes below the last higher low. Until then, the lower high can still turn out to be a pause.",
  },
  {
    q: "What does HH, HL, LH and LL mean on a chart?",
    a: "They are labels for swing points: HH is a higher high, HL a higher low, LH a lower high and LL a lower low. Each swing high is labelled against the previous swing high, and each swing low against the previous swing low.",
  },
  {
    q: "What if a new high equals the last one?",
    a: "Then it is neither higher nor lower, and the uptrend has stalled. Equal highs often turn a trend into a range, and many traders watch them closely because stop orders tend to cluster just above them.",
  },
];

export default function HigherHighsHigherLowsPage() {
  return (
    <ContentPage
      eyebrow="Glossary · Structure"
      title="Higher highs and higher lows"
      breadcrumbs={[
        { name: "Glossary", href: GLOSSARY_PATH },
        { name: "Higher highs / higher lows", href: PATH },
      ]}
      schema={[
        definedTermSchema(SLUG, "Higher highs / higher lows", DEFINITION),
        faqSchema(FAQ),
      ]}
      answer={
        <p>
          {DEFINITION} Labelling each swing this way turns &quot;the trend
          looks up&quot; into a rule anyone can check on the chart.
        </p>
      }
    >
      <TermFigure
        src="/glossary/higher-highs-higher-lows.svg"
        alt="Diagram of swing points labelled L, H, HL, HH, HL, then LH and LL: an uptrend of higher highs and higher lows that ends when a high fails below the previous high and the next low falls below the previous low."
        caption="The labels from the worked example below. The uptrend holds through two higher lows and a higher high; the lower high is the first warning, and the lower low confirms the change."
      />

      <ContentSection id="labels" title="The four labels">
        <p>
          First mark the{" "}
          <a href={glossaryHref("swing-high-swing-low")}>swing highs and
          swing lows</a>. Then compare each swing with the previous swing of
          the same kind: highs with highs, lows with lows.
        </p>
        <ul>
          <li>
            <strong>HH, higher high:</strong> a swing high above the previous
            swing high.
          </li>
          <li>
            <strong>HL, higher low:</strong> a swing low above the previous
            swing low.
          </li>
          <li>
            <strong>LH, lower high:</strong> a swing high below the previous
            swing high.
          </li>
          <li>
            <strong>LL, lower low:</strong> a swing low below the previous
            swing low.
          </li>
        </ul>
      </ContentSection>

      <ContentSection id="combinations" title="What each combination means">
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[480px] border-collapse text-left text-[0.9375rem]">
            <thead>
              <tr className="border-b border-white/10 text-fg">
                <th scope="col" className="py-3 pr-4 font-semibold">Highs</th>
                <th scope="col" className="py-3 pr-4 font-semibold">Lows</th>
                <th scope="col" className="py-3 font-semibold">Structure</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/10">
                <td className="py-3 pr-4">Higher (HH)</td>
                <td className="py-3 pr-4">Higher (HL)</td>
                <td className="py-3">Uptrend</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-3 pr-4">Lower (LH)</td>
                <td className="py-3 pr-4">Lower (LL)</td>
                <td className="py-3">Downtrend</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-3 pr-4">Lower (LH)</td>
                <td className="py-3 pr-4">Higher (HL)</td>
                <td className="py-3">Range, narrowing</td>
              </tr>
              <tr>
                <td className="py-3 pr-4">Higher (HH)</td>
                <td className="py-3 pr-4">Lower (LL)</td>
                <td className="py-3">Range, widening</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Only the first two rows are trends. When the highs and lows
          disagree, neither buyers nor sellers are in control, and the{" "}
          {SITE.name} glossary reads it as a range. For how these states fit
          together on a chart, see{" "}
          <a href={glossaryHref("market-structure")}>market structure</a>.
        </p>
      </ContentSection>

      <ContentSection id="example" title="A worked example">
        <p>
          EUR/USD on the 4-hour chart prints these swings, in order. The
          prices are an illustration, not real data.
        </p>
        <ol>
          <li>Low 1.0800: the starting point.</li>
          <li>High 1.0880: the first high, nothing to compare it with yet.</li>
          <li>Low 1.0835: above 1.0800, so a <strong>higher low</strong>.</li>
          <li>High 1.0910: above 1.0880, so a <strong>higher high</strong>. The structure is now bullish.</li>
          <li>Low 1.0870: above 1.0835, another <strong>higher low</strong>.</li>
          <li>High 1.0905: below 1.0910, a <strong>lower high</strong>. The first warning.</li>
          <li>Low 1.0850: below 1.0870, a <strong>lower low</strong>.</li>
        </ol>
        <p>
          The candle that closed below 1.0870 on the way to 1.0850 was a{" "}
          <a href={glossaryHref("change-of-character")}>change of
          character</a>, the first break of the uptrend. The latest labels now
          read lower high and lower low, but by the {SITE.name} convention the
          new downtrend is confirmed only if the next rally also fails and a
          candle closes below 1.0850: a{" "}
          <a href={glossaryHref("market-structure-shift")}>market structure
          shift</a>.
        </p>
      </ContentSection>

      <ContentSection id="why" title="Why it matters">
        <p>
          The labels tell you which side of the market has been winning, and
          which level matters next. In an uptrend, the latest higher low is
          the line the trend has to defend, which makes it a logical place
          for a buyer&apos;s stop loss. The latest swing high is the line that
          has to break for the trend to continue, which is what a{" "}
          <a href={glossaryHref("break-of-structure")}>break of
          structure</a> is.
        </p>
      </ContentSection>

      <ContentSection id="mistakes" title="Common mistakes">
        <ul>
          <li>
            <strong>Comparing a high with a low.</strong> A higher high is
            higher than the previous <em>high</em>, not higher than the last
            candle.
          </li>
          <li>
            <strong>Skipping a swing.</strong> Compare each swing with the one
            right before it. Measuring from an older swing makes a trend look
            healthier than it is.
          </li>
          <li>
            <strong>Calling a downtrend on one lower high.</strong> It takes
            a close below the last higher low to break the uptrend.
          </li>
          <li>
            <strong>Reading one timeframe&apos;s labels into another.</strong>{" "}
            Lower highs on the 15-minute chart can be a normal pullback inside
            higher highs on the daily chart.
          </li>
        </ul>
      </ContentSection>

      <TermFaq faq={FAQ} />

      <ContentSection id="app" title="Trend labels in the app">
        <p>
          When {SITE.name} reads a chart, it states the trend in plain
          English and explains the swing structure behind it, with a 1-hour,
          4-hour and daily brief in one view so you can see where timeframes
          disagree. The read is analysis, not a signal to trade; the decision
          stays with you.
        </p>
      </ContentSection>

      <RelatedTerms current={SLUG} />
    </ContentPage>
  );
}

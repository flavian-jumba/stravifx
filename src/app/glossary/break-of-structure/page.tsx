import type { Metadata } from "next";
import { ContentPage, ContentSection } from "@/components/ContentPage";
import { RelatedTerms, TermFaq, TermFigure } from "@/components/glossary/TermParts";
import { definedTermSchema, faqSchema, GLOSSARY_PATH, glossaryHref } from "@/lib/glossary";
import { SITE } from "@/lib/site";

const SLUG = "break-of-structure";
const PATH = glossaryHref(SLUG);

export const metadata: Metadata = {
  title: "Break of Structure (BOS) in Trading, Explained",
  description:
    "A break of structure (BOS) is a candle close beyond the last swing high or low in the trend's direction. See the diagram, close vs wick rules and BOS vs CHoCH.",
  alternates: { canonical: PATH },
};

const DEFINITION =
  "A break of structure (BOS) is when a candle closes beyond the most recent swing high in an uptrend, or below the most recent swing low in a downtrend. It confirms the existing trend is continuing.";

const FAQ = [
  {
    q: "Is a break of structure bullish or bearish?",
    a: "It takes the direction of the trend it belongs to. In an uptrend, a close above the last swing high is a bullish BOS; in a downtrend, a close below the last swing low is a bearish BOS. A break against the trend has a different name: a change of character.",
  },
  {
    q: "Does a wick through the swing high count as a BOS?",
    a: "Traders disagree. Some count any trade beyond the level; others, including StraviFX, need a candle to close beyond it. A wick that pokes through and closes back inside is treated as a possible liquidity sweep: stops above the high were triggered, but buyers couldn't hold price there.",
  },
  {
    q: "What is the difference between a BOS and a breakout?",
    a: "A breakout usually means price leaving a range or crossing any level a trader has drawn. A BOS is narrower: it is a close beyond the latest swing point of an existing trend, so it only exists once a trend of higher highs and higher lows (or lower highs and lower lows) is already in place.",
  },
  {
    q: "Should I enter as soon as I see a BOS?",
    a: "A BOS says the trend is intact; it isn't an entry on its own. Entering on the breakout candle often puts the stop far away. Many traders wait for a pullback and plan the stop beyond the new higher low, then size the trade with a lot size calculator. None of this guarantees the trade works.",
  },
];

export default function BreakOfStructurePage() {
  return (
    <ContentPage
      eyebrow="Glossary · Structure"
      title="Break of Structure (BOS)"
      breadcrumbs={[
        { name: "Glossary", href: GLOSSARY_PATH },
        { name: "Break of Structure (BOS)", href: PATH },
      ]}
      schema={[
        definedTermSchema(SLUG, "Break of Structure (BOS)", DEFINITION),
        faqSchema(FAQ),
      ]}
      answer={
        <p>
          {DEFINITION} A BOS is a continuation signal, not a reversal, and
          traders use it as evidence the trend is still intact.
        </p>
      }
    >
      <TermFigure
        src="/glossary/break-of-structure.svg"
        alt="Diagram of a bullish break of structure: an uptrend of higher highs and higher lows, a dashed line at the last swing high, and a candle whose body closes above that line."
        caption="A bullish BOS: after a higher low, a candle body closes above the last swing high. The higher low before it becomes the level the trend now has to hold."
      />

      <ContentSection id="close-or-wick" title="Close or wick? The conventions differ">
        <p>
          There is no official definition of a break of structure, and the
          pages that rank for it disagree. You will meet three versions:
        </p>
        <ul>
          <li>
            <strong>Candle close.</strong> A candle on the timeframe you are
            reading has to close beyond the swing point.
          </li>
          <li>
            <strong>Any wick.</strong> Price trading beyond the swing point
            for a moment is enough.
          </li>
          <li>
            <strong>Close with a strong candle.</strong> Some traders also
            want a large, fast candle (often called displacement) so the break
            isn&apos;t a slow drift through the level.
          </li>
        </ul>
        <p>
          <strong>{SITE.name} uses the close.</strong> A wick beyond the
          level that closes back inside is read as a possible liquidity sweep
          instead: the stops resting above the high were triggered, but price
          didn&apos;t stay there. Whichever rule you pick, use the same one
          every time, or your structure labels will change with your mood.
        </p>
      </ContentSection>

      <ContentSection id="example" title="A worked example">
        <p>
          EUR/USD on the 1-hour chart is in an uptrend. The last swing high
          is 1.0850 and the pullback after it bottomed at 1.0815, a higher
          low. These prices are an illustration, not a trade idea.
        </p>
        <ul>
          <li>
            <strong>BOS:</strong> a candle closes at 1.0862, above 1.0850. The
            uptrend has made a new high, and 1.0815 is now the higher low that
            has to hold.
          </li>
          <li>
            <strong>Not a BOS:</strong> a candle spikes to 1.0858 but closes
            at 1.0846, back below 1.0850. Under the close rule nothing has
            broken; the spike may have been a sweep of the stops above the
            high.
          </li>
        </ul>
        <p>
          If price later closed below 1.0815 instead, that would not be a
          BOS. It would be a{" "}
          <a href={glossaryHref("change-of-character")}>change of character</a>
          , the first break against the uptrend.
        </p>
      </ContentSection>

      <ContentSection id="bos-vs-choch" title="BOS vs CHoCH">
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[480px] border-collapse text-left text-[0.9375rem]">
            <thead>
              <tr className="border-b border-white/10 text-fg">
                <th scope="col" className="py-3 pr-4 font-semibold"></th>
                <th scope="col" className="py-3 pr-4 font-semibold">BOS</th>
                <th scope="col" className="py-3 font-semibold">CHoCH</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/10">
                <th scope="row" className="py-3 pr-4 font-normal text-fg">Direction</th>
                <td className="py-3 pr-4">With the trend</td>
                <td className="py-3">Against the trend</td>
              </tr>
              <tr className="border-b border-white/10">
                <th scope="row" className="py-3 pr-4 font-normal text-fg">Level broken (uptrend)</th>
                <td className="py-3 pr-4">Last swing high</td>
                <td className="py-3">Last higher low</td>
              </tr>
              <tr className="border-b border-white/10">
                <th scope="row" className="py-3 pr-4 font-normal text-fg">Level broken (downtrend)</th>
                <td className="py-3 pr-4">Last swing low</td>
                <td className="py-3">Last lower high</td>
              </tr>
              <tr>
                <th scope="row" className="py-3 pr-4 font-normal text-fg">What it says</th>
                <td className="py-3 pr-4">The trend is continuing</td>
                <td className="py-3">The trend may be ending</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ContentSection>

      <ContentSection id="why" title="Why it matters">
        <p>
          A BOS tells you the current direction still has buyers (or sellers)
          behind it, so plans that trade with the trend stay on. It also moves
          the line in the sand: after a bullish BOS, the higher low that came
          before it is the level that would prove the uptrend wrong, which
          makes it a logical place to think about a stop loss.
        </p>
      </ContentSection>

      <ContentSection id="mistakes" title="Common mistakes">
        <ul>
          <li>
            <strong>Counting wicks on some days and closes on others.</strong>{" "}
            Pick one rule and keep it.
          </li>
          <li>
            <strong>Reading a lower timeframe BOS as a higher timeframe
            one.</strong> A 5-minute BOS inside a 4-hour downtrend is a
            pullback getting stronger, not a new uptrend.
          </li>
          <li>
            <strong>Chasing the breakout candle.</strong> Buying the close of
            a big candle puts the stop a long way off, so the same risk buys a
            much smaller position. Check the distance with the{" "}
            <a href="/tools/risk-reward-calculator">risk reward calculator</a>{" "}
            first.
          </li>
          <li>
            <strong>Treating a BOS as a forecast.</strong> It describes what
            price has done. Trends that just broke structure can still reverse
            on the next candle.
          </li>
        </ul>
      </ContentSection>

      <TermFaq faq={FAQ} />

      <ContentSection id="app" title="Break of structure in the app">
        <p>
          When {SITE.name} reads a chart, it names the trend and the swing
          points behind it, and the BOS or CHoCH where it sees one, in plain
          English. Tap the term to see its definition. The plan that follows
          (entry, stop, two targets and the lot size) is analysis, not a
          signal to trade; the decision stays with you.
        </p>
      </ContentSection>

      <RelatedTerms current={SLUG} />
    </ContentPage>
  );
}

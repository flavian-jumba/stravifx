import type { Metadata } from "next";
import { ContentPage, ContentSection } from "@/components/ContentPage";
import { RelatedTerms, TermFaq, TermFigure } from "@/components/glossary/TermParts";
import { definedTermSchema, faqSchema, GLOSSARY_PATH, glossaryHref } from "@/lib/glossary";
import { SITE } from "@/lib/site";

const SLUG = "divergence";
const PATH = glossaryHref(SLUG);

export const metadata: Metadata = {
  title: "Divergence in Trading: Regular vs Hidden",
  description:
    "Divergence is price making a new high or low that RSI doesn't confirm. Regular vs hidden, a worked gold example, and what to wait for before you trade it.",
  alternates: { canonical: PATH },
};

const DEFINITION =
  "Divergence is when price makes a new extreme but a momentum indicator such as RSI doesn't: a lower low on the chart against a higher low on RSI, or a higher high against a lower high. It suggests the move is losing force. It is a warning, not a timed reversal, and it can repeat several times before price turns.";

const FAQ = [
  {
    q: "Is divergence a buy or sell signal?",
    a: "Not on its own. It says the latest push had less momentum than the one before, which often happens late in a move but can also happen in the middle of one. Use it as a reason to watch for a break in structure, and enter on that break, with the stop where the idea is proven wrong.",
  },
  {
    q: "What is the difference between regular and hidden divergence?",
    a: "Regular divergence compares the extremes of a trend (lower low in price, higher low on RSI) and hints at a reversal. Hidden divergence compares the pullbacks inside a trend (higher low in price, lower low on RSI) and is read as a sign the trend may continue. The names vary between sources; some call regular divergence classic.",
  },
  {
    q: "Which indicator is best for divergence?",
    a: "RSI is the most common, and MACD and the stochastic are used the same way. They are all built from the same closes, so finding divergence on two of them at once is close to finding it twice on one. Pick one and stay consistent.",
  },
  {
    q: "Which timeframe should I look for divergence on?",
    a: "On whichever timeframe you are reading structure. A divergence on the 4-hour chart between two clear swing lows means more than one on the 5-minute chart, where small swings produce it constantly. Check the higher timeframe trend too: divergence against a strong daily trend fails often.",
  },
];

export default function DivergencePage() {
  return (
    <ContentPage
      eyebrow="Glossary · Indicators"
      title="Divergence"
      breadcrumbs={[
        { name: "Glossary", href: GLOSSARY_PATH },
        { name: "Divergence", href: PATH },
      ]}
      schema={[definedTermSchema(SLUG, "Divergence", DEFINITION), faqSchema(FAQ)]}
      answer={<p>{DEFINITION}</p>}
    >
      <TermFigure
        src="/glossary/divergence.svg"
        alt="Gold price in the top panel falls to swing low A at 4,010, bounces to a lower high at 4,032, then makes a lower low B at 3,996. In the RSI panel below, the matching lows are 24 at A and 31 at B, a higher low. Lines connect the two price lows (falling) and the two RSI lows (rising). Price then closes above 4,032, marked as the break that confirms it."
        caption="Regular bullish divergence: price makes a lower low, RSI a higher low. The trade idea starts only when price closes above the lower high between them."
      />

      <ContentSection id="types" title="Regular and hidden divergence">
        <div className="mt-2 overflow-x-auto">
          <table className="w-full min-w-[480px] border-collapse text-left text-[0.9375rem]">
            <thead>
              <tr className="border-b border-white/10 text-fg">
                <th scope="col" className="py-3 pr-4 font-semibold">Type</th>
                <th scope="col" className="py-3 pr-4 font-semibold">Price</th>
                <th scope="col" className="py-3 pr-4 font-semibold">RSI</th>
                <th scope="col" className="py-3 font-semibold">Usually read as</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/10">
                <td className="py-3 pr-4">Regular bullish</td>
                <td className="py-3 pr-4">Lower low</td>
                <td className="py-3 pr-4">Higher low</td>
                <td className="py-3">Downtrend losing force</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-3 pr-4">Regular bearish</td>
                <td className="py-3 pr-4">Higher high</td>
                <td className="py-3 pr-4">Lower high</td>
                <td className="py-3">Uptrend losing force</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-3 pr-4">Hidden bullish</td>
                <td className="py-3 pr-4">Higher low</td>
                <td className="py-3 pr-4">Lower low</td>
                <td className="py-3">Uptrend pullback, trend may resume</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-3 pr-4">Hidden bearish</td>
                <td className="py-3 pr-4">Lower high</td>
                <td className="py-3 pr-4">Higher high</td>
                <td className="py-3">Downtrend pullback, trend may resume</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Always compare <a href={glossaryHref("swing-high-swing-low")}>swing
          points</a> with swing points: the two price lows and the RSI values
          on those same candles. Comparing any two bars you like will find
          divergence everywhere.
        </p>
      </ContentSection>

      <ContentSection id="example" title="A worked example: gold on the 4-hour chart">
        <p>
          The prices and RSI values are an illustration, not real data.
        </p>
        <ul>
          <li>
            <strong>Swing low A:</strong> 4,010.00, RSI(14) 24.
          </li>
          <li>
            <strong>Bounce:</strong> to a lower high at 4,032.00. The
            downtrend is intact.
          </li>
          <li>
            <strong>Swing low B:</strong> 3,996.00, $14 below A. RSI is 31,
            higher than at A. That is regular bullish divergence: the second
            push down went further with less momentum.
          </li>
          <li>
            <strong>What to wait for:</strong> a candle close above the
            lower high at 4,032.00, the first break against the trend (a{" "}
            <a href={glossaryHref("change-of-character")}>change of character</a>).
            Until then, the downtrend is still the trend.
          </li>
          <li>
            <strong>If it breaks:</strong> a buy near 4,035.00, the stop
            below B with a $3 buffer at 3,993.00 ($42 of risk per ounce), and
            a first target at the next lower high above, say 4,098.00 ($63),
            which is 1:1.5.
          </li>
        </ul>
        <p>
          Check the size before you get excited. On a $2,000 account at 1%
          risk ($20), a $42 stop on gold needs 0.0048 lots (1 lot = 100 oz,
          so $4,200 a lot at the stop), below the 0.01-lot minimum. 0.01 lots
          would risk $42, 2.1% of the account. The honest choice is to skip
          it or take the bigger risk knowingly, not to shrink the stop to fit.
          The <a href={glossaryHref("position-size")}>position size</a> page
          walks through the rule.
        </p>
        <p>
          <strong>The version that fails:</strong> price never closes above
          4,032. It makes a third low at 3,980.00 with RSI at 33, divergence
          again, and keeps falling. A trader who bought at B on divergence
          alone is now $16 down with no structure to justify holding, which
          is why the break comes first.
        </p>
      </ContentSection>

      <ContentSection id="why" title="Why it matters">
        <p>
          Divergence shows something the price chart alone hides: that the
          latest push needed more effort for less result. It is most useful
          at a level you were already watching, such as a{" "}
          <a href={glossaryHref("supply-demand-zone")}>demand zone</a> or a
          sweep of <a href={glossaryHref("equal-highs-equal-lows")}>equal lows</a>,
          where it adds a second kind of evidence to the first.
        </p>
      </ContentSection>

      <ContentSection id="mistakes" title="Common mistakes">
        <ul>
          <li>
            <strong>Trading the divergence instead of the break.</strong>{" "}
            Momentum can fade for several swings while price keeps going.
          </li>
          <li>
            <strong>Comparing bars that aren&apos;t swing points.</strong>{" "}
            Pick the two clear lows (or highs) first, then read RSI on those
            candles.
          </li>
          <li>
            <strong>Fighting the higher timeframe.</strong> Bullish divergence
            on the 15-minute chart inside a daily downtrend is a pullback
            more often than a reversal. See{" "}
            <a href={glossaryHref("timeframe-alignment")}>timeframe alignment</a>.
          </li>
          <li>
            <strong>Repainting tools.</strong> Some divergence indicators
            draw their lines only after the second swing is confirmed, then
            look perfect in hindsight. Judge them on how they looked at the
            time, candle by candle.
          </li>
        </ul>
      </ContentSection>

      <TermFaq faq={FAQ} />

      <ContentSection id="app" title="Divergence in the app">
        <p>
          When an analysis in {SITE.name} mentions divergence, the word links
          to the app&apos;s glossary, which defines it the way this page does:
          weakening momentum, not a timed reversal. Every plan is still built
          on a <a href={glossaryHref("market-structure")}>structure</a> read,
          with an entry, a <a href={glossaryHref("stop-loss")}>stop loss</a>{" "}
          at the level that proves the idea wrong and two targets, and the
          answer can be to stand aside.
        </p>
      </ContentSection>

      <RelatedTerms current={SLUG} />
    </ContentPage>
  );
}

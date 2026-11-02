import type { Metadata } from "next";
import { ContentPage, ContentSection } from "@/components/ContentPage";
import { RelatedTerms, TermFaq, TermFigure } from "@/components/glossary/TermParts";
import { definedTermSchema, faqSchema, GLOSSARY_PATH, glossaryHref } from "@/lib/glossary";
import { SITE } from "@/lib/site";

const SLUG = "rsi";
const PATH = glossaryHref(SLUG);

export const metadata: Metadata = {
  title: "RSI (Relative Strength Index): Formula and Use",
  description:
    "RSI measures recent gains against recent losses on a 0 to 100 scale. The formula worked by hand, why platforms disagree, and why 70 doesn't mean sell.",
  alternates: { canonical: PATH },
};

const DEFINITION =
  "The Relative Strength Index (RSI) is a momentum oscillator from 0 to 100. It compares the average size of recent up closes with recent down closes, usually over 14 candles. Above 70 is conventionally called overbought and below 30 oversold, but in a strong trend RSI can stay there for a long time, so it describes momentum, not a reversal.";

const FAQ = [
  {
    q: "Does RSI above 70 mean I should sell?",
    a: "No. It means recent up closes have been much larger than down closes, which is exactly what a strong uptrend looks like. RSI can stay above 70 for many candles while price keeps rising. Treat it as a reading of momentum, and look for a break in structure before calling a top.",
  },
  {
    q: "Why is my RSI different from someone else's on the same chart?",
    a: "Platforms can average gains and losses differently (Wilder's smoothing, a simple average or an exponential one), use a different number of candles, start the calculation at a different point in the history, or read a different price feed. On the same data those choices can move the reading by several points.",
  },
  {
    q: "What is the best RSI setting?",
    a: "There is no best one. Wilder's 14 is the default almost everywhere, which is useful because it is what other traders see. A shorter period reacts faster and reaches 70 and 30 more often; a longer one is smoother and reaches them less. Change it only if you test the change in your own journal.",
  },
  {
    q: "Is RSI the same as relative strength between two stocks?",
    a: "No. RSI compares a market only with its own recent closes. Comparative relative strength, sometimes also called relative strength, divides one market's price by another's, such as a stock against its index. The names are similar, the ideas are not.",
  },
];

export default function RsiPage() {
  return (
    <ContentPage
      eyebrow="Glossary · Indicators"
      title="RSI (Relative Strength Index)"
      breadcrumbs={[
        { name: "Glossary", href: GLOSSARY_PATH },
        { name: "RSI", href: PATH },
      ]}
      schema={[
        definedTermSchema(SLUG, "Relative Strength Index (RSI)", DEFINITION),
        faqSchema(FAQ),
      ]}
      answer={<p>{DEFINITION}</p>}
    >
      <TermFigure
        src="/glossary/rsi.svg"
        alt="A rising price line in the top panel making a series of higher highs, and the RSI line in the bottom panel between dashed lines at 70 and 30. RSI crosses above 70 early in the move and stays above it for most of the rise while price keeps climbing. A label reads: overbought for 9 candles, price still rising."
        caption="In a strong trend RSI can sit above 70 for a long time. Overbought describes the move so far; it doesn't time the end of it."
      />

      <ContentSection id="formula" title="How RSI is calculated">
        <p>
          J. Welles Wilder Jr. published RSI in his 1978 book{" "}
          <cite>New Concepts in Technical Trading Systems</cite>. The idea is
          simple: of the recent movement, how much was up?
        </p>
        <ol>
          <li>
            For each of the last 14 candles, take the change from the
            previous close. An up close counts as a gain, a down close as a
            loss (written as a positive number).
          </li>
          <li>Average the gains and average the losses over the 14 candles.</li>
          <li>
            <strong>RS = average gain ÷ average loss</strong>
          </li>
          <li>
            <strong>RSI = 100 − 100 ÷ (1 + RS)</strong>
          </li>
        </ol>
        <p>
          If every close was up, RSI is 100; if every close was down, it is 0.
          Equal gains and losses give 50. After the first value, Wilder
          smooths the averages instead of recalculating them from scratch:
        </p>
        <p>
          <strong>
            new average = (previous average × 13 + this candle&apos;s gain or
            loss) ÷ 14
          </strong>
        </p>
      </ContentSection>

      <ContentSection id="example" title="A worked example, and why platforms disagree">
        <p>
          EUR/USD on the 1-hour chart. The closes are an illustration, not
          real data. Over 14 candles the changes in pips were:
        </p>
        <p className="font-mono text-[0.9375rem]">
          +10, −4, +8, +12, −6, +6, −10, +14, +4, −14, +10, +12, −8, +8
        </p>
        <ul>
          <li>
            <strong>Gains:</strong> 9 up candles totalling 84 pips. Average
            gain = 84 ÷ 14 = <strong>6.0</strong>.
          </li>
          <li>
            <strong>Losses:</strong> 5 down candles totalling 42 pips.
            Average loss = 42 ÷ 14 = <strong>3.0</strong>.
          </li>
          <li>
            RS = 6.0 ÷ 3.0 = 2, so RSI = 100 − 100 ÷ 3 ={" "}
            <strong>66.7</strong>.
          </li>
        </ul>
        <p>
          The next candle closes 12 pips lower. Here is the new RSI under the
          three averaging methods platforms use:
        </p>
        <div className="mt-2 overflow-x-auto">
          <table className="w-full min-w-[460px] border-collapse text-left text-[0.9375rem]">
            <thead>
              <tr className="border-b border-white/10 text-fg">
                <th scope="col" className="py-3 pr-4 font-semibold">Method</th>
                <th scope="col" className="py-3 pr-4 font-semibold">Avg gain</th>
                <th scope="col" className="py-3 pr-4 font-semibold">Avg loss</th>
                <th scope="col" className="py-3 font-semibold">RSI</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/10">
                <td className="py-3 pr-4">Wilder&apos;s smoothing: (old × 13 + new) ÷ 14</td>
                <td className="py-3 pr-4">5.57</td>
                <td className="py-3 pr-4">3.64</td>
                <td className="py-3">60.5</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-3 pr-4">Simple average of the last 14 (the +10 drops out)</td>
                <td className="py-3 pr-4">5.29</td>
                <td className="py-3 pr-4">3.86</td>
                <td className="py-3">57.8</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-3 pr-4">Exponential average, weight 2 ÷ 15</td>
                <td className="py-3 pr-4">5.20</td>
                <td className="py-3 pr-4">4.20</td>
                <td className="py-3">55.3</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Same prices, three answers five points apart. Wilder&apos;s version
          is the usual default, but because each value carries a little of
          every earlier one, it also depends on how much history the platform
          loaded before your first candle. Add a different price feed and
          two charts of the same pair rarely agree to the decimal. Read RSI
          as a zone (above 70, around 50, below 30), not as an exact number.
        </p>
      </ContentSection>

      <ContentSection id="variants" title="How traders use it, and where they disagree">
        <ul>
          <li>
            <strong>70 / 30 as overbought and oversold.</strong>{" "}
            Wilder&apos;s levels. Some traders use 80 / 20 so the extremes
            mean more, especially in trending markets.
          </li>
          <li>
            <strong>The 50 line as a trend filter.</strong> RSI holding above
            50 means up closes have outweighed down closes; some traders only
            look for buys while it does, and for sells below it.
          </li>
          <li>
            <strong>Divergence.</strong> Price makes a new high or low and
            RSI doesn&apos;t. That is a separate idea with its own page:{" "}
            <a href={glossaryHref("divergence")}>divergence</a>.
          </li>
        </ul>
        <p>
          {SITE.name}&apos;s convention: RSI is evidence about momentum, read
          alongside <a href={glossaryHref("market-structure")}>market structure</a>.
          It never decides a trade on its own, and an overbought reading in
          an uptrend is not a reason to sell.
        </p>
      </ContentSection>

      <ContentSection id="why" title="Why it matters">
        <p>
          RSI turns a row of candles into one number that says how one-sided
          the recent move has been. That helps you notice when a trend is
          running hot or losing pace. It doesn&apos;t say where price will
          turn, and the strongest trends are the ones where &quot;overbought&quot;
          lasts longest.
        </p>
      </ContentSection>

      <ContentSection id="mistakes" title="Common mistakes">
        <ul>
          <li>
            <strong>Selling every reading above 70.</strong> In an uptrend
            that means selling into strength again and again. Wait for{" "}
            <a href={glossaryHref("change-of-character")}>a break in structure</a>{" "}
            before treating a top as likely.
          </li>
          <li>
            <strong>Buying every reading below 30.</strong> The same mistake
            in a downtrend, with a falling market under it.
          </li>
          <li>
            <strong>Comparing RSI values across platforms.</strong> A 69 on
            one chart and a 72 on another can be the same market.
          </li>
          <li>
            <strong>Counting RSI as an extra reason.</strong> It is built from
            the same closes as the chart, so RSI agreeing with a trend you
            can already see is not independent{" "}
            <a href={glossaryHref("confluence")}>confluence</a>.
          </li>
        </ul>
      </ContentSection>

      <TermFaq faq={FAQ} />

      <ContentSection id="app" title="RSI in the app">
        <p>
          The instant market read in {SITE.name} (Premium) shows an RSI
          reading in its market snapshot, next to the 20, 50 and 200-period
          EMAs and the ATR. The app calculates them from the candles it
          fetches for that market rather than from your screen, so the
          figure can differ by a few points from your platform&apos;s RSI(14)
          for the reasons above. It is shown as context for the structure
          read, not as a signal.
        </p>
      </ContentSection>

      <RelatedTerms current={SLUG} />
    </ContentPage>
  );
}

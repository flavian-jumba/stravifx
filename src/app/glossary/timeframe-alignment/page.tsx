import type { Metadata } from "next";
import { ContentPage, ContentSection } from "@/components/ContentPage";
import { RelatedTerms, TermFaq, TermFigure } from "@/components/glossary/TermParts";
import { definedTermSchema, faqSchema, GLOSSARY_PATH, glossaryHref } from "@/lib/glossary";
import { SITE } from "@/lib/site";

const SLUG = "timeframe-alignment";
const PATH = glossaryHref(SLUG);

export const metadata: Metadata = {
  title: "Timeframe Alignment: Higher vs Lower Timeframes",
  description:
    "Timeframe alignment means the higher timeframe trend agrees with the chart you enter on. Which timeframes to pair, how to read a conflict and when to wait.",
  alternates: { canonical: PATH },
};

const DEFINITION =
  "Timeframe alignment means checking that the trend on a higher timeframe points the same way as the timeframe you enter on. If the daily and 4-hour charts are both making higher highs and higher lows, a buy on the 1-hour chart is aligned; a sell there is trading against the larger move.";

const FAQ = [
  {
    q: "Which higher timeframe should I check?",
    a: "One that is roughly four to six times your entry timeframe: the 4-hour for 1-hour entries, the 1-hour for 15-minute entries, the daily for 4-hour entries. Much closer and the two charts show nearly the same thing; much further and the higher chart moves too slowly to tell you anything about this trade.",
  },
  {
    q: "Can I trade against the higher timeframe?",
    a: "You can, and some traders do it on purpose, but know what you are doing: a counter-trend trade is betting on a pullback inside a bigger move. Keep the target short of the higher timeframe's next level, expect it to fail more often, and decide your rule before the trade, not during it.",
  },
  {
    q: "What if the higher timeframe is ranging?",
    a: "Then there is no direction to align with. Treat the range's edges as the levels that matter: buy near the floor, sell near the ceiling, and expect targets in the middle of the range to be harder to reach. Or wait for the range to break and use the new direction.",
  },
  {
    q: "How many timeframes should I use?",
    a: "Two or three. A higher one for direction and an entry one for timing covers most styles; a third, faster one is only for fine-tuning the entry. Checking five or six usually means one of them will disagree, which turns into a reason to doubt every trade.",
  },
];

export default function TimeframeAlignmentPage() {
  return (
    <ContentPage
      eyebrow="Glossary · Execution"
      title="Timeframe alignment"
      breadcrumbs={[
        { name: "Glossary", href: GLOSSARY_PATH },
        { name: "Timeframe alignment", href: PATH },
      ]}
      schema={[definedTermSchema(SLUG, "Timeframe alignment", DEFINITION), faqSchema(FAQ)]}
      answer={<p>{DEFINITION}</p>}
    >
      <TermFigure
        src="/glossary/timeframe-alignment.svg"
        alt="Three chart panels side by side. The daily panel shows an uptrend of higher highs and higher lows. The 4-hour panel shows price falling into a shaded daily support area. The 1-hour panel shows price bottoming and breaking above a dashed level, marked as a buy that agrees with the daily trend."
        caption="The daily chart picks the side, the 4-hour shows the pullback, and the 1-hour times the entry once it turns back with the daily."
      />

      <ContentSection id="how" title="How to check alignment">
        <ol>
          <li>
            <strong>Read the higher timeframe first.</strong> Mark its{" "}
            <a href={glossaryHref("swing-high-swing-low")}>swing highs and lows</a>{" "}
            and decide whether it is an uptrend, a downtrend or a{" "}
            <a href={glossaryHref("range-consolidation")}>range</a>, as the{" "}
            <a href={glossaryHref("market-structure")}>market structure</a> page
            explains. That is your bias.
          </li>
          <li>
            <strong>Find where the higher timeframe would care.</strong> Its
            last higher low in an uptrend, a{" "}
            <a href={glossaryHref("supply-demand-zone")}>demand zone</a>, an{" "}
            <a href={glossaryHref("order-block")}>order block</a>. Those are the
            places to look for trades in the bias direction.
          </li>
          <li>
            <strong>Drop to the entry timeframe and wait.</strong> When price
            reaches that area, look for the entry chart to turn back with the
            bias, for example a{" "}
            <a href={glossaryHref("change-of-character")}>change of character</a>{" "}
            in the higher timeframe&apos;s direction. Until then, a move
            against the bias on the entry chart is usually just the pullback.
          </li>
        </ol>
        <p>
          A common rule of thumb is to make the higher timeframe about four to
          six times the entry one (daily and 4-hour, 4-hour and 1-hour, 1-hour
          and 15-minute). Alexander Elder&apos;s Triple Screen method, one of
          the best-known multi-timeframe systems, uses a factor of about five.
          The exact number matters less than using the same pair every time.
        </p>
      </ContentSection>

      <ContentSection id="example" title="A worked example: one market, two trades">
        <p>
          GBP/USD. The prices are an illustration, not real data.
        </p>
        <ul>
          <li>
            <strong>Daily:</strong> an uptrend of higher highs and higher lows,
            with a demand zone at 1.2680–1.2710 under the last push up.
          </li>
          <li>
            <strong>4-hour:</strong> falling from a high at 1.2900 in lower
            highs and lower lows. Inside the daily uptrend, that is a pullback.
          </li>
        </ul>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[480px] border-collapse text-left text-[0.9375rem]">
            <thead>
              <tr className="border-b border-white/10 text-fg">
                <th scope="col" className="py-3 pr-4 font-semibold"> </th>
                <th scope="col" className="py-3 pr-4 font-semibold">A: sell the pullback now</th>
                <th scope="col" className="py-3 font-semibold">B: wait, then buy with the daily</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/10">
                <th scope="row" className="py-3 pr-4 font-normal text-fg">Agrees with</th>
                <td className="py-3 pr-4">4-hour, not daily</td>
                <td className="py-3">Daily, once the 1-hour turns up</td>
              </tr>
              <tr className="border-b border-white/10">
                <th scope="row" className="py-3 pr-4 font-normal text-fg">Entry</th>
                <td className="py-3 pr-4">Sell 1.2790 on the 1-hour</td>
                <td className="py-3">Buy 1.2725 after a 1-hour break up inside the zone</td>
              </tr>
              <tr className="border-b border-white/10">
                <th scope="row" className="py-3 pr-4 font-normal text-fg">Stop</th>
                <td className="py-3 pr-4">1.2815 (25 pips)</td>
                <td className="py-3">1.2675, below the zone (50 pips)</td>
              </tr>
              <tr className="border-b border-white/10">
                <th scope="row" className="py-3 pr-4 font-normal text-fg">Target</th>
                <td className="py-3 pr-4">1.2715, just above the zone (75 pips, 1:3)</td>
                <td className="py-3">TP1 1.2800 (1:1.5), TP2 1.2890 before the 4-hour high (1:3.3)</td>
              </tr>
              <tr className="border-b border-white/10">
                <th scope="row" className="py-3 pr-4 font-normal text-fg">The catch</th>
                <td className="py-3 pr-4">Its whole target ends where daily buyers are expected</td>
                <td className="py-3">It may never set up; the zone can break</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Trade A looks clean on its own chart and even has a good ratio, but
          it is selling into the area the bigger trend is most likely to
          defend, so there is no room beyond its target. Trade B waits for both
          timeframes to agree and has room to run to the 4-hour high. Neither
          is guaranteed. Alignment doesn&apos;t make B a winner; it makes B the
          trade that isn&apos;t fighting the larger move.
        </p>
      </ContentSection>

      <ContentSection id="states" title="What each combination means">
        <ul>
          <li>
            <strong>Higher and entry timeframes agree.</strong> Aligned. The
            usual place to look for entries, ideally after a pullback rather
            than at the end of a long run.
          </li>
          <li>
            <strong>Higher trends, entry chart runs against it.</strong> Usually
            a pullback in progress. Wait for the entry chart to turn back, near
            a higher-timeframe level.
          </li>
          <li>
            <strong>Higher timeframe is ranging.</strong> No bias to follow.
            Trade the edges or wait for a break.
          </li>
          <li>
            <strong>Higher timeframe has just printed a{" "}
            <a href={glossaryHref("change-of-character")}>CHoCH</a>.</strong>{" "}
            The old trend is in doubt. Many traders stand aside until a{" "}
            <a href={glossaryHref("market-structure-shift")}>market structure shift</a>{" "}
            or a new swing confirms the new direction.
          </li>
        </ul>
      </ContentSection>

      <ContentSection id="variants" title="What traders disagree on">
        <ul>
          <li>
            <strong>How strict to be.</strong> Some never trade against the
            higher timeframe; others take counter-trend trades with shorter
            targets. Both are rules; mixing them trade by trade isn&apos;t.
          </li>
          <li>
            <strong>How the bias is read.</strong> Swing structure (higher
            highs and higher lows), moving averages (price above a rising
            average), or both. They usually agree in a clean trend and disagree
            near turns.
          </li>
          <li>
            <strong>Whether it adds anything.</strong> A minority argue that if
            you only trade with the higher timeframe, you are joining moves
            late. There is no published, independent evidence that settles how
            much alignment improves results, so treat it as a filter that
            removes some trades, not as proof that the rest will work.
          </li>
        </ul>
        <p>
          {SITE.name} reads the bias from structure first and treats alignment
          as a separate check from{" "}
          <a href={glossaryHref("confluence")}>confluence</a>: a trade can have
          several reasons at one price and still be against the higher
          timeframe.
        </p>
      </ContentSection>

      <ContentSection id="why" title="Why it matters">
        <p>
          A setup can be correct on its own chart and still lose because the
          bigger trend runs straight through it. Checking one timeframe up
          tells you whether your target has room, whether your{" "}
          <a href={glossaryHref("stop-loss")}>stop</a> sits on the side the
          larger trend is pushing toward, and whether a move against you is a
          pullback or a{" "}
          <a href={glossaryHref("invalidation")}>reason to drop the idea</a>.
        </p>
      </ContentSection>

      <ContentSection id="mistakes" title="Common mistakes">
        <ul>
          <li>
            <strong>Checking the higher timeframe after entering.</strong> By
            then it becomes a search for reasons to stay in. Read it first.
          </li>
          <li>
            <strong>Shopping for a timeframe that agrees.</strong> Flicking
            between charts until one supports the trade you already want is
            not alignment. Fix your pair of timeframes in advance.
          </li>
          <li>
            <strong>Reading a lower timeframe&apos;s labels as the
            higher&apos;s.</strong> A 15-minute lower low is not a daily one.
            Label each timeframe&apos;s swings separately, as the{" "}
            <a href={glossaryHref("higher-highs-higher-lows")}>
              higher highs / higher lows
            </a>{" "}
            page shows.
          </li>
          <li>
            <strong>Treating every pullback as a reversal.</strong> In an
            aligned uptrend, a fall on the entry chart is normal until the
            higher timeframe&apos;s own structure breaks.
          </li>
        </ul>
      </ContentSection>

      <TermFaq faq={FAQ} />

      <ContentSection id="app" title="Timeframe alignment in the app">
        <p>
          {SITE.name}&apos;s instant market read (Premium) pulls live data for
          the 1-hour, 4-hour and daily charts together and shows a
          &quot;HTF alignment&quot; line next to structure, momentum and
          liquidity; it is told to point out where the timeframes disagree
          rather than hide it. Swing signals go further: they only look for
          buys while the daily chart closes above its 50-period average and
          that average is above the 200-period one (the reverse for sells),
          find the zone on the 4-hour chart, and time the entry on the 1-hour.
          If the daily trend flips while a signal is open, the signal is
          closed and recorded as invalidated by the higher timeframe. When you
          scan a single chart, the analysis is built from that chart and its
          own timeframe&apos;s price data, so check the timeframe above it
          yourself.
        </p>
      </ContentSection>

      <RelatedTerms current={SLUG} />
    </ContentPage>
  );
}

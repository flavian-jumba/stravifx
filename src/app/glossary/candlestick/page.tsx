import type { Metadata } from "next";
import { ContentPage, ContentSection } from "@/components/ContentPage";
import { RelatedTerms, TermFaq, TermFigure } from "@/components/glossary/TermParts";
import { definedTermSchema, faqSchema, GLOSSARY_PATH, glossaryHref } from "@/lib/glossary";
import { SITE } from "@/lib/site";

const SLUG = "candlestick";
const PATH = glossaryHref(SLUG);

export const metadata: Metadata = {
  title: "Candlestick / OHLC: How to Read a Candle",
  description:
    "A candle shows four prices: open, high, low and close. How to read the body and wicks, how four 1-hour candles make one 4-hour candle, and what a candle hides.",
  alternates: { canonical: PATH },
};

const DEFINITION =
  "A candlestick summarises one period of trading with four prices: the open, high, low and close (OHLC). The body spans the open to the close and is coloured by direction; the wicks reach the high and the low. A candle shows where price went, but not in what order, which matters when one candle touches both your stop and target.";

const FAQ = [
  {
    q: "What do the colours of a candle mean?",
    a: "Only whether it closed above or below its open. Most platforms colour an up candle (close above open) green or white and a down candle red or black, but the colours are a setting, not a standard. A long red candle can still be part of an uptrend.",
  },
  {
    q: "Why do my daily candles look different from someone else's?",
    a: "Forex trades around the clock on weekdays, so a daily candle depends on when the platform starts the day. Many brokers use 5 p.m. New York time; others use midnight in their server's time zone, which can add a short Sunday candle and give a different open, high, low and close for every day.",
  },
  {
    q: "Does a long wick mean price will reverse?",
    a: "Not by itself. A long upper wick says price went higher and was pushed back before the close; where it happens matters more than the wick. At a level you were watching, after a sweep of a high, it is evidence. In the middle of a range it is often just noise.",
  },
  {
    q: "What is the difference between a candlestick and a bar chart?",
    a: "Nothing in the data. Both show the same four prices per period. A bar chart draws the open and close as small ticks on a vertical line; a candlestick fills the space between them as a coloured body, which makes direction easier to see at a glance.",
  },
];

export default function CandlestickPage() {
  return (
    <ContentPage
      eyebrow="Glossary · Indicators"
      title="Candlestick / OHLC"
      breadcrumbs={[
        { name: "Glossary", href: GLOSSARY_PATH },
        { name: "Candlestick / OHLC", href: PATH },
      ]}
      schema={[definedTermSchema(SLUG, "Candlestick / OHLC", DEFINITION), faqSchema(FAQ)]}
      answer={<p>{DEFINITION}</p>}
    >
      <TermFigure
        src="/glossary/candlestick.svg"
        alt="On the left, one candle labelled with its parts: the high at the top of the upper wick, the close at the top of the body, the open at the bottom of the body, and the low at the bottom of the lower wick. On the right, four 1-hour EUR/USD candles that rise to 1.08710 and then fall to 1.08380, and next to them the single 4-hour candle they make: open 1.08500, high 1.08710, low 1.08380, close 1.08530, a small body with long wicks on both sides."
        caption="Four hours of a rally and a drop become one small candle with two wicks. The 4-hour candle keeps the four prices and loses the order they came in."
      />

      <ContentSection id="anatomy" title="Reading one candle">
        <ul>
          <li>
            <strong>Open:</strong> the first traded price of the period.
          </li>
          <li>
            <strong>Close:</strong> the last price of the period. Most
            definitions of a break, including{" "}
            <a href={glossaryHref("break-of-structure")}>break of structure</a>,
            care about where a candle closed, not where it reached.
          </li>
          <li>
            <strong>High and low:</strong> the extremes. The wicks (or
            shadows) run from the body to these.
          </li>
          <li>
            <strong>Body:</strong> open to close. A close above the open is
            an up candle, below it a down candle.
          </li>
        </ul>
        <p>
          A big body with small wicks means price moved one way and stayed
          there. Small bodies with long wicks mean price travelled but was
          pushed back before the close. Most forex charts are drawn from the
          bid price, so a candle shows where sellers could have sold; see{" "}
          <a href={glossaryHref("spread")}>spread</a> for why that matters to
          a sell&apos;s stop.
        </p>
      </ContentSection>

      <ContentSection id="example" title="A worked example: four hours, one candle">
        <p>
          Four 1-hour EUR/USD candles. The prices are an illustration, not
          real data.
        </p>
        <div className="mt-2 overflow-x-auto">
          <table className="w-full min-w-[440px] border-collapse text-left font-mono text-[0.875rem]">
            <thead>
              <tr className="border-b border-white/10 font-sans text-fg">
                <th scope="col" className="py-3 pr-4 font-semibold">Candle</th>
                <th scope="col" className="py-3 pr-4 font-semibold">Open</th>
                <th scope="col" className="py-3 pr-4 font-semibold">High</th>
                <th scope="col" className="py-3 pr-4 font-semibold">Low</th>
                <th scope="col" className="py-3 font-semibold">Close</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/10">
                <td className="py-3 pr-4">1H #1</td>
                <td className="py-3 pr-4">1.08500</td>
                <td className="py-3 pr-4">1.08620</td>
                <td className="py-3 pr-4">1.08460</td>
                <td className="py-3">1.08590</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-3 pr-4">1H #2</td>
                <td className="py-3 pr-4">1.08590</td>
                <td className="py-3 pr-4">1.08710</td>
                <td className="py-3 pr-4">1.08550</td>
                <td className="py-3">1.08680</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-3 pr-4">1H #3</td>
                <td className="py-3 pr-4">1.08680</td>
                <td className="py-3 pr-4">1.08700</td>
                <td className="py-3 pr-4">1.08420</td>
                <td className="py-3">1.08450</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-3 pr-4">1H #4</td>
                <td className="py-3 pr-4">1.08450</td>
                <td className="py-3 pr-4">1.08560</td>
                <td className="py-3 pr-4">1.08380</td>
                <td className="py-3">1.08530</td>
              </tr>
              <tr className="border-b border-white/10 text-fg">
                <td className="py-3 pr-4">4H</td>
                <td className="py-3 pr-4">1.08500</td>
                <td className="py-3 pr-4">1.08710</td>
                <td className="py-3 pr-4">1.08380</td>
                <td className="py-3">1.08530</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          The 4-hour candle takes the open of the first hour, the highest
          high, the lowest low and the close of the last hour. Its body is 3
          pips (1.08500 to 1.08530), its upper wick 18 pips and its lower wick
          12 pips. On the 4-hour chart this looks like indecision; on the
          1-hour chart it was a 21-pip rally followed by a 33-pip drop.
        </p>
        <p>
          Now put a trade on it: a buy at 1.08500 with a{" "}
          <a href={glossaryHref("stop-loss")}>stop</a> at 1.08400 and a{" "}
          <a href={glossaryHref("take-profit")}>target</a> at 1.08700. The
          4-hour candle reached both (high 1.08710, low 1.08380), and from
          that candle alone you can&apos;t tell which came first. The 1-hour
          candles can: the target was hit in hour 2, before the stop would
          have been hit in hour 4.
        </p>
      </ContentSection>

      <ContentSection id="variants" title="Things that change what a candle shows">
        <ul>
          <li>
            <strong>When the day starts.</strong> Daily candles in forex
            depend on the platform&apos;s day boundary. Many brokers close
            the day at 5 p.m. New York time; a chart set to midnight in
            another time zone shows different daily candles, and can show a
            short Sunday one.
          </li>
          <li>
            <strong>Bid or ask.</strong> Charts usually draw the bid. The ask
            candle is the same shape, one spread higher.
          </li>
          <li>
            <strong>The data feed.</strong> Forex has no single exchange, so
            two brokers&apos; candles can differ by a pip or two at the
            extremes. A wick on one chart may not reach a level on another.
          </li>
          <li>
            <strong>The candle that hasn&apos;t closed.</strong> The last
            candle on a live chart is still changing; its close is just the
            current price.
          </li>
        </ul>
      </ContentSection>

      <ContentSection id="why" title="Why it matters">
        <p>
          Every other term in this glossary is read from candles: a{" "}
          <a href={glossaryHref("swing-high-swing-low")}>swing high</a> is a
          candle&apos;s high, a{" "}
          <a href={glossaryHref("break-of-structure")}>break</a> is a close, a{" "}
          <a href={glossaryHref("fair-value-gap")}>fair value gap</a> is three
          candles that don&apos;t overlap. Knowing what a candle records, and
          what it leaves out, is the base for all of them.
        </p>
      </ContentSection>

      <ContentSection id="mistakes" title="Common mistakes">
        <ul>
          <li>
            <strong>Acting on a candle before it closes.</strong> A strong
            body halfway through the hour can end as a long wick.
          </li>
          <li>
            <strong>Reading a single candle pattern in isolation.</strong> A
            hammer or engulfing candle means far more at a level you marked
            beforehand than in the middle of nowhere.
          </li>
          <li>
            <strong>Assuming the order inside a candle.</strong> If a candle
            touches both your stop and target, check a lower timeframe before
            deciding what happened.
          </li>
          <li>
            <strong>Treating colour as trend.</strong> One red candle in an
            uptrend is a pullback, not a reversal. The trend is in the{" "}
            <a href={glossaryHref("higher-highs-higher-lows")}>highs and lows</a>.
          </li>
        </ul>
      </ContentSection>

      <TermFaq faq={FAQ} />

      <ContentSection id="app" title="Candles in the app">
        <p>
          {SITE.name} reads your chart picture and then checks every level it
          proposes against numeric OHLC candles fetched for that market, so a
          level comes from the data, not just from the pixels. The journal
          uses the same candles to follow each setup to its outcome, and
          where one candle touches both the stop and a target, it counts the
          stop: OHLC can&apos;t show which came first, and assuming the
          better order would report a record nobody could reproduce.
        </p>
      </ContentSection>

      <RelatedTerms current={SLUG} />
    </ContentPage>
  );
}

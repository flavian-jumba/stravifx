import type { Metadata } from "next";
import { ContentPage, ContentSection } from "@/components/ContentPage";
import { RelatedTerms, TermFaq, TermFigure } from "@/components/glossary/TermParts";
import { definedTermSchema, faqSchema, GLOSSARY_PATH, glossaryHref } from "@/lib/glossary";
import { SITE } from "@/lib/site";

const SLUG = "liquidity-sweep";
const PATH = glossaryHref(SLUG);

export const metadata: Metadata = {
  title: "Liquidity Sweep (Stop Hunt): Sweep vs Breakout",
  description:
    "A liquidity sweep pushes past an obvious high or low, triggers the stops there, then closes back inside. How to tell it from a breakout, with a worked example.",
  alternates: { canonical: PATH },
};

const DEFINITION =
  "A liquidity sweep, or stop hunt, is a sharp push past an obvious high or low that triggers the stop orders resting there, then reverses instead of continuing.";

const FAQ = [
  {
    q: "Is a liquidity sweep the same as a stop hunt or a liquidity grab?",
    a: "Yes, they describe the same candle shape. Liquidity sweep is the more neutral name. Stop hunt suggests someone went after the stops on purpose, which no chart can prove, so the StraviFX glossary lists stop hunt, stop run and liquidity grab as other names for a sweep.",
  },
  {
    q: "How far past the level does price have to go?",
    a: "There is no fixed distance. Any trade beyond the level triggers the stops resting just past it, so even a few pips can count. What matters is that the level was obvious and that the candle closed back inside it. A long wick with a close back inside is a clearer sweep than a one-pip poke.",
  },
  {
    q: "Does a sweep always mean price will reverse?",
    a: "No. A sweep shows that the stops beyond a level were taken and that the push didn't hold. Price can still come back and break the level properly later. Treat a sweep as one reason for a trade idea, checked against the trend on a higher timeframe, not as a signal on its own.",
  },
  {
    q: "Where does the stop loss go on a trade after a sweep?",
    a: "Beyond the tip of the sweep wick, with a few pips of room, because a move past the wick means the sweep has failed. Then size the position for that distance so the money at risk stays the same.",
  },
];

export default function LiquiditySweepPage() {
  return (
    <ContentPage
      eyebrow="Glossary · Liquidity"
      title="Liquidity sweep / stop hunt"
      breadcrumbs={[
        { name: "Glossary", href: GLOSSARY_PATH },
        { name: "Liquidity sweep / stop hunt", href: PATH },
      ]}
      schema={[
        definedTermSchema(SLUG, "Liquidity sweep / stop hunt", DEFINITION),
        faqSchema(FAQ),
      ]}
      answer={
        <p>
          {DEFINITION} The candle&apos;s close decides it: back inside the level
          is a sweep, beyond it is a breakout.
        </p>
      }
    >
      <TermFigure
        src="/glossary/liquidity-sweep.svg"
        alt="Two side-by-side diagrams of price pushing below the same swing low. On the left the candle wicks below the low and closes back above it, labelled sweep. On the right the candle closes below the low, labelled breakout."
        caption="Both candles push through the swing low and trigger the sell stops beneath it. The left one closes back above the low (a sweep); the right one closes below it (a breakout)."
      />

      <ContentSection id="what" title="What happens in a sweep">
        <p>
          Stop orders pool just beyond obvious highs and lows (the{" "}
          <a href={glossaryHref("liquidity")}>liquidity</a> page explains where
          and why). When price reaches them, they turn into market orders: sell
          stops below a low become selling, buy stops above a high become
          buying. If that burst of orders is all there was, price runs out of
          fuel and comes straight back. That push and return is the sweep.
        </p>
        <p>
          A sweep of a low takes{" "}
          <a href={glossaryHref("buy-side-sell-side-liquidity")}>
            sell-side liquidity
          </a>
          ; a sweep of a high takes buy-side liquidity. Flat edges such as{" "}
          <a href={glossaryHref("equal-highs-equal-lows")}>equal highs</a> are
          common targets because so many stops sit behind them.
        </p>
      </ContentSection>

      <ContentSection id="vs" title="Sweep, false breakout or breakout">
        <p>
          Three things can happen after price trades through a level. Only the
          closes tell them apart.
        </p>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[480px] border-collapse text-left text-[0.9375rem]">
            <thead>
              <tr className="border-b border-white/10 text-fg">
                <th scope="col" className="py-3 pr-4 font-semibold">What you see</th>
                <th scope="col" className="py-3 pr-4 font-semibold">Close</th>
                <th scope="col" className="py-3 font-semibold">Reading</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/10">
                <td className="py-3 pr-4">Wick through the level</td>
                <td className="py-3 pr-4">Back inside, same candle</td>
                <td className="py-3">Sweep</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-3 pr-4">Close beyond, then back inside</td>
                <td className="py-3 pr-4">Beyond, then inside a few candles later</td>
                <td className="py-3">False breakout</td>
              </tr>
              <tr>
                <td className="py-3 pr-4">Close beyond, and it holds</td>
                <td className="py-3 pr-4">Beyond, and later candles stay there</td>
                <td className="py-3">Breakout</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Traders don&apos;t agree on the timing. Some count a sweep only when
          the same candle closes back inside; others accept a rejection that
          plays out over two or three candles, which overlaps with what other
          traders call a false breakout. {SITE.name} uses the strict version:
          the candle that trades through the level must close back inside it.
          A candle that closes beyond the level is a break, the same close rule
          used for a{" "}
          <a href={glossaryHref("break-of-structure")}>break of structure</a>.
        </p>
      </ContentSection>

      <ContentSection id="example" title="A worked example">
        <p>
          On a 4-hour EUR/USD chart, the last confirmed swing low is 1.0850.
          The prices are an illustration, not real data.
        </p>
        <ul>
          <li>
            <strong>The sweep:</strong> a candle trades down to 1.0832, 18 pips
            below the low, triggering the sell stops there, then closes at
            1.0861, back above 1.0850. The low was swept, not broken.
          </li>
          <li>
            <strong>The trade idea:</strong> a buy at 1.0861 after the close,
            with the stop at 1.0827, 5 pips beyond the sweep wick (34 pips of
            risk), and the target at the last swing high, 1.0929 (68 pips).
            That is a 1:2{" "}
            <a href="/tools/risk-reward-calculator">risk-to-reward</a>.
          </li>
          <li>
            <strong>The size:</strong> on a $2,000 account risking 1% ($20),
            34 pips at $10 a pip per standard lot gives 0.058 lots, rounded down
            to 0.05 lots. The money at risk is then $17.
          </li>
          <li>
            <strong>The breakout version:</strong> if the same candle had closed
            at 1.0838 instead, below the low, the level would be broken and the
            buy idea gone. The low pointed the other way.
          </li>
        </ul>
        <p>
          The <a href="/tools/lot-size-calculator">lot size calculator</a>{" "}
          works out the size for any stop distance.
        </p>
      </ContentSection>

      <ContentSection id="why" title="Why it matters">
        <p>
          A sweep is one of the clearest moments on a chart: the stops are
          gone, the push failed, and you know exactly where you are wrong (past
          the tip of the wick). It also explains why beginners so often get
          stopped out a few pips beyond an obvious low just before price turns
          their way. Their stop was part of the pool.
        </p>
      </ContentSection>

      <ContentSection id="mistakes" title="Common mistakes">
        <ul>
          <li>
            <strong>Calling it before the close.</strong> A candle that has
            spiked through a low can still close below it. Until it closes,
            it is neither a sweep nor a break.
          </li>
          <li>
            <strong>Seeing sweeps at levels nobody watches.</strong> A sweep
            needs an obvious level with stops behind it: a confirmed{" "}
            <a href={glossaryHref("swing-high-swing-low")}>swing high or low</a>
            , equal highs or lows, or a range edge. A random wick is just a
            wick.
          </li>
          <li>
            <strong>Trading every sweep against the trend.</strong> A sweep of
            a low inside a strong downtrend is often a pause before the next
            leg down. Check the higher timeframe first.
          </li>
          <li>
            <strong>Putting the stop inside the wick.</strong> If price goes
            back to the tip of the sweep, the idea has failed. A stop above the
            tip gets taken on noise before that is known.
          </li>
        </ul>
      </ContentSection>

      <TermFaq faq={FAQ} />

      <ContentSection id="app" title="Sweeps in the app">
        <p>
          {SITE.name}&apos;s hourly Swing signals check (Premium, monthly plans
          and longer) tests the last closed 4-hour candle for a sweep: its low
          below the last confirmed swing low and its close back above it, or
          the mirror image at a swing high. A sweep alone isn&apos;t enough.
          The check also wants the daily trend to agree and a strong candle in
          the new direction, with a body at least 1.1 times the average 4-hour
          range over the last 14 candles. A break of structure can stand in
          for the sweep. These are rules for reading a chart, not predictions;
          the decision stays with you.
        </p>
      </ContentSection>

      <RelatedTerms current={SLUG} />
    </ContentPage>
  );
}

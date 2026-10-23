import type { Metadata } from "next";
import { ContentPage, ContentSection } from "@/components/ContentPage";
import { RelatedTerms, TermFaq, TermFigure } from "@/components/glossary/TermParts";
import { definedTermSchema, faqSchema, GLOSSARY_PATH, glossaryHref } from "@/lib/glossary";
import { SITE } from "@/lib/site";

const SLUG = "liquidity";
const PATH = glossaryHref(SLUG);

export const metadata: Metadata = {
  title: "Liquidity in Trading: Where Stops Sit and Why",
  description:
    "In chart analysis, liquidity means resting orders, mostly stop losses, just beyond obvious highs and lows. Where it pools, why price seeks it, and an example.",
  alternates: { canonical: PATH },
};

const DEFINITION =
  "In chart analysis, liquidity means resting orders that can fill a large position. It pools where obvious stop losses sit: just beyond prior highs, lows and round numbers.";

const FAQ = [
  {
    q: "What is the difference between market liquidity and liquidity on a chart?",
    a: "Market liquidity is how easily an instrument can be traded without moving its price: EUR/USD is very liquid, an exotic pair much less so, which shows up in spreads. Chart traders, especially smart-money traders, use liquidity to mean the pools of resting orders at specific prices. The StraviFX glossary and app use the second meaning.",
  },
  {
    q: "Is a stop hunt real or a conspiracy?",
    a: "Stop orders do cluster at obvious prices, and when price reaches them they become market orders, which can push price further and then leave it with nothing behind it. That much follows from how stop orders work. Whether a particular spike was deliberate can't be known from a chart, so treat a sweep as a pattern to read, not proof of anyone's intent.",
  },
  {
    q: "What is buy-side and sell-side liquidity?",
    a: "Buy-side liquidity sits above price: the buy stops of short sellers and the buy-stop entries of breakout traders. Sell-side liquidity sits below price: the sell stops of buyers and sell-stop entries. A move toward a cluster of old highs is often described as going for buy-side liquidity.",
  },
  {
    q: "Where should I put my stop if obvious levels attract sweeps?",
    a: "Beyond the level with room to spare, not one pip past it, and then size the position for that distance so the money at risk stays the same. A wider stop with a smaller lot size risks the same amount as a tight stop with a larger one.",
  },
];

export default function LiquidityPage() {
  return (
    <ContentPage
      eyebrow="Glossary · Liquidity"
      title="Liquidity"
      breadcrumbs={[
        { name: "Glossary", href: GLOSSARY_PATH },
        { name: "Liquidity", href: PATH },
      ]}
      schema={[
        definedTermSchema(SLUG, "Liquidity", DEFINITION),
        faqSchema(FAQ),
      ]}
      answer={
        <p>
          {DEFINITION} Large orders need that resting liquidity to fill, so
          price often travels toward it before choosing a direction.
        </p>
      }
    >
      <TermFigure
        src="/glossary/liquidity.svg"
        alt="Diagram of price making two equal highs and a low between them. A shaded band above the highs is labelled buy stops; a band below the low is labelled sell stops. A candle then wicks above the highs and closes back below them."
        caption="Stops pool just beyond obvious highs and lows. The last candle wicks through the equal highs, triggering those stops, and closes back below them: a sweep, not a break."
      />

      <ContentSection id="meanings" title="Two meanings of liquidity">
        <p>
          The word means two different things, and pages you find in search
          often mix them up:
        </p>
        <ul>
          <li>
            <strong>Market liquidity:</strong> how easily an instrument can
            be bought or sold without moving its price. Major forex pairs and
            gold are highly liquid; exotic pairs and small stocks less so.
            You see it in the spread.
          </li>
          <li>
            <strong>Liquidity on a chart:</strong> the resting orders waiting
            at particular prices, mostly stop losses and breakout entries.
            This is the meaning in smart-money concepts (SMC) and ICT-style
            analysis, and the one {SITE.name} uses.
          </li>
        </ul>
      </ContentSection>

      <ContentSection id="where" title="Where liquidity pools">
        <p>
          Stops go where most traders are taught to put them, so they gather
          in predictable places:
        </p>
        <ul>
          <li>
            <strong>Just beyond swing highs and lows.</strong> Buyers put
            stops under the last{" "}
            <a href={glossaryHref("swing-high-swing-low")}>swing low</a>;
            sellers put them above the last swing high.
          </li>
          <li>
            <strong>
              Beyond{" "}
              <a href={glossaryHref("equal-highs-equal-lows")}>
                equal highs and equal lows
              </a>
              .
            </strong> Two or more
            highs at the same price make a flat edge, and many traders&apos;
            stops sit just above it.
          </li>
          <li>
            <strong>Outside a range.</strong> Both edges of a{" "}
            <a href={glossaryHref("range-consolidation")}>range</a> collect
            stops from the traders playing it.
          </li>
          <li>
            <strong>Round numbers.</strong> Prices like 1.3000 on GBP/USD or
            4,000 on gold draw orders of every kind.
          </li>
        </ul>
        <p>
          When price reaches a pool, those stop orders turn into market
          orders. A spike through the level that closes back inside is called
          a{" "}
          <a href={glossaryHref("liquidity-sweep")}>liquidity sweep or stop hunt</a>
          . A close beyond the level is a real
          break. {SITE.name} uses the close to tell them apart, the same rule
          it uses for every{" "}
          <a href={glossaryHref("break-of-structure")}>break of structure</a>.
        </p>
      </ContentSection>

      <ContentSection id="example" title="A worked example">
        <p>
          On a 1-hour GBP/USD chart, two swing highs top out at 1.2748 and
          1.2750. The prices are an illustration, not real data.
        </p>
        <ul>
          <li>
            <strong>Where the stops are:</strong> traders who sold near the
            highs have their buy stops just above them, roughly 1.2755 to
            1.2770. Breakout buyers have buy-stop entries in the same place.
            That cluster is buy-side liquidity.
          </li>
          <li>
            <strong>A sweep:</strong> a candle wicks to 1.2763 and closes at
            1.2741, back below both highs. The stops were triggered, but the
            level wasn&apos;t broken.
          </li>
          <li>
            <strong>A break:</strong> if that candle had closed at 1.2765
            instead, the highs would be broken, and the move could continue.
          </li>
          <li>
            <strong>What it means for your own stop:</strong> a seller at
            1.2730 risking $10 with a stop at 1.2755 (25 pips) trades 0.04
            lots at $10 a pip per standard lot. Moving the stop beyond the
            cluster, to 1.2775 (45 pips), means 0.02 lots for about the same
            $10 at risk ($9). The stop is no longer at the first price a
            sweep would reach.
          </li>
        </ul>
        <p>
          The <a href="/tools/lot-size-calculator">lot size calculator</a>{" "}
          does that sizing for any stop distance.
        </p>
      </ContentSection>

      <ContentSection id="why" title="Why it matters">
        <p>
          Liquidity explains two things beginners find confusing: why price
          so often spikes just past an obvious high or low and then reverses,
          and why their stop seems to get hit right before the market goes
          their way. Knowing where stops pool tells you where a move may be
          heading, and where not to put your own stop.
        </p>
      </ContentSection>

      <ContentSection id="mistakes" title="Common mistakes">
        <ul>
          <li>
            <strong>Treating every spike as a stop hunt.</strong> A move
            through a level that closes beyond it and keeps going is a
            breakout. Only a close back inside makes it a sweep.
          </li>
          <li>
            <strong>Putting stops one pip beyond the obvious level.</strong>{" "}
            That is exactly where the pool is. Give the stop room and reduce
            the lot size.
          </li>
          <li>
            <strong>Trading the sweep before it closes.</strong> A candle
            that has spiked through a high can still close above it. The read
            is only complete at the close.
          </li>
          <li>
            <strong>Treating equal highs as a strong ceiling.</strong> A flat
            edge collects stops, which makes it a common target for a sweep
            rather than a wall.
          </li>
        </ul>
      </ContentSection>

      <TermFaq faq={FAQ} />

      <ContentSection id="app" title="Liquidity in the app">
        <p>
          {SITE.name}&apos;s hourly Swing signals check (Premium, monthly
          plans and longer) looks for a sweep on the 4-hour chart: a candle
          whose wick passes the last confirmed swing low and whose close comes
          back above it, or the mirror image at a swing high. It also takes
          the highest high and lowest low of the last 80 four-hour candles as
          the liquidity a move may travel toward. These are rules for reading
          a chart, not predictions; the decision stays with you.
        </p>
      </ContentSection>

      <RelatedTerms current={SLUG} />
    </ContentPage>
  );
}

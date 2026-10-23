import type { Metadata } from "next";
import { ContentPage, ContentSection } from "@/components/ContentPage";
import { RelatedTerms, TermFaq, TermFigure } from "@/components/glossary/TermParts";
import { definedTermSchema, faqSchema, GLOSSARY_PATH, glossaryHref } from "@/lib/glossary";
import { SITE } from "@/lib/site";

const SLUG = "equal-highs-equal-lows";
const PATH = glossaryHref(SLUG);

export const metadata: Metadata = {
  title: "Equal Highs and Equal Lows (EQH/EQL) Explained",
  description:
    "Equal highs and lows are swing points at nearly the same price. How close counts as equal, how they differ from a double top, and why stops gather behind them.",
  alternates: { canonical: PATH },
};

const DEFINITION =
  "Equal highs (EQH) are two or more highs at nearly the same price; equal lows (EQL) are the same below price. They leave a flat edge on the chart that many traders read as a ceiling or floor, so stop orders gather just beyond it.";

const FAQ = [
  {
    q: "How close do two highs have to be to count as equal?",
    a: "There is no official number. The StraviFX glossary says nearly the same price and sets no tolerance. A workable rule of thumb is a gap no bigger than about a tenth of the average candle range on that timeframe, so the tolerance grows with volatility and timeframe instead of being a fixed number of pips.",
  },
  {
    q: "Are equal highs the same as a double top?",
    a: "Same shape, different reading. A double top is a classic reversal pattern, confirmed when price closes below the low between the two peaks. Equal highs are a liquidity reading: the flat edge collects stops, so price is often expected to push through it first. Both readings can be wrong; the closes decide.",
  },
  {
    q: "Do equal highs act as resistance?",
    a: "Sometimes, but treat them as a target rather than a wall. Each touch adds more stops behind the level, which makes a sweep through it more likely, not less.",
  },
  {
    q: "What happens after equal highs are swept?",
    a: "The stops behind them are filled, so the level loses most of its pull. If the sweeping candle closes back below, that is a sweep and can start a move the other way. If price closes above and holds, the highs are simply broken.",
  },
];

export default function EqualHighsEqualLowsPage() {
  return (
    <ContentPage
      eyebrow="Glossary · Liquidity"
      title="Equal highs / equal lows"
      breadcrumbs={[
        { name: "Glossary", href: GLOSSARY_PATH },
        { name: "Equal highs / equal lows", href: PATH },
      ]}
      schema={[
        definedTermSchema(SLUG, "Equal highs / equal lows (EQH / EQL)", DEFINITION),
        faqSchema(FAQ),
      ]}
      answer={
        <p>
          {DEFINITION} That makes them a common target for a sweep rather than
          a reliable barrier.
        </p>
      }
    >
      <TermFigure
        src="/glossary/equal-highs-equal-lows.svg"
        alt="Diagram of price swinging between three highs at nearly the same level and two lows at the same level. A shaded band above the highs is labelled EQH, buy stops above; a band below the lows is labelled EQL, sell stops below. A thin band around the highs is labelled tolerance."
        caption="Three highs within a small tolerance make a flat ceiling (EQH), and two matching lows a flat floor (EQL). Stops gather just beyond each edge."
      />

      <ContentSection id="equal" title="How equal is equal">
        <p>
          Highs almost never match to the pip, so every trader uses some
          tolerance, and the rules vary: a fixed number of pips, a fraction of
          the average candle range, or simply what looks flat. The{" "}
          {SITE.name} glossary says &ldquo;nearly the same price&rdquo; and
          doesn&apos;t set a number.
        </p>
        <p>
          A rule of thumb that scales with the market is a gap no bigger than
          about a tenth of the average candle range (ATR) on the timeframe you
          are reading. If 1-hour GBP/USD candles average 30 pips, highs within
          3 pips count as equal. On a daily chart, where candles are several
          times larger, the tolerance grows with them. Too loose a tolerance
          makes every pair of highs look equal; too tight, and you miss the
          edges everyone else sees.
        </p>
      </ContentSection>

      <ContentSection id="double-top" title="Equal highs vs a double top">
        <p>
          A double top and equal highs can be the same two peaks. The
          difference is the reading:
        </p>
        <ul>
          <li>
            <strong>Double top (classic chart pattern):</strong> the second
            peak failing at the first is read as a reversal, confirmed when
            price closes below the low between them.
          </li>
          <li>
            <strong>Equal highs (liquidity reading):</strong> the flat edge
            shows where{" "}
            <a href={glossaryHref("buy-side-sell-side-liquidity")}>
              buy-side liquidity
            </a>{" "}
            has stacked up, so price is often expected to push through it, at
            least briefly, before anything else.
          </li>
        </ul>
        <p>
          Neither reading is a forecast. A close beyond the edge, or back
          inside it, settles which one the chart is showing.
        </p>
      </ContentSection>

      <ContentSection id="example" title="A worked example">
        <p>
          On a 1-hour GBP/USD chart, three highs print at 1.2702, 1.2704 and
          1.2701, and two lows at 1.2640. The average candle range is 30 pips.
          The prices are an illustration, not real data.
        </p>
        <ul>
          <li>
            <strong>Are they equal?</strong> The highs span 3 pips, within the
            3-pip tolerance (a tenth of 30), so they count as equal highs. The
            lows match exactly: equal lows.
          </li>
          <li>
            <strong>What can happen next:</strong> a candle wicks to 1.2716 and
            closes at 1.2694, back below all three highs. That is a{" "}
            <a href={glossaryHref("liquidity-sweep")}>liquidity sweep</a>. A
            close at 1.2715 instead would be a break, and a{" "}
            <a href={glossaryHref("retest")}>retest</a> of the old highs from
            above could follow.
          </li>
          <li>
            <strong>The trade idea after the sweep:</strong> a sell at 1.2694
            with the stop at 1.2721, 5 pips above the sweep wick (27 pips of
            risk). The target is 1.2643, just before the equal lows and their
            stops (51 pips): a 1:1.89 risk-to-reward.
          </li>
          <li>
            <strong>The size:</strong> risking $27 at $10 a pip per standard
            lot over 27 pips gives 0.10 lots.
          </li>
        </ul>
        <p>
          The <a href="/tools/lot-size-calculator">lot size calculator</a>{" "}
          works out the size for any stop distance.
        </p>
      </ContentSection>

      <ContentSection id="why" title="Why it matters">
        <p>
          Equal highs and lows are among the easiest levels to see, which is
          exactly why so many stops sit behind them. Beginners often sell just
          under equal highs with a stop a pip above them, the very price a
          sweep reaches first. Seeing the flat edge as a pool of stops, not a
          wall, changes where you put both your entry and your stop.
        </p>
      </ContentSection>

      <ContentSection id="mistakes" title="Common mistakes">
        <ul>
          <li>
            <strong>Treating them as strong resistance or support.</strong>{" "}
            More touches mean more stops behind the edge, which makes a push
            through it more likely.
          </li>
          <li>
            <strong>Using a tolerance that is too loose.</strong> If highs 20
            pips apart on a 1-hour chart count as equal, almost everything
            does, and the label stops meaning anything.
          </li>
          <li>
            <strong>Mixing timeframes.</strong> Two highs that look equal on a
            daily chart can be 30 pips apart on a 15-minute one. Judge them on
            the timeframe you trade.
          </li>
          <li>
            <strong>Placing the stop one pip past the edge.</strong> That is
            the first price a sweep takes. Put it beyond the area with room to
            spare and reduce the lot size.
          </li>
        </ul>
      </ContentSection>

      <TermFaq faq={FAQ} />

      <ContentSection id="app" title="Equal highs in the app">
        <p>
          When a {SITE.name} analysis mentions equal highs or lows (EQH, EQL),
          the term links to the in-app glossary, which uses the same
          definition as this page. One detail if you compare charts: the Swing
          signals check marks a swing high only when it is strictly above the
          three candles on each side, so two neighbouring candles with exactly
          the same high don&apos;t count as a swing at all. Equal highs further
          apart are each their own swing, and a sweep of the latest one is
          read the same way as any other.
        </p>
      </ContentSection>

      <RelatedTerms current={SLUG} />
    </ContentPage>
  );
}

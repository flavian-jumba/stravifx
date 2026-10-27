import type { Metadata } from "next";
import { ContentPage, ContentSection } from "@/components/ContentPage";
import { RelatedTerms, TermFaq, TermFigure } from "@/components/glossary/TermParts";
import { definedTermSchema, faqSchema, GLOSSARY_PATH, glossaryHref } from "@/lib/glossary";
import { SITE } from "@/lib/site";

const SLUG = "optimal-trade-entry";
const PATH = glossaryHref(SLUG);

export const metadata: Metadata = {
  title: "Optimal Trade Entry (OTE): The 62–79% Pullback",
  description:
    "Optimal trade entry (OTE) is the 62–79% retracement of the last impulse leg. How to mark it, the 70.5% level, a worked EUR/USD example, and mistakes to avoid.",
  alternates: { canonical: PATH },
};

const DEFINITION =
  "Optimal trade entry (OTE) is the band between the 62% and 79% retracement of the last impulse leg, where traders look to enter on a pullback in the trend's direction.";

const FAQ = [
  {
    q: "Is OTE 62% or 61.8%, and 79% or 78.6%?",
    a: "Both versions are in use. ICT-style teaching rounds to 62% and 79%; standard Fibonacci tools plot 61.8% and 78.6%. On a 100-pip leg the difference is well under a pip at each edge, so it rarely matters. Pick one and use it every time.",
  },
  {
    q: "What is the difference between OTE and the golden pocket?",
    a: "The golden pocket is usually the narrow 61.8–65% band. OTE starts at the same place but reaches deeper, to 79%. A trader who waits for OTE accepts fewer fills in exchange for a closer stop and a larger reward for the same target.",
  },
  {
    q: "Does OTE work on every timeframe?",
    a: "The math works on any leg. Whether the level means anything depends on the leg you measure: a leg that broke structure or swept liquidity gives a band worth watching; a small wiggle on a 5-minute chart gives a band that price passes through without noticing.",
  },
  {
    q: "What if price never pulls back into OTE?",
    a: "Then there is no OTE trade. Strong trends often pull back only 38–50% before moving on. Chasing the move from higher up means a wider stop or a worse ratio, so many traders let it go and wait for the next leg.",
  },
];

export default function OptimalTradeEntryPage() {
  return (
    <ContentPage
      eyebrow="Glossary · Zones"
      title="Optimal trade entry (OTE)"
      breadcrumbs={[
        { name: "Glossary", href: GLOSSARY_PATH },
        { name: "Optimal trade entry (OTE)", href: PATH },
      ]}
      schema={[
        definedTermSchema(SLUG, "Optimal Trade Entry (OTE)", DEFINITION),
        faqSchema(FAQ),
      ]}
      answer={
        <p>
          {DEFINITION} It is a deep pullback, so the
          stop beyond the leg&apos;s start sits close and a target at the old
          high pays more than the risk.
        </p>
      }
    >
      <TermFigure
        src="/glossary/optimal-trade-entry.svg"
        alt="A bullish price leg from a swing low to a swing high. A shaded band between the 62% and 79% retracement lines is labelled OTE 62–79%. Price pulls back into the band near the dashed 70.5% line, marked entry, and the stop sits on a dashed line below the swing low."
        caption="The last impulse leg, measured from swing low to swing high. OTE is the band 62–79% of the way back down; the stop goes below the low the leg started from."
      />

      <ContentSection id="how" title="How to mark the OTE zone">
        <ol>
          <li>
            <strong>Pick the leg.</strong> Use the last impulse move that did
            something: broke{" "}
            <a href={glossaryHref("break-of-structure")}>structure</a> or swept{" "}
            <a href={glossaryHref("liquidity")}>liquidity</a>. Mark its ends
            from the wicks, as you would any{" "}
            <a href={glossaryHref("swing-high-swing-low")}>swing point</a>.
          </li>
          <li>
            <strong>Measure the pullback.</strong> For a bullish leg, each level
            is high − (high − low) × ratio. For a bearish leg, it is low + (high
            − low) × ratio. Use 0.62 and 0.79 for the edges, and 0.705 for the
            middle line many traders aim at.
          </li>
          <li>
            <strong>Wait for price to come to you.</strong> A pullback into the
            band is where you look for a reason to enter, such as an{" "}
            <a href={glossaryHref("order-block")}>order block</a> or a{" "}
            <a href={glossaryHref("fair-value-gap")}>fair value gap</a> inside
            it.
          </li>
        </ol>
        <p>
          A Fibonacci retracement tool drawn from the swing low to the swing
          high does the math for you; add the 0.705 and 0.79 levels if your
          platform doesn&apos;t show them.
        </p>
      </ContentSection>

      <ContentSection id="variants" title="What traders disagree on">
        <ul>
          <li>
            <strong>The exact numbers.</strong> 62% and 79% (ICT-style
            rounding) or 61.8% and 78.6% (standard Fibonacci). The gap is a
            fraction of a pip on most legs.
          </li>
          <li>
            <strong>Whether a structure shift must come first.</strong> In the
            stricter version, OTE only counts after a{" "}
            <a href={glossaryHref("liquidity-sweep")}>sweep</a> and a{" "}
            <a href={glossaryHref("market-structure-shift")}>
              market structure shift
            </a>
            ; the leg that made the shift is the one you measure. Others apply
            it to any pullback in a trend.
          </li>
          <li>
            <strong>Where in the band to enter.</strong> At the 62% edge (more
            fills), at 70.5% (the usual compromise) or with a limit order spread
            across the band.
          </li>
        </ul>
        <p>
          {SITE.name}&apos;s glossary uses the 62–79% band. None of these levels
          has published evidence that it beats any other pullback depth; treat
          OTE as a way to define &quot;deep enough&quot; before you trade, not as
          a level price respects.
        </p>
      </ContentSection>

      <ContentSection id="example" title="A worked example">
        <p>
          A 1-hour EUR/USD chart. The prices are an illustration, not real
          data.
        </p>
        <ul>
          <li>
            <strong>The leg:</strong> price rallies from a swing low at 1.0800 to
            a high at 1.0900 (100 pips) and breaks structure.
          </li>
          <li>
            <strong>The band:</strong> 62% is 1.0900 − 0.0100 × 0.62 = 1.0838;
            79% is 1.0821; the 70.5% line is about 1.0830.
          </li>
          <li>
            <strong>The plan:</strong> buy at 1.0830, stop at 1.0790 (10 pips
            below the swing low), target the old high at 1.0900. That is 40 pips
            of risk for 70 pips of reward, 1:1.75.
          </li>
          <li>
            <strong>The same trade from the halfway point, 1.0850:</strong> 60
            pips of risk for 50 pips of reward, 1:0.83.
          </li>
          <li>
            <strong>Sized at 1% of a $1,000 account ($10):</strong> the OTE
            entry allows 0.02 lots (rounded down from 0.025), risking $8 to make
            $14. The 1.0850 entry allows only 0.01 lots, risking $6 to make $5.
          </li>
        </ul>
        <p>
          The deeper entry is the better trade on paper, and it is also the
          one that fills less often. The{" "}
          <a href="/tools/risk-reward-calculator">risk-reward calculator</a> and
          the <a href="/tools/lot-size-calculator">lot size calculator</a> run
          these numbers for any levels.
        </p>
      </ContentSection>

      <ContentSection id="why" title="Why it matters">
        <p>
          OTE is a stricter version of{" "}
          <a href={glossaryHref("premium-discount")}>buying in discount</a>:
          instead of anywhere below halfway, it asks for a pullback deep enough
          that the stop is close and the target is far. It gives you a rule
          for &quot;not here, not yet&quot; that you set before price arrives,
          which is the easiest way to stop chasing moves.
        </p>
      </ContentSection>

      <ContentSection id="mistakes" title="Common mistakes">
        <ul>
          <li>
            <strong>Measuring the wrong leg.</strong> Draw from the swing that
            started the move to the swing that ended it. A leg drawn from the
            middle of a move puts the band in the wrong place.
          </li>
          <li>
            <strong>Buying OTE against the trend.</strong> In a downtrend, a
            pullback into the lower part of a small rally is a sell zone, not a
            buy. The trend picks the direction; OTE only picks the price.
          </li>
          <li>
            <strong>Keeping the trade when price closes below the leg&apos;s
            start.</strong> If price falls through 100%, the leg has failed. The
            stop belongs beyond that level, not somewhere inside the band.
          </li>
          <li>
            <strong>Treating 70.5% as exact.</strong> It is a reference line in a
            zone. Price turning at 66% or 75% is the same idea.
          </li>
        </ul>
      </ContentSection>

      <TermFaq faq={FAQ} />

      <ContentSection id="app" title="OTE in the app">
        <p>
          The {SITE.name} glossary defines OTE so you can follow any reading
          that mentions it, and every term in an analysis links to its
          definition. On Premium&apos;s extended analysis the same logic sits
          in the plan: each target must be at least 1.5 times the risk, and
          when price at market is too far from the level that would prove the
          idea wrong, the plan uses a pullback entry closer to that level
          instead of shrinking the stop. The decision stays with you.
        </p>
      </ContentSection>

      <RelatedTerms current={SLUG} />
    </ContentPage>
  );
}

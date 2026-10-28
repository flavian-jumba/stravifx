import type { Metadata } from "next";
import { ContentPage, ContentSection } from "@/components/ContentPage";
import { RelatedTerms, TermFaq, TermFigure } from "@/components/glossary/TermParts";
import { definedTermSchema, faqSchema, GLOSSARY_PATH, glossaryHref } from "@/lib/glossary";
import { SITE } from "@/lib/site";

const SLUG = "confluence";
const PATH = glossaryHref(SLUG);

export const metadata: Metadata = {
  title: "Confluence in Trading: When the Reasons Add Up",
  description:
    "Confluence is several independent reasons pointing at one trade. How to count them honestly, why two signals from the same data are one, and what it can't do.",
  alternates: { canonical: PATH },
};

const DEFINITION =
  "Confluence is when several independent reasons point to the same trade at the same price, for example an order block inside a discount zone just after a liquidity sweep. It works as a filter: more confluence means fewer trades, not guaranteed winners, and two signals built from the same data count as one reason.";

const FAQ = [
  {
    q: "How many confluences do I need?",
    a: "There is no proven number. Many traders use two or three independent reasons as a minimum, but the right count depends on the setup and is something to test in your own journal. Requiring more always means fewer trades; whether it means better ones is what you are testing.",
  },
  {
    q: "Is confluence the same as confirmation?",
    a: "They overlap, and traders use the words loosely. Confluence usually means reasons that line up at one price before you enter. Confirmation usually means something that happens at that price to trigger the entry, such as a candle closing back inside after a sweep, or a change of character on a lower timeframe.",
  },
  {
    q: "Do more confluences mean a higher win rate?",
    a: "Not necessarily. We found no reliable published evidence that a given number of confluences produces a given win rate. More filters remove some bad trades and some good ones. Your own tracked results are the only fair test.",
  },
  {
    q: "Do indicators count as confluence?",
    a: "They can, but most common indicators (RSI, stochastic, MACD) are calculated from the same closing prices, so they tend to agree with each other. Count them together as one momentum reason, not three.",
  },
];

export default function ConfluencePage() {
  return (
    <ContentPage
      eyebrow="Glossary · Execution"
      title="Confluence"
      breadcrumbs={[
        { name: "Glossary", href: GLOSSARY_PATH },
        { name: "Confluence", href: PATH },
      ]}
      schema={[definedTermSchema(SLUG, "Confluence", DEFINITION), faqSchema(FAQ)]}
      answer={<p>{DEFINITION}</p>}
    >
      <TermFigure
        src="/glossary/confluence.svg"
        alt="A falling price leg drawn over a dealing range. Below the 50% line is the discount half. Price dips through a shaded order block in the discount half and just below an earlier low, marked as a liquidity sweep, then turns up. Three labels point at the same area: discount, order block and sweep."
        caption="Three different kinds of reason meet at one price: where it is (discount), what is there (an order block) and what just happened (a sweep)."
      />

      <ContentSection id="independent" title="Independent reasons, not the same reason twice">
        <p>
          Confluence only adds information when each reason could have been
          wrong on its own. A simple way to check is to sort every reason into
          a family and count one per family:
        </p>
        <ul>
          <li>
            <strong>Direction:</strong>{" "}
            <a href={glossaryHref("market-structure")}>market structure</a> on
            your timeframe and the one above it.
          </li>
          <li>
            <strong>Location:</strong> a zone such as an{" "}
            <a href={glossaryHref("order-block")}>order block</a>,{" "}
            <a href={glossaryHref("supply-demand-zone")}>demand zone</a>,{" "}
            <a href={glossaryHref("fair-value-gap")}>fair value gap</a> or the{" "}
            <a href={glossaryHref("premium-discount")}>discount</a> half of the
            range.
          </li>
          <li>
            <strong>Liquidity:</strong> a{" "}
            <a href={glossaryHref("liquidity-sweep")}>sweep</a> of the stops
            beyond an obvious high or low.
          </li>
          <li>
            <strong>Momentum:</strong> indicators such as RSI, MACD or
            stochastic, which are all built from recent closes.
          </li>
        </ul>
        <p>
          Several tools in one family tell you the same thing more loudly. An
          order block, a fair value gap and the 62% retracement all landing on
          one area are a well-marked location, which is useful, but it is
          still one reason: where. RSI and stochastic both oversold is one
          reason: momentum.
        </p>
      </ContentSection>

      <ContentSection id="example" title="A worked example">
        <p>
          A 1-hour EUR/USD buy idea. The prices are an illustration, not real
          data. A trader lists six reasons:
        </p>
        <ol>
          <li>The 4-hour chart is making higher highs and higher lows.</li>
          <li>Price is in the discount half of the last up-leg (below 1.0880).</li>
          <li>A bullish order block sits at 1.0850–1.0860.</li>
          <li>A fair value gap overlaps it at 1.0855–1.0865.</li>
          <li>Price just swept the equal lows at 1.0845 and closed back above.</li>
          <li>RSI and stochastic are both oversold.</li>
        </ol>
        <p>
          Sorted into families: direction (1), location (2, 3 and 4), liquidity
          (5) and momentum (6). That is four independent reasons, not six. Four
          is still a well-supported idea; the point is to know what you actually
          have. If the 4-hour trend had been down, the other five would be
          pointing at a counter-trend trade, however many there were.
        </p>
        <p>
          The confluence also gives the plan its levels: entry inside the
          zone, <a href={glossaryHref("invalidation")}>invalidation</a> on a
          close below the swept low, the{" "}
          <a href={glossaryHref("stop-loss")}>stop</a> a buffer under it, and
          the <a href={glossaryHref("take-profit")}>targets</a> at the highs
          above.
        </p>
      </ContentSection>

      <ContentSection id="variants" title="What traders disagree on">
        <ul>
          <li>
            <strong>A minimum count.</strong> Some courses demand three or more
            confluences for every trade; others treat the higher-timeframe
            direction as the only must-have and everything else as optional.
          </li>
          <li>
            <strong>What counts.</strong> Some include session times, round
            numbers or news; others count only what is on the chart.
          </li>
          <li>
            <strong>Confluence vs confirmation.</strong> Some use the words for
            the same thing; others keep confluence for the reasons and
            confirmation for the trigger.
          </li>
        </ul>
        <p>
          {SITE.name} treats confluence as a filter on whether a setup exists
          at all, and treats the higher-timeframe direction as a separate check,
          because a clean setup against the bigger trend is a common way a
          well-built trade still loses.
        </p>
      </ContentSection>

      <ContentSection id="why" title="Why it matters">
        <p>
          A single reason is easy to find on any chart. Requiring several
          independent ones cuts the number of trades you take, and that is the
          main benefit: fewer impulsive entries. It doesn&apos;t make a trade
          safe. Different methods can agree on a price and all be wrong
          together, so the stop and the position size still do the protecting.
        </p>
      </ContentSection>

      <ContentSection id="mistakes" title="Common mistakes">
        <ul>
          <li>
            <strong>Counting the same reason several times.</strong> Three
            momentum indicators are one opinion.
          </li>
          <li>
            <strong>Looking for confluence after deciding.</strong> If you
            already want the trade, you&apos;ll find reasons. Write down the
            reasons for and against before you decide.
          </li>
          <li>
            <strong>Treating confluence as a reason to risk more.</strong> A
            setup with five reasons can still hit its stop. Keep the risk per
            trade the same.
          </li>
          <li>
            <strong>Stacking filters until nothing qualifies.</strong> If no
            trade has passed your checklist in weeks, the checklist is the
            problem.
          </li>
        </ul>
      </ContentSection>

      <TermFaq faq={FAQ} />

      <ContentSection id="app" title="Confluence in the app">
        <p>
          {SITE.name} is built to produce a setup only when enough evidence
          lines up, and to say plainly when it doesn&apos;t. Each analysis
          lists the signals it found under &quot;Why this setup&quot;, so you
          can count them yourself and see which family each one belongs to.
          The confidence score reflects how strong that evidence is; it is not
          a probability of profit. The journal then tracks every setup to its
          target or its stop, so you can see over time how setups like yours
          actually turn out.
        </p>
      </ContentSection>

      <RelatedTerms current={SLUG} />
    </ContentPage>
  );
}

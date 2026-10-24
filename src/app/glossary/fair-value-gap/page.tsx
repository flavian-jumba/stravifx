import type { Metadata } from "next";
import { ContentPage, ContentSection } from "@/components/ContentPage";
import { RelatedTerms, TermFaq, TermFigure } from "@/components/glossary/TermParts";
import { definedTermSchema, faqSchema, GLOSSARY_PATH, glossaryHref } from "@/lib/glossary";
import { SITE } from "@/lib/site";

const SLUG = "fair-value-gap";
const PATH = glossaryHref(SLUG);

export const metadata: Metadata = {
  title: "Fair Value Gap (FVG): The 3-Candle Gap Explained",
  description:
    "A fair value gap is the space between candle 1's high and candle 3's low (or the reverse) after a fast move. How to mark it, what filled means, and an example.",
  alternates: { canonical: PATH },
};

const DEFINITION =
  "A fair value gap (FVG) is a gap inside a three-candle move: the middle candle moves so fast that the first candle's high and the third candle's low don't overlap.";

const FAQ = [
  {
    q: "Is a fair value gap the same as an imbalance?",
    a: "Mostly, yes. Imbalance and inefficiency are other names for it. Some traders keep imbalance for any thin, one-sided stretch of price and fair value gap for the strict three-candle gap, but in everyday use they mean the same thing.",
  },
  {
    q: "Does a fair value gap always get filled?",
    a: "No. Many gaps are revisited, which is why traders watch them, but some are never touched again, especially in a strong trend. Treat an unfilled gap as a place price may come back to, not a promise that it will.",
  },
  {
    q: "What does filled mean, exactly?",
    a: "Traders use it loosely. A full fill means price has traded right through the gap. A partial fill means it has traded into it but not through it. Many watch the halfway point, which ICT teaching calls consequent encroachment, as the level where a gap is half filled.",
  },
  {
    q: "Is a fair value gap the same as a weekend gap?",
    a: "No. A weekend gap is a jump between one candle's close and the next candle's open, with no trading in between. A fair value gap forms while the market is open: price did trade through it, just quickly and mostly in one direction.",
  },
];

export default function FairValueGapPage() {
  return (
    <ContentPage
      eyebrow="Glossary · Zones"
      title="Fair Value Gap (FVG)"
      breadcrumbs={[
        { name: "Glossary", href: GLOSSARY_PATH },
        { name: "Fair Value Gap (FVG)", href: PATH },
      ]}
      schema={[definedTermSchema(SLUG, "Fair Value Gap (FVG)", DEFINITION), faqSchema(FAQ)]}
      answer={
        <p>
          {DEFINITION} Price went through that space mostly one way, so
          traders watch it as an area it may come back to.
        </p>
      }
    >
      <TermFigure
        src="/glossary/fair-value-gap.svg"
        alt="Three candles in a row. The middle one is a large up candle. A gold box spans the space between the high of the first candle's wick and the low of the third candle's wick, labelled bullish fair value gap, with a dashed midpoint line labelled 50%."
        caption="A bullish fair value gap: the first candle's high and the third candle's low don't overlap, leaving a gap that only the fast middle candle traded through."
      />

      <ContentSection id="what" title="How to mark one">
        <p>
          Look at any three candles in a row and compare the outer two. The
          middle candle doesn&apos;t matter except as the cause.
        </p>
        <ul>
          <li>
            <strong>Bullish FVG:</strong> the third candle&apos;s low is above
            the first candle&apos;s high. The gap runs from candle 1&apos;s high
            (bottom) to candle 3&apos;s low (top).
          </li>
          <li>
            <strong>Bearish FVG:</strong> the third candle&apos;s high is below
            the first candle&apos;s low. The gap runs from candle 3&apos;s high
            (bottom) to candle 1&apos;s low (top).
          </li>
        </ul>
        <p>
          Use the wicks, not the bodies. If the wicks of candle 1 and candle 3
          touch or overlap, there is no gap, however big the middle candle is.
          Gaps on higher timeframes are fewer and usually watched more
          closely.
        </p>
      </ContentSection>

      <ContentSection id="use" title="How traders use it">
        <ul>
          <li>
            <strong>As an entry zone.</strong> In an uptrend, a pullback into a
            bullish gap is a place to look for a buy, with the stop below the
            gap or below the swing low that started the move.
          </li>
          <li>
            <strong>As a target.</strong> An unfilled gap behind price is
            somewhere price may return to. This is part of what ICT teaching
            calls internal range liquidity, against the outer highs and lows
            covered on the{" "}
            <a href={glossaryHref("buy-side-sell-side-liquidity")}>
              buy-side / sell-side liquidity
            </a>{" "}
            page.
          </li>
          <li>
            <strong>As proof of a strong move.</strong> A gap shows the move
            was one-sided. Many traders only trust an{" "}
            <a href={glossaryHref("order-block")}>order block</a> or a{" "}
            <a href={glossaryHref("break-of-structure")}>break of structure</a>{" "}
            when the move away left one.
          </li>
        </ul>
        <p>
          There is no agreed rule for when a gap stops counting. Some traders
          drop it after the first touch, some at the 50% line, some only once
          a candle closes beyond its far side. Pick one and keep it.
        </p>
      </ContentSection>

      <ContentSection id="example" title="A worked example">
        <p>
          A 4-hour gold (XAU/USD) chart. The prices are an illustration, not
          real data.
        </p>
        <ul>
          <li>
            <strong>The gap:</strong> candle 1 trades between 4,026.00 and
            4,031.00. Candle 2 rallies from 4,028.00 to 4,066.00. Candle 3
            trades between 4,047.00 and 4,071.00. Candle 3&apos;s low (4,047.00)
            is above candle 1&apos;s high (4,031.00), so there is a bullish gap
            from 4,031.00 to 4,047.00, $16.00 wide, with its midpoint at
            4,039.00.
          </li>
          <li>
            <strong>The trade idea:</strong> price pulls back into the gap and
            a 1-hour candle closes up at 4,043.00. A buy there, with the stop at
            4,023.00 (below candle 1&apos;s low, the start of the move), risks
            $20.00 an ounce. The target is the high from earlier in the week at
            4,083.00, $40.00 away: 1:2.
          </li>
          <li>
            <strong>The size:</strong> one standard lot of gold is 100 ounces,
            so a $20.00 stop costs $2,000 per lot. Risking $40 gives 0.02 lots;
            at the target the gain would be $80.
          </li>
          <li>
            <strong>If it fails:</strong> a 4-hour close below 4,031.00 means
            the gap has been run straight through. The buy idea is weaker, and
            the stop is close.
          </li>
        </ul>
        <p>
          The <a href="/tools/lot-size-calculator">lot size calculator</a> and{" "}
          <a href="/tools/pip-calculator">pip calculator</a> handle gold&apos;s
          100-ounce lot for you.
        </p>
      </ContentSection>

      <ContentSection id="why" title="Why it matters">
        <p>
          A fair value gap is one of the few smart-money ideas with an exact
          rule: two numbers either overlap or they don&apos;t. That makes it
          easy to mark the same way every time and to check later in a journal.
          It also explains why price so often comes back to an area it left in
          a hurry, before carrying on.
        </p>
      </ContentSection>

      <ContentSection id="mistakes" title="Common mistakes">
        <ul>
          <li>
            <strong>Measuring from the bodies.</strong> The gap is between
            wicks. Bodies make gaps look bigger than they are, and some
            aren&apos;t gaps at all.
          </li>
          <li>
            <strong>Buying every bullish gap.</strong> Small timeframes print
            gaps all day. Without a trend and a reason above it, a gap is just
            a fast candle.
          </li>
          <li>
            <strong>Expecting the gap to be filled exactly.</strong> Price may
            stop at the edge, the middle, or not come back at all. Plan for each
            before you enter.
          </li>
          <li>
            <strong>Confusing it with a weekend gap.</strong> A jump between
            Friday&apos;s close and Monday&apos;s open is a different thing,
            with no trading inside it.
          </li>
        </ul>
      </ContentSection>

      <TermFaq faq={FAQ} />

      <ContentSection id="app" title="Fair value gaps in the app">
        <p>
          {SITE.name}&apos;s hourly Swing signals check (Premium, monthly plans
          and longer) uses the strict three-candle rule on the 4-hour chart: a
          bullish gap when the last closed 4-hour candle&apos;s low is above
          the high of the candle two before it, and the mirror image for a
          bearish gap. It only looks at the gap formed by the three most recent
          closed 4-hour candles. A setup also needs the daily trend to agree, a{" "}
          <a href={glossaryHref("liquidity-sweep")}>sweep</a> or break of
          structure, a strong 4-hour candle, and a 1-hour candle that closes
          inside the gap in the trade&apos;s direction. These are rules for
          reading a chart, not predictions; the decision stays with you.
        </p>
      </ContentSection>

      <RelatedTerms current={SLUG} />
    </ContentPage>
  );
}

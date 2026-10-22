import type { Metadata } from "next";
import { ContentPage, ContentSection } from "@/components/ContentPage";
import { RelatedTerms, TermFaq, TermFigure } from "@/components/glossary/TermParts";
import { definedTermSchema, faqSchema, GLOSSARY_PATH, glossaryHref } from "@/lib/glossary";
import { SITE } from "@/lib/site";

const SLUG = "retest";
const PATH = glossaryHref(SLUG);

export const metadata: Metadata = {
  title: "Retest in Trading: Break and Retest Explained",
  description:
    "A retest is price returning to a level it just broke to see if it holds from the other side. When it counts, when it fails, and a worked EUR/USD example.",
  alternates: { canonical: PATH },
};

const DEFINITION =
  "A retest is price returning to a level it has just broken, to see whether that level now holds from the other side.";

const FAQ = [
  {
    q: "Does every breakout get retested?",
    a: "No. Many strong breaks never come back to the level, and waiting for a retest means missing those trades. That is the trade-off: a retest entry gives a tighter stop and a clearer invalidation, and a break entry makes sure you are in. Neither is right every time.",
  },
  {
    q: "How close does price have to come for a retest?",
    a: "There is no exact rule. Price rarely touches the level to the pip; it may stop a few pips short or wick a few pips through. What matters more is the close: a retest holds while candles keep closing on the new side of the level.",
  },
  {
    q: "What does a failed retest mean?",
    a: "If price comes back and closes back through the level, on the old side, the break has failed. In StraviFX's terms the break no longer counts, and a trade planned on it should be closed or not taken. A failed breakout is often followed by a fast move the other way, because the traders who bought the break are now stopped out.",
  },
  {
    q: "Is a retest the same as a pullback?",
    a: "A retest is a particular kind of pullback: one that comes back to the exact level that was broken. A pullback in a trend can stop anywhere. The difference matters for planning, because the broken level gives the retest a natural place for the stop.",
  },
];

export default function RetestPage() {
  return (
    <ContentPage
      eyebrow="Glossary · Structure"
      title="Retest"
      breadcrumbs={[
        { name: "Glossary", href: GLOSSARY_PATH },
        { name: "Retest", href: PATH },
      ]}
      schema={[definedTermSchema(SLUG, "Retest", DEFINITION), faqSchema(FAQ)]}
      answer={
        <p>
          {DEFINITION} Old resistance may become support, and old support may
          become resistance. Entering on a retest usually means a tighter stop
          than chasing the break, at the cost of missing breaks that never
          come back.
        </p>
      }
    >
      <TermFigure
        src="/glossary/retest.svg"
        alt="Diagram of price touching a dashed resistance level twice from below, then closing above it, falling back to touch the level from above, and moving higher. A grey line below the level marks where the stop goes."
        caption="A retest: after a close above the level, price comes back to it from above and holds. A close back below the level would mean the retest failed."
      />

      <ContentSection id="how" title="How a retest works">
        <p>
          A retest has three parts, in order:
        </p>
        <ol>
          <li>
            <strong>A level.</strong> Usually a{" "}
            <a href={glossaryHref("swing-high-swing-low")}>swing high or low</a>,
            or the edge of a{" "}
            <a href={glossaryHref("range-consolidation")}>range</a>.
          </li>
          <li>
            <strong>A break.</strong> A candle closes beyond the level. In the{" "}
            {SITE.name} glossary a wick alone doesn&apos;t count; the close
            does. A close above a swing high in an uptrend is a{" "}
            <a href={glossaryHref("break-of-structure")}>break of structure</a>.
          </li>
          <li>
            <strong>The return.</strong> Price comes back to the level from
            the new side. If candles keep closing on that new side, the
            retest has held. If one closes back through, it has failed.
          </li>
        </ol>
        <p>
          The idea behind it is a change of roles: traders who missed the
          break may buy at the level they watched, and sellers who were
          defending it may be closing out. Whether that happens on any given
          chart is never certain, which is why the close, not the touch,
          decides.
        </p>
      </ContentSection>

      <ContentSection id="example" title="A worked example">
        <p>
          A trader with a $1,000 account risks 1% ($10) per trade. EUR/USD
          has topped at 1.0900 twice, then a 1-hour candle closes at 1.0915.
          The prices are an illustration, not real data. Both plans use the
          same stop, 1.0885 (15 pips under the level), and the same target,
          1.0965.
        </p>
        <ul>
          <li>
            <strong>Chasing the break:</strong> buy at 1.0915. The stop is 30
            pips away and the target 50 pips, a 1:1.67 reward-to-risk. At $10
            a pip per standard lot, $10 of risk over 30 pips is 0.033 lots,
            rounded down to 0.03.
          </li>
          <li>
            <strong>Buying the retest:</strong> price dips to 1.0902 and the
            candle closes at 1.0905, still above the level. The trader buys
            at that close, 1.0905. The
            stop is 20 pips away and the target 60 pips, 1:3. The same $10 of
            risk now buys 0.05 lots.
          </li>
          <li>
            <strong>If the retest fails:</strong> a 1-hour close below 1.0900
            means the break no longer counts. The retest buyer is out near
            the stop; a trader who was still waiting simply doesn&apos;t
            enter.
          </li>
        </ul>
        <p>
          Check numbers like these with the{" "}
          <a href="/tools/lot-size-calculator">lot size calculator</a> and
          the <a href="/tools/risk-reward-calculator">risk reward
          calculator</a>.
        </p>
      </ContentSection>

      <ContentSection id="why" title="Why it matters">
        <p>
          The broken level gives a retest a built-in invalidation point. The
          stop goes just beyond it, which is usually closer than a stop under
          the whole breakout move. A closer stop means a bigger position for
          the same money at risk, or the same position for less risk, and a
          better reward-to-risk to the same target.
        </p>
      </ContentSection>

      <ContentSection id="mistakes" title="Common mistakes">
        <ul>
          <li>
            <strong>Calling a retest before there was a break.</strong> If no
            candle closed beyond the level, price returning to it is just
            another test of the same level.
          </li>
          <li>
            <strong>Entering on the touch, before the close.</strong> A
            candle that touches the level can still close back through it.
            Waiting for the close is slower, and safer.
          </li>
          <li>
            <strong>Putting the stop right on the level.</strong> Retests
            often overshoot by a few pips. Leave room beyond the level and
            size the position for that distance.
          </li>
          <li>
            <strong>Expecting every break to come back.</strong> The strongest
            moves often don&apos;t. Decide in advance whether you trade the
            break, the retest or both.
          </li>
        </ul>
      </ContentSection>

      <TermFaq faq={FAQ} />

      <ContentSection id="app" title="Retests in the app">
        <p>
          A {SITE.name} trade plan gives one entry, one stop and two targets.
          When the read describes a break, check whether the entry sits at
          the broken level or at today&apos;s price: they are two different
          plans with different stops. The read is analysis, not a signal to
          trade; the decision stays with you.
        </p>
      </ContentSection>

      <RelatedTerms current={SLUG} />
    </ContentPage>
  );
}

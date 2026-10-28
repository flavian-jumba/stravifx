import type { Metadata } from "next";
import { ContentPage, ContentSection } from "@/components/ContentPage";
import { RelatedTerms, TermFaq, TermFigure } from "@/components/glossary/TermParts";
import { definedTermSchema, faqSchema, GLOSSARY_PATH, glossaryHref } from "@/lib/glossary";
import { SITE } from "@/lib/site";

const SLUG = "invalidation";
const PATH = glossaryHref(SLUG);

export const metadata: Metadata = {
  title: "Invalidation: When a Trade Idea Is Proven Wrong",
  description:
    "Invalidation is the price, condition or time that proves a trade idea wrong. How it differs from the stop loss, what to do before entry, with a worked example.",
  alternates: { canonical: PATH },
};

const DEFINITION =
  "Invalidation is the price or condition that proves a trade idea wrong, whatever happens afterwards. You decide it before entering: for a buy, usually a candle close below the swing low the idea rests on. The stop loss is the order that acts on it, placed a little beyond it.";

const FAQ = [
  {
    q: "Is invalidation the same as a stop loss?",
    a: "No. Invalidation is part of the analysis: the point where the reason for the trade is gone. The stop loss is the order at your broker that gets you out. It usually sits a small buffer beyond the invalidation level, so a quick poke through doesn't close the trade.",
  },
  {
    q: "Price closed beyond my invalidation but didn't reach my stop. What now?",
    a: "If your rule says a close beyond the level ends the idea, close the trade at the market. You'll usually lose less than the full stop. Holding on because the stop wasn't touched means trading a reason that no longer exists.",
  },
  {
    q: "Can I re-enter after a setup is invalidated?",
    a: "Only as a new trade, with a new reason, a new invalidation level and a new size. The old plan is finished. Re-entering the same direction straight away to win the loss back is the usual way one loss becomes three.",
  },
  {
    q: "Can a trade be invalidated without hitting a price?",
    a: "Yes. Some ideas depend on a condition (a breakout should hold above the old range) or on time (a sharp move should follow quickly). If the condition fails or the time runs out, the idea is weaker even if no level broke. Write these rules down before the trade.",
  },
];

export default function InvalidationPage() {
  return (
    <ContentPage
      eyebrow="Glossary · Execution"
      title="Invalidation"
      breadcrumbs={[
        { name: "Glossary", href: GLOSSARY_PATH },
        { name: "Invalidation", href: PATH },
      ]}
      schema={[definedTermSchema(SLUG, "Invalidation", DEFINITION), faqSchema(FAQ)]}
      answer={<p>{DEFINITION}</p>}
    >
      <TermFigure
        src="/glossary/invalidation.svg"
        alt="A sell setup below a lower high. A dashed invalidation line runs along the lower high and the stop loss line sits a buffer above it. One candle wicks above the invalidation line and closes back below it, marked still valid. A later candle closes above the line, marked invalidated, before price reaches the stop."
        caption="A wick through the level leaves the idea intact; a close beyond it ends the idea. The stop sits a buffer further out as a hard limit."
      />

      <ContentSection id="vs-stop" title="Invalidation and the stop loss">
        <p>
          The two are often used as one word, but they do different jobs.
          Invalidation is a judgement about the chart: for a sell under a{" "}
          <a href={glossaryHref("swing-high-swing-low")}>lower high</a>, the
          idea is that sellers are in control, and a candle close above that
          high says they aren&apos;t. The{" "}
          <a href={glossaryHref("stop-loss")}>stop loss</a> is the order that
          caps the loss if you are wrong. It goes a buffer beyond the
          invalidation level, because price often{" "}
          <a href={glossaryHref("liquidity-sweep")}>sweeps</a> just past an
          obvious level before turning.
        </p>
        <p>
          So the order of work is: find the invalidation, put the stop beyond
          it, then size the trade from the stop distance with the{" "}
          <a href="/tools/lot-size-calculator">lot size calculator</a>.
        </p>
      </ContentSection>

      <ContentSection id="kinds" title="Three ways an idea is proven wrong">
        <ul>
          <li>
            <strong>Price.</strong> A close beyond the level the idea rests on:
            the swing low under a buy, the swing high over a sell, the far edge
            of an <a href={glossaryHref("order-block")}>order block</a>. This is
            the one most traders use, and the easiest to check.
          </li>
          <li>
            <strong>Condition.</strong> Something the idea needs fails to
            happen. A breakout trade expects price to hold outside the old{" "}
            <a href={glossaryHref("range-consolidation")}>range</a>; a close
            back inside says the breakout failed, even if the stop is far away.
          </li>
          <li>
            <strong>Time.</strong> Some ideas need to work quickly. A trader
            might write &quot;if price hasn&apos;t moved one risk-unit my way
            within ten candles, I close it&quot;. That is an example of a rule,
            not a recommended number; test any time limit on your own trades.
          </li>
        </ul>
      </ContentSection>

      <ContentSection id="before-entry" title="Invalidated before you get in">
        <p>
          A plan with a pending order can be proven wrong before it fills. If
          you are waiting to sell a pullback at 1.2820 and price closes above
          your invalidation level first, the setup is gone: cancel the order.
          It isn&apos;t a loss, because you never had the trade, and it
          isn&apos;t a reason to sell higher up instead.
        </p>
        <p>
          The opposite happens too. If price falls all the way to your target
          without ever coming up to your entry, the setup is missed. Selling
          late at a worse price is a different trade, with a worse ratio, and
          needs its own plan.
        </p>
      </ContentSection>

      <ContentSection id="example" title="A worked example">
        <p>
          A 4-hour GBP/USD sell. The prices are an illustration, not real data.
          The trend is down and the last lower high is 1.2850.
        </p>
        <ul>
          <li>
            <strong>The plan:</strong> sell limit at 1.2820. Invalidation: a
            4-hour close above 1.2850. Stop: 1.2865, 15 pips beyond it. Risk:
            45 pips.
          </li>
          <li>
            <strong>Case 1, a wick:</strong> after the fill, a candle spikes to
            1.2860 and closes at 1.2835. No close above 1.2850 and the stop
            wasn&apos;t touched, so the idea stands and the trade stays open.
          </li>
          <li>
            <strong>Case 2, a close:</strong> a candle closes at 1.2855. The
            idea is invalidated, though the stop at 1.2865 hasn&apos;t been
            hit. Closing at the market there loses 35 pips instead of 45.
          </li>
          <li>
            <strong>Case 3, a fast move:</strong> a news candle runs straight
            through 1.2865. The stop closes the trade before any candle can
            close, which is why the stop exists alongside the close rule.
          </li>
        </ul>
        <p>
          The close rule handles the ordinary case; the stop handles the case
          where waiting for a close would cost too much.
        </p>
      </ContentSection>

      <ContentSection id="variants" title="What traders disagree on">
        <ul>
          <li>
            <strong>Close or wick.</strong> Some treat any trade through the
            level as invalidation and let the stop sit right on it; others wait
            for a candle close, which avoids sweeps but needs a hard stop
            further out.
          </li>
          <li>
            <strong>Which timeframe&apos;s close.</strong> A close on the
            1-minute chart and a close on the 4-hour chart are very different
            events. Most traders use the timeframe the setup came from.
          </li>
        </ul>
        <p>
          {SITE.name} counts a level as broken only on a candle close, and
          puts the stop a buffer beyond the invalidation level so it caps the
          loss when price moves too fast to wait.
        </p>
      </ContentSection>

      <ContentSection id="why" title="Why it matters">
        <p>
          Deciding the invalidation before you enter is what stops a losing
          trade from being renegotiated into a bigger one. Without it, every
          move against you invites a new story about why the trade is still
          fine. With it, the question is simple: has the thing that would prove
          me wrong happened yet?
        </p>
      </ContentSection>

      <ContentSection id="mistakes" title="Common mistakes">
        <ul>
          <li>
            <strong>No invalidation, only a pip number.</strong> A 20-pip stop
            that doesn&apos;t sit beyond any level isn&apos;t tied to the idea;
            it is tied to how much you wanted to lose.
          </li>
          <li>
            <strong>Moving the level after entry.</strong> If the chart shows a
            new reason, that is a new trade. Moving the old level to keep the
            trade alive is the renegotiation this is meant to prevent.
          </li>
          <li>
            <strong>Ignoring a close beyond it</strong> because the stop
            wasn&apos;t hit. The stop is the last line, not the decision.
          </li>
          <li>
            <strong>Chasing an invalidated setup</strong> with a worse entry in
            the same direction.
          </li>
        </ul>
      </ContentSection>

      <TermFaq faq={FAQ} />

      <ContentSection id="app" title="Invalidation in the app">
        <p>
          Every {SITE.name} analysis says what would invalidate it: the
          execution ladder marks the stop as the invalidation, and
          Premium&apos;s instant market read has a &quot;What could
          invalidate this?&quot; line in plain English. The journal handles
          the before-entry case for you. If price reaches the stop, or TP1,
          before the entry fills, the setup is marked &quot;Setup
          invalidated&quot; and isn&apos;t counted as a loss or a win. The app
          never places or cancels orders at your broker; that stays with you.
        </p>
      </ContentSection>

      <RelatedTerms current={SLUG} />
    </ContentPage>
  );
}

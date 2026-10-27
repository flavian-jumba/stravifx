import type { Metadata } from "next";
import { ContentPage, ContentSection } from "@/components/ContentPage";
import { RelatedTerms, TermFaq, TermFigure } from "@/components/glossary/TermParts";
import { definedTermSchema, faqSchema, GLOSSARY_PATH, glossaryHref } from "@/lib/glossary";
import { SITE } from "@/lib/site";

const SLUG = "stop-loss";
const PATH = glossaryHref(SLUG);

const INVESTOR_GOV_STOPS =
  "https://www.investor.gov/additional-resources/news-alerts/alerts-bulletins/investor-bulletin-stop-stop-limit-trailing-stop";

export const metadata: Metadata = {
  title: "Stop Loss: Where It Goes and What It Can't Do",
  description:
    "A stop loss closes a trade at a set price to cap the loss. Where to place it, how it sets lot size, stop vs stop-limit vs trailing, and why gaps fill it worse.",
  alternates: { canonical: PATH },
};

const DEFINITION =
  "A stop loss is an order that closes your trade at a set price if the market moves against you, to cap the loss. It belongs where your trade idea is proven wrong, and its distance from the entry is what lets you size the position.";

const FAQ = [
  {
    q: "Does a stop loss guarantee my maximum loss?",
    a: "No. A standard stop becomes a market order when its price is reached, and fills at the next available price. In a fast market or a gap, that can be well past the stop. Some brokers sell guaranteed stops for a fee; check your broker's terms.",
  },
  {
    q: "How far should my stop loss be?",
    a: "As far as the chart says, not a fixed number of pips. Put it beyond the level whose break proves the idea wrong, plus a small buffer for normal noise. If that distance is too wide for your risk at the smallest lot size, skip the trade instead of tightening the stop.",
  },
  {
    q: "Should I use a mental stop instead of a real order?",
    a: "A mental stop depends on you watching the screen and acting at the worst moment. A resting order closes the trade even if you are away or hesitate. Most risk rules, including the 1% rule, assume a real order.",
  },
  {
    q: "When should I move my stop loss?",
    a: "Never further away. Moving it closer, for example to the entry once price has made progress, locks in less risk but gets you stopped out of more trades that would have worked. If you do it, decide the rule before the trade, not during it.",
  },
];

export default function StopLossPage() {
  return (
    <ContentPage
      eyebrow="Glossary · Execution"
      title="Stop loss"
      breadcrumbs={[
        { name: "Glossary", href: GLOSSARY_PATH },
        { name: "Stop loss", href: PATH },
      ]}
      schema={[definedTermSchema(SLUG, "Stop loss", DEFINITION), faqSchema(FAQ)]}
      answer={<p>{DEFINITION} Without one, your risk per trade is unknown.</p>}
    >
      <TermFigure
        src="/glossary/stop-loss.svg"
        alt="A buy trade with the entry marked above a swing low. The stop price line sits below the swing low, separated by a shaded buffer of about half the average candle range. Price later gaps down through the stop and the fill is marked below the stop price."
        caption="The stop goes beyond the swing low the idea depends on, plus a buffer for normal noise. A gap through it fills at the next price, not at the stop."
      />

      <ContentSection id="placement" title="Where a stop loss goes">
        <ol>
          <li>
            <strong>Find the level that proves you wrong.</strong> For a buy,
            usually the{" "}
            <a href={glossaryHref("swing-high-swing-low")}>swing low</a> or the{" "}
            <a href={glossaryHref("order-block")}>order block</a> the idea rests
            on. If price closes below it, the reason for the trade is gone.
          </li>
          <li>
            <strong>Add a buffer.</strong> Price often pokes just past obvious
            levels, where other traders&apos; stops sit (
            <a href={glossaryHref("liquidity")}>liquidity</a>). A buffer of
            about half the average candle range keeps you out of that noise.
          </li>
          <li>
            <strong>Then size the trade.</strong> Lots = money at risk ÷ (stop
            distance in pips × pip value per lot). The stop comes first; the{" "}
            <a href="/tools/lot-size-calculator">lot size</a> follows from it.
          </li>
        </ol>
      </ContentSection>

      <ContentSection id="types" title="Types of stop order">
        <ul>
          <li>
            <strong>Stop (stop-market).</strong> Becomes a market order when
            the stop price is reached. It will close the trade, but not
            necessarily at the stop price.
          </li>
          <li>
            <strong>Stop-limit.</strong> Becomes a limit order instead, so it
            won&apos;t fill worse than your limit, but in a fast move it may
            not fill at all and the trade stays open.
          </li>
          <li>
            <strong>Trailing stop.</strong> Follows price by a set distance as
            the trade moves your way, and stays put when it moves against you.
          </li>
          <li>
            <strong>Guaranteed stop.</strong> Offered by some brokers for a
            fee or a wider spread; it fills at your price even through a gap.
            Terms vary by broker.
          </li>
        </ul>
        <p>
          The US SEC&apos;s investor education site explains that once a stop
          price is reached, the order becomes a market order, and the price it
          fills at can be far from the stop price, depending on what prices
          are available at that moment (
          <a href={INVESTOR_GOV_STOPS} rel="noopener">
            Investor.gov: stop, stop-limit and trailing stop orders
          </a>
          ). It is written about shares, but forex and gold stop orders work
          the same way.
        </p>
      </ContentSection>

      <ContentSection id="variants" title="What traders disagree on">
        <ul>
          <li>
            <strong>Structure, fixed pips or ATR.</strong> A fixed 20-pip stop
            ignores the chart; an ATR multiple (1×, 1.5×, 2× the average range)
            adapts to volatility but ignores levels; a structure stop follows
            the chart. No multiple has been shown to be best.
          </li>
          <li>
            <strong>Wick or close.</strong> A resting order fires on a wick.
            Some traders only exit on a candle close beyond the level, which
            avoids sweeps but means the loss isn&apos;t capped in advance.
          </li>
          <li>
            <strong>Moving to break-even.</strong> Some move the stop to the
            entry after the first target or a set gain; others leave it so the
            trade has room. Both are choices, not rules.
          </li>
        </ul>
        <p>
          {SITE.name} uses structure first: beyond the level that invalidates
          the idea, plus a buffer, and never tighter just to make the numbers
          look better.
        </p>
      </ContentSection>

      <ContentSection id="example" title="A worked example">
        <p>
          A 1-hour gold (XAU/USD) chart, a buy. The prices are an illustration,
          not real data. On gold, one standard lot is 100 ounces and a pip is
          0.01, so a pip is worth $1 per lot.
        </p>
        <ul>
          <li>
            <strong>The levels:</strong> entry 4,050.00; the swing low the idea
            rests on is 4,041.00; the average candle range (ATR 14) is 6.00, so
            the buffer is 3.00 and the stop goes at 4,038.00.
          </li>
          <li>
            <strong>The size:</strong> the stop is 12.00 away, or 1,200 pips,
            which is $1,200 per lot. Risking 1% of a $6,000 account ($60) gives
            $60 ÷ $1,200 = 0.05 lots.
          </li>
          <li>
            <strong>If the stop fills at its price:</strong> the loss is 12.00 ×
            5 ounces = $60, as planned.
          </li>
          <li>
            <strong>If gold gaps down to 4,026.00 at the weekly open:</strong>{" "}
            the stop fills there, 24.00 below the entry, and the loss is $120,
            twice the plan.
          </li>
        </ul>
        <p>
          The stop did its job: it got you out. But it couldn&apos;t hold the
          price. That is why the risk per trade should be small enough that a
          loss twice the size still doesn&apos;t hurt the account.
        </p>
      </ContentSection>

      <ContentSection id="why" title="Why it matters">
        <p>
          The stop loss is the only part of a trade plan that makes risk
          measurable. With it, you know the loss before you enter and can size
          the position so it stays at 1% or 2% of the account. Without it, one
          bad trade can take a week of good ones, which is the most common way
          small accounts disappear.
        </p>
      </ContentSection>

      <ContentSection id="mistakes" title="Common mistakes">
        <ul>
          <li>
            <strong>No stop at all.</strong> &quot;I&apos;ll close it
            myself&quot; usually means closing it much later, much lower.
          </li>
          <li>
            <strong>A stop exactly on the level.</strong> The obvious low is
            where everyone&apos;s stops sit, and price often{" "}
            <a href={glossaryHref("liquidity-sweep")}>sweeps</a> it before
            turning. Add the buffer.
          </li>
          <li>
            <strong>Tightening the stop to afford a bigger lot.</strong> That
            moves it into normal noise. Keep the stop and trade a smaller lot,
            or skip the trade.
          </li>
          <li>
            <strong>Widening it when price gets close.</strong> This turns a
            planned loss into an unplanned one. The stop only ever moves in your
            favour.
          </li>
        </ul>
      </ContentSection>

      <TermFaq faq={FAQ} />

      <ContentSection id="app" title="Stop losses in the app">
        <p>
          Every {SITE.name} setup includes a stop loss with its distance in
          pips, and the lot size calculator in the app sizes the position from
          it. On Premium&apos;s extended analysis the stop goes just beyond the
          swing high or low, or the order block, whose break would prove the
          idea wrong, plus a buffer of about half the 14-candle average range
          (ATR). The journal then tracks each setup to its target or its stop,
          so losses stay on the record. The app never places the order; that
          is done at your broker, and the decision stays with you.
        </p>
      </ContentSection>

      <RelatedTerms current={SLUG} />
    </ContentPage>
  );
}

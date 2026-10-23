import type { Metadata } from "next";
import { ContentPage, ContentSection } from "@/components/ContentPage";
import { RelatedTerms, TermFaq, TermFigure } from "@/components/glossary/TermParts";
import { definedTermSchema, faqSchema, GLOSSARY_PATH, glossaryHref } from "@/lib/glossary";
import { SITE } from "@/lib/site";

const SLUG = "buy-side-sell-side-liquidity";
const PATH = glossaryHref(SLUG);

export const metadata: Metadata = {
  title: "Buy-Side vs Sell-Side Liquidity (BSL and SSL)",
  description:
    "Buy-side liquidity rests above price, sell-side liquidity below it. Why the names work that way, how to mark both pools on a chart, and how they set targets.",
  alternates: { canonical: PATH },
};

const DEFINITION =
  "Buy-side liquidity (BSL) is the pool of buy orders resting above price, mostly the stop losses of short sellers and breakout buy stops. Sell-side liquidity (SSL) is the mirror below price: buyers' stop losses and breakout sell stops.";

const FAQ = [
  {
    q: "Why is buy-side liquidity above price if it comes from sellers?",
    a: "Because a seller's stop loss is a buy order. Someone who is short closes the trade by buying, and their stop sits above the market. So the orders resting above price are buys, whoever placed them. The same logic puts buyers' stop losses, which are sell orders, below price.",
  },
  {
    q: "What does draw on liquidity mean?",
    a: "It is the pool you expect price to reach next. In an uptrend the nearest untouched buy-side liquidity above price is the usual draw; in a downtrend it is the sell-side liquidity below. It is a way of choosing a target, not a forecast that price will get there.",
  },
  {
    q: "What are internal and external liquidity?",
    a: "Terms from ICT-style trading. External range liquidity is the highs and lows at the edges of the current swing or range. Internal range liquidity is inside it, often gaps left by fast moves. This page and the StraviFX app work with the outer highs and lows.",
  },
  {
    q: "Is liquidity still there after price has taken it?",
    a: "Mostly not. Once price trades through a pool the stops there have been filled, so that level has less pull. The next untouched high or low becomes the more likely draw.",
  },
];

export default function BuySideSellSideLiquidityPage() {
  return (
    <ContentPage
      eyebrow="Glossary · Liquidity"
      title="Buy-side / sell-side liquidity"
      breadcrumbs={[
        { name: "Glossary", href: GLOSSARY_PATH },
        { name: "Buy-side / sell-side liquidity", href: PATH },
      ]}
      schema={[
        definedTermSchema(SLUG, "Buy-side / sell-side liquidity", DEFINITION),
        faqSchema(FAQ),
      ]}
      answer={
        <p>
          {DEFINITION} The names tell you which way a move may travel next.
        </p>
      }
    >
      <TermFigure
        src="/glossary/buy-side-sell-side-liquidity.svg"
        alt="Diagram of price between four shaded bands. Above price are two bands labelled BSL: equal highs and a prior high. Below price are two bands labelled SSL: a swing low and the previous day's low."
        caption="Buy-side liquidity (BSL) rests above price, at prior highs and equal highs. Sell-side liquidity (SSL) rests below it, at swing lows and the previous day's low."
      />

      <ContentSection id="names" title="Why the names point that way">
        <p>
          The names describe the orders, not the traders. A trader who is
          short exits by buying, so their stop loss is a buy order sitting
          above price. A breakout trader waiting to buy above a high uses a
          buy-stop entry in the same place. Together they make buy-side
          liquidity. Below price, buyers&apos; stop losses and breakout
          sellers&apos; entries are all sell orders: sell-side liquidity.
        </p>
        <p>
          The general idea, and the second meaning of the word that market
          liquidity is not, is on the{" "}
          <a href={glossaryHref("liquidity")}>liquidity</a> page. This page is
          about naming the two pools and using them.
        </p>
      </ContentSection>

      <ContentSection id="mark" title="How to mark BSL and SSL on a chart">
        <p>Start from the current price and mark the obvious levels each way:</p>
        <ul>
          <li>
            <strong>Old swing highs and lows</strong> that price hasn&apos;t
            traded back through since. Use confirmed{" "}
            <a href={glossaryHref("swing-high-swing-low")}>swing points</a>,
            not every bump.
          </li>
          <li>
            <strong>
              <a href={glossaryHref("equal-highs-equal-lows")}>
                Equal highs and equal lows
              </a>
            </strong>
            , where stops from several entries stack behind one flat edge.
          </li>
          <li>
            <strong>The previous day&apos;s and week&apos;s high and low</strong>
            , which most traders can see on any chart.
          </li>
          <li>
            <strong>The edges of a{" "}
              <a href={glossaryHref("range-consolidation")}>range</a></strong>
            , and round numbers near them.
          </li>
        </ul>
        <p>
          Levels price has already traded through are spent: the stops there
          have been filled. Mark them differently, or remove them, so the map
          shows only pools that are still there.
        </p>
      </ContentSection>

      <ContentSection id="example" title="A worked example">
        <p>
          A 1-hour gold (XAU/USD) chart with price at 4,020.00. The prices are
          an illustration, not real data.
        </p>
        <ul>
          <li>
            <strong>The map:</strong> buy-side liquidity at 4,045.00
            (yesterday&apos;s high) and 4,062.00 (two equal highs from earlier
            in the week). Sell-side liquidity at 4,003.00 (the last swing low)
            and 3,990.00 (the previous day&apos;s low).
          </li>
          <li>
            <strong>The trade idea:</strong> the trend is up, so the draw is
            buy-side. A buy at 4,020.00 with the stop at 3,996.00, below the
            swing low and its stops, risks $24.00 an ounce.
          </li>
          <li>
            <strong>Which pool to target:</strong> the first BSL pool, 4,045.00,
            is $25.00 away: a 1:1.04 risk-to-reward. The equal highs at
            4,062.00 are $42.00 away: 1:1.75. The map shows the nearer target
            barely pays for the risk.
          </li>
          <li>
            <strong>The size:</strong> one standard lot is 100 ounces, so a
            $24.00 stop costs $2,400 per lot. Risking $50 gives 0.02 lots
            (risk $48); at 4,062.00 the gain would be $84.
          </li>
        </ul>
        <p>
          The <a href="/tools/risk-reward-calculator">risk reward calculator</a>{" "}
          and <a href="/tools/lot-size-calculator">lot size calculator</a> do
          this arithmetic for gold and forex pairs.
        </p>
      </ContentSection>

      <ContentSection id="why" title="Why it matters">
        <p>
          A map of buy-side and sell-side liquidity answers two questions
          before a trade: where is price likely to travel (the nearest
          untouched pool in the trend&apos;s direction), and where are the
          stops that a sweep would take (including, possibly, yours). It turns
          a target from a guess into a level you can point at.
        </p>
      </ContentSection>

      <ContentSection id="mistakes" title="Common mistakes">
        <ul>
          <li>
            <strong>Mixing up the sides.</strong> Buy-side is above price,
            sell-side below, whoever placed the orders. Read the order, not
            the trader.
          </li>
          <li>
            <strong>Setting the target just past the pool.</strong> Price often
            reaches a pool, fills the orders and turns. A target a little
            before the level is more likely to be filled than one beyond it.
          </li>
          <li>
            <strong>Keeping spent levels on the map.</strong> A high that has
            already been swept has less pull. Look for the next untouched one.
          </li>
          <li>
            <strong>Putting your stop inside the opposite pool.</strong> A
            buyer&apos;s stop just under the obvious low is part of the
            sell-side liquidity a sweep would take. Give it room and size
            down.
          </li>
        </ul>
      </ContentSection>

      <TermFaq faq={FAQ} />

      <ContentSection id="app" title="Liquidity targets in the app">
        <p>
          {SITE.name}&apos;s hourly Swing signals check (Premium, monthly plans
          and longer) takes the highest high and the lowest low of the last 80
          four-hour candles as the buy-side and sell-side targets. For a buy
          idea it aims at that high if it is above price; if there isn&apos;t
          one, it sets the target at twice the risk instead. Sell ideas use
          the low the same way. These are rules for reading a chart, not
          predictions; the decision stays with you.
        </p>
      </ContentSection>

      <RelatedTerms current={SLUG} />
    </ContentPage>
  );
}

import type { Metadata } from "next";
import { ContentPage, ContentSection } from "@/components/ContentPage";
import { RelatedTerms, TermFaq, TermFigure } from "@/components/glossary/TermParts";
import { definedTermSchema, faqSchema, GLOSSARY_PATH, glossaryHref } from "@/lib/glossary";
import { SITE } from "@/lib/site";

const SLUG = "premium-discount";
const PATH = glossaryHref(SLUG);

export const metadata: Metadata = {
  title: "Premium and Discount Zones: Equilibrium Explained",
  description:
    "Premium and discount split a price range at its 50% midpoint, equilibrium. How to pick the range, the formula, and why a discount buy risks less for one target.",
  alternates: { canonical: PATH },
};

const DEFINITION =
  "Premium and discount split a price range in half: above the midpoint is premium (expensive), below it is discount (cheap), and the midpoint itself is equilibrium.";

const FAQ = [
  {
    q: "Is equilibrium the same as the 50% Fibonacci retracement?",
    a: "Yes. Equilibrium is the halfway point of the range, which is exactly where a Fibonacci tool drawn from the same swing low to swing high puts its 50% level. The names differ; the price is the same.",
  },
  {
    q: "Can you ever buy in premium?",
    a: "You can, and in a strong trend price may never pull back to discount. But a buy in premium pays up: with the stop below the range and the target at its high, the risk is large and the reward small. Many traders who buy in premium do it only when a smaller range inside it shows discount.",
  },
  {
    q: "Does price always return to equilibrium?",
    a: "No. Trending markets can stay on one side of the midpoint for a long time and form new ranges before the old midpoint is revisited. Equilibrium is a reference for where the cheap and expensive halves meet, not a target price is obliged to reach.",
  },
  {
    q: "Which timeframe do premium and discount apply to?",
    a: "Any timeframe, because they come from whatever range you draw. That is also the catch: a price can be in discount on the 4-hour range and in premium on the daily. Use the range on the timeframe you plan the trade on, and know where price sits on the one above it.",
  },
];

export default function PremiumDiscountPage() {
  return (
    <ContentPage
      eyebrow="Glossary · Zones"
      title="Premium and discount"
      breadcrumbs={[
        { name: "Glossary", href: GLOSSARY_PATH },
        { name: "Premium / discount", href: PATH },
      ]}
      schema={[definedTermSchema(SLUG, "Premium / discount", DEFINITION), faqSchema(FAQ)]}
      answer={
        <p>
          {DEFINITION} The rule that follows is to buy in discount and sell in
          premium, because a buy below the midpoint risks less for the same
          target than a buy above it.
        </p>
      }
    >
      <TermFigure
        src="/glossary/premium-discount.svg"
        alt="A bullish price leg from a swing low to a swing high, with a horizontal line halfway marked equilibrium 50%. The upper half is shaded and labelled premium, sell area; the lower half is labelled discount, buy area. Price pulls back into the lower half."
        caption="A dealing range from swing low to swing high, split at equilibrium. In a bullish range, a pullback into discount is where buys are looked for; premium is where they take profit."
      />

      <ContentSection id="how" title="How to mark premium and discount">
        <ol>
          <li>
            <strong>Pick the range.</strong> Use the swing low and swing high of
            the latest leg that did something meaningful: broke structure or
            swept liquidity. Smart-money traders call it the dealing range. Mark
            the ends from the wicks, as you would any{" "}
            <a href={glossaryHref("swing-high-swing-low")}>swing point</a>.
          </li>
          <li>
            <strong>Find the midpoint.</strong> Equilibrium = (range high +
            range low) ÷ 2.
          </li>
          <li>
            <strong>Read the halves.</strong> Above equilibrium is premium;
            below it is discount. In a bullish range you look for buys in
            discount. In a bearish range you look for sells in premium.
          </li>
        </ol>
        <p>
          When price makes a new high (or low) beyond the range, the range
          extends and the midpoint moves with it. Premium and discount are
          always relative to a range, never fixed prices.
        </p>
      </ContentSection>

      <ContentSection id="variants" title="What traders disagree on">
        <ul>
          <li>
            <strong>Which range.</strong> This is the big one, and it is a
            judgment call. Minor swings give a midpoint that means little; the
            same price can be discount on one timeframe and premium on another.
          </li>
          <li>
            <strong>Is halfway deep enough?</strong> Some traders split each
            half again, at 25% and 75%, and treat the outer quarters as
            &quot;deep&quot; discount or premium. Others wait for the 62–79%
            retracement band called the optimal trade entry.
          </li>
          <li>
            <strong>Whether it is a filter or a signal.</strong> Most treat it
            as a filter: a reason not to buy high, not a reason to buy low on
            its own.
          </li>
        </ul>
        <p>
          {SITE.name}&apos;s glossary uses the plain 50% split. Whatever range
          rule you choose, decide it before you look for the trade, not after,
          or you will always find a range that says &quot;discount&quot;.
        </p>
      </ContentSection>

      <ContentSection id="example" title="A worked example">
        <p>
          A 4-hour GBP/USD chart. The prices are an illustration, not real
          data.
        </p>
        <ul>
          <li>
            <strong>The range:</strong> a bullish leg from a swing low at
            1.2600 to a high at 1.2800 that broke structure. Equilibrium is
            (1.2800 + 1.2600) ÷ 2 = 1.2700. Above it is premium; below it,
            discount.
          </li>
          <li>
            <strong>The plan:</strong> buy, with the stop at 1.2585 (15 pips
            below the swing low) and the target at the range high, 1.2800.
          </li>
          <li>
            <strong>Buy A, in premium at 1.2760:</strong> 175 pips of risk for
            40 pips of reward, 1:0.23. On a $2,000 account risking 1% ($20),
            that is 0.01 lots (rounded down), risking $17.50 to make $4.
          </li>
          <li>
            <strong>Buy B, in discount at 1.2660:</strong> 75 pips of risk for
            140 pips of reward, 1:1.87. The same $20 buys 0.02 lots, risking
            $15 to make $28.
          </li>
        </ul>
        <p>
          Same market, same stop, same target. Only the entry changed, and it
          decided whether the trade was worth taking. The{" "}
          <a href="/tools/risk-reward-calculator">risk-reward calculator</a>{" "}
          and the <a href="/tools/lot-size-calculator">lot size calculator</a>{" "}
          do this math for any levels.
        </p>
      </ContentSection>

      <ContentSection id="why" title="Why it matters">
        <p>
          Premium and discount put a number on the old rule: buy low, sell
          high. Buy A above is a common beginner trade: the direction is
          right, but it buys after the move, risks a lot to make a little, and
          needs to win about four times out of five just to break even. Checking where price sits in its range takes a few seconds
          and filters out those trades.
        </p>
      </ContentSection>

      <ContentSection id="mistakes" title="Common mistakes">
        <ul>
          <li>
            <strong>Buying discount in a downtrend.</strong> In a bearish range,
            discount is where sellers take profit, not where you buy. The trend
            decides which half you trade from.
          </li>
          <li>
            <strong>Drawing the range from minor swings.</strong> A range made
            of two small wiggles gives a midpoint that means nothing. Use swings
            that broke{" "}
            <a href={glossaryHref("break-of-structure")}>structure</a> or took{" "}
            <a href={glossaryHref("liquidity")}>liquidity</a>.
          </li>
          <li>
            <strong>Treating discount as a signal.</strong> Price in discount
            only means it is cheap relative to the range. Wait for a reason to
            buy there, such as an{" "}
            <a href={glossaryHref("order-block")}>order block</a> or a{" "}
            <a href={glossaryHref("liquidity-sweep")}>sweep</a> of a low.
          </li>
          <li>
            <strong>Waiting forever.</strong> Strong trends often don&apos;t
            pull back that far. If price never reaches discount, there was no
            trade under your rules, and that is fine.
          </li>
        </ul>
      </ContentSection>

      <TermFaq faq={FAQ} />

      <ContentSection id="app" title="Premium and discount in the app">
        <p>
          The {SITE.name} glossary defines premium and discount so you can
          follow any reading that mentions them, and every term in an analysis
          links to its definition. The same idea sits inside Premium&apos;s
          extended analysis: each target must be at least 1.5 times the risk
          from entry, and when price at market is too far from the level that
          invalidates the idea, the plan uses a pullback entry closer to that
          level instead of shrinking the stop. The decision stays with you.
        </p>
      </ContentSection>

      <RelatedTerms current={SLUG} />
    </ContentPage>
  );
}

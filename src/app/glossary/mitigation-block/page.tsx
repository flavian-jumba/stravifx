import type { Metadata } from "next";
import { ContentPage, ContentSection } from "@/components/ContentPage";
import { RelatedTerms, TermFaq, TermFigure } from "@/components/glossary/TermParts";
import { definedTermSchema, faqSchema, GLOSSARY_PATH, glossaryHref } from "@/lib/glossary";
import { SITE } from "@/lib/site";

const SLUG = "mitigation-block";
const PATH = glossaryHref(SLUG);

export const metadata: Metadata = {
  title: "Mitigation Block: Meaning, Example and vs Breaker",
  description:
    "A mitigation block is a zone price returns to so trapped traders can exit near break-even. How it forms after a failed swing, how it differs from a breaker.",
  alternates: { canonical: PATH },
};

const DEFINITION =
  "A mitigation block is a zone price returns to so that traders caught on the wrong side can exit nearer to break-even.";

const FAQ = [
  {
    q: "What is the difference between a mitigation block and a breaker block?",
    a: "Both are order blocks that failed and flipped. In the stricter ICT reading, a breaker forms after price first made a new high or low beyond the previous one, taking the stops there, before it turned. A mitigation block forms when that swing falls short: price fails to make the new extreme, then breaks structure the other way.",
  },
  {
    q: "Is a mitigation block the same as a mitigated order block?",
    a: "No, though the names are confusingly close. A mitigated order block is a block that price has come back and traded into, and it can still be valid. A mitigation block is a block that failed: price closed through it, and the zone is now watched from the other side.",
  },
  {
    q: "Does a lower high on its own make a mitigation block?",
    a: "No. A lower high is only a warning. The block becomes a mitigation block when price also closes below the last higher low, breaking structure. Until that close, the old bullish block may still hold.",
  },
  {
    q: "Where does the stop go on a mitigation block trade?",
    a: "Beyond the far side of the zone, with a few pips of room, or beyond the failed swing if you want more room. If price closes back through the zone, the trapped traders were not the ones in control, and the idea is gone. Size the position for that distance.",
  },
];

export default function MitigationBlockPage() {
  return (
    <ContentPage
      eyebrow="Glossary · Zones"
      title="Mitigation block"
      breadcrumbs={[
        { name: "Glossary", href: GLOSSARY_PATH },
        { name: "Mitigation block", href: PATH },
      ]}
      schema={[definedTermSchema(SLUG, "Mitigation block", DEFINITION), faqSchema(FAQ)]}
      answer={
        <p>
          {DEFINITION} On a chart it is a failed order block: the swing that
          should have made a new high or low falls short, structure breaks the
          other way, and the old zone is retested from the other side.
        </p>
      }
    >
      <TermFigure
        src="/glossary/mitigation-block.svg"
        alt="Price rallies from a bullish order block but stops below the previous high, making a lower high. It then falls and closes below the order block. Later it rallies back up to the old block, now labelled bearish mitigation block, and turns down again."
        caption="A bearish mitigation block: the rally from the bullish order block fails to reach the previous high, then price closes below the block. On the return from below, the old buy zone is watched as a sell zone."
      />

      <ContentSection id="how" title="How a mitigation block forms">
        <p>
          It starts as an ordinary{" "}
          <a href={glossaryHref("order-block")}>order block</a>. Take a
          bullish one in an uptrend, the last down candle before a rally:
        </p>
        <ol>
          <li>
            Price rallies from the block but stops short of the previous high.
            That is a lower high: buyers tried to continue the trend and
            couldn&apos;t.
          </li>
          <li>
            Price falls and closes below the order block and the last higher
            low. Structure has broken against the trend (a{" "}
            <a href={glossaryHref("change-of-character")}>change of character</a>
            ). Everyone who bought the block is now losing.
          </li>
          <li>
            Price rallies back up into the old block from below. Many of
            those buyers sell there to get out near what they paid. The old
            buy zone is now a bearish mitigation block, a place to look for a
            sell.
          </li>
        </ol>
        <p>
          A bullish mitigation block is the mirror image: in a downtrend, a
          bearish block whose drop fails to make a new low, then price closes
          above it, then comes back down to it and holds. &quot;Mitigation&quot;
          refers to those trapped traders reducing their loss, which is the
          explanation the {SITE.name} glossary uses. It is a story about
          behaviour, not something you can see in the data, so judge the zone
          by what price does there.
        </p>
      </ContentSection>

      <ContentSection id="variants" title="Mitigation block or breaker block">
        <p>
          The two zones look alike, and many tools and courses use the names
          interchangeably. The stricter reading separates them by what happens
          before the failure:
        </p>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[480px] border-collapse text-left text-[0.9375rem]">
            <thead>
              <tr className="border-b border-white/10 text-fg">
                <th scope="col" className="py-3 pr-4 font-semibold">Before the block fails</th>
                <th scope="col" className="py-3 pr-4 font-semibold">Then</th>
                <th scope="col" className="py-3 font-semibold">Name</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/10">
                <td className="py-3 pr-4">Price makes a new high or low and sweeps the stops</td>
                <td className="py-3 pr-4">Closes through the block</td>
                <td className="py-3">
                  <a href={glossaryHref("breaker-block")}>Breaker block</a>
                </td>
              </tr>
              <tr>
                <td className="py-3 pr-4">Price falls short of the previous high or low</td>
                <td className="py-3 pr-4">Closes through the block</td>
                <td className="py-3">Mitigation block</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Two more meanings cause confusion. A &quot;mitigated&quot; order block
          usually means one that price has simply traded back into; it has
          not failed. And some writers use &quot;mitigation&quot; for any zone
          where large traders are said to settle earlier orders. This page uses
          the failed-swing version above, with the {SITE.name} glossary&apos;s
          explanation of why it can work. Whichever you use, note it in your
          journal, because the rules pick out different zones.
        </p>
      </ContentSection>

      <ContentSection id="example" title="A worked example">
        <p>
          A 4-hour EUR/USD chart. The prices are an illustration, not real
          data.
        </p>
        <ul>
          <li>
            <strong>The order block:</strong> in an uptrend, the last down
            candle before a rally trades between 1.0870 and 1.0885. The
            previous high is 1.0950.
          </li>
          <li>
            <strong>The failed swing:</strong> the rally stalls at 1.0930, 20
            pips short of 1.0950. That is a lower high, and no stops above
            1.0950 were taken.
          </li>
          <li>
            <strong>The break:</strong> price falls and closes at 1.0855,
            below the block&apos;s low of 1.0870, which was also the last higher
            low. The bullish block has failed, and 1.0870–1.0885 is now a
            bearish mitigation block.
          </li>
          <li>
            <strong>The trade idea:</strong> price rallies back into the zone.
            A sell at 1.0880, with the stop at 1.0893 (8 pips above the top of
            the zone), risks 13 pips. The target is the next swing low at
            1.0841, 39 pips away: a 1:3{" "}
            <a href="/tools/risk-reward-calculator">risk-to-reward</a>.
          </li>
          <li>
            <strong>The size:</strong> on a $1,000 account risking 1% ($10), 13
            pips at $10 a pip per standard lot is $130 per lot, so 0.07 lots
            (rounded down), risking $9.10.
          </li>
        </ul>
        <p>
          A stop above the failed high instead, at 1.0938, would be 58 pips:
          the same 39-pip target gives 1:0.67, and the size drops to 0.01 lots
          (risking $5.80). The
          tighter stop gives the better ratio but is hit more easily; a close
          back above 1.0885 ends the idea either way. The{" "}
          <a href="/tools/lot-size-calculator">lot size calculator</a> works
          out the size for any stop.
        </p>
      </ContentSection>

      <ContentSection id="why" title="Why it matters">
        <p>
          A mitigation block marks the moment a trend runs out of push. The
          failed swing shows buyers (or sellers) couldn&apos;t reach the last
          extreme, and the close through the block shows the zone they relied
          on no longer holds. That gives you two things: a reason to stop
          trading the old direction, and a defined level where a trade in the
          new direction is wrong.
        </p>
      </ContentSection>

      <ContentSection id="mistakes" title="Common mistakes">
        <ul>
          <li>
            <strong>Mixing it up with a mitigated block.</strong> A block that
            price has traded into is not a failed block. Only a close through
            it makes the flip.
          </li>
          <li>
            <strong>Acting on the lower high alone.</strong> Without the close
            below the last higher low, the uptrend is still intact and the old
            block can still hold.
          </li>
          <li>
            <strong>Calling the break on a wick.</strong> A wick through the
            block that closes back inside is a test or a{" "}
            <a href={glossaryHref("liquidity-sweep")}>sweep</a>, not a
            failure.
          </li>
          <li>
            <strong>Ignoring the bigger picture.</strong> A 15-minute
            mitigation block against a strong daily uptrend is a pullback until
            the higher timeframe says otherwise.
          </li>
          <li>
            <strong>Putting the stop inside the zone.</strong> Price often
            trades deep into the block before turning. The stop goes beyond its
            far side.
          </li>
        </ul>
      </ContentSection>

      <TermFaq faq={FAQ} />

      <ContentSection id="app" title="Mitigation blocks in the app">
        <p>
          The {SITE.name} glossary defines mitigation blocks so you can follow
          any reading that mentions one, and every term in an analysis links to
          its definition. The app doesn&apos;t hunt for mitigation blocks on
          its own. On Premium&apos;s extended analysis, the stop goes just
          beyond the swing point or order block whose break would prove the
          idea wrong, plus a buffer of about half the average candle range
          (ATR). The decision stays with you.
        </p>
      </ContentSection>

      <RelatedTerms current={SLUG} />
    </ContentPage>
  );
}

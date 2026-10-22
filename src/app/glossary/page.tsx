import type { Metadata } from "next";
import { ContentPage, ContentSection } from "@/components/ContentPage";
import { GLOSSARY, GLOSSARY_PATH, glossaryHref } from "@/lib/glossary";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Trading Glossary: Market Structure & SMC Terms",
  description:
    "Plain-English definitions of the trading terms StraviFX uses, starting with market structure, break of structure (BOS) and change of character (CHoCH).",
  alternates: { canonical: GLOSSARY_PATH },
};

/** Categories in the app's order, shown only once they have a live term. */
const CATEGORIES = (
  [
    "Structure",
    "Liquidity",
    "Zones",
    "Execution",
    "Risk",
    "Indicators",
  ] as const
).filter((category) => GLOSSARY.some((entry) => entry.category === category));

const termSetSchema = {
  "@context": "https://schema.org",
  "@type": "DefinedTermSet",
  name: `${SITE.name} trading glossary`,
  url: `${SITE.url}${GLOSSARY_PATH}`,
  hasDefinedTerm: GLOSSARY.map((entry) => ({
    "@type": "DefinedTerm",
    name: entry.term,
    url: `${SITE.url}${glossaryHref(entry.slug)}`,
  })),
};

export default function GlossaryPage() {
  return (
    <ContentPage
      eyebrow="Glossary"
      title="Trading glossary"
      breadcrumbs={[{ name: "Glossary", href: GLOSSARY_PATH }]}
      schema={[termSetSchema]}
      wide
      answer={
        <p>
          Plain-English definitions of the trading terms the {SITE.name} app
          uses in its analyses, starting with market structure. Each page gives
          a short definition, a diagram, a worked example, the conventions
          traders disagree on and the mistakes beginners make, so you can check
          a term the moment you meet it.
        </p>
      }
    >
      {CATEGORIES.map((category) => (
        <section key={category} aria-labelledby={`cat-${category}`}>
          <h2
            id={`cat-${category}`}
            className="mt-12 font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-fg-3 sm:text-xs"
          >
            {category}
          </h2>
          <ul className="mt-4 grid gap-4 md:grid-cols-3">
            {GLOSSARY.filter((entry) => entry.category === category).map(
              (entry) => (
                <li key={entry.slug}>
                  <a
                    href={glossaryHref(entry.slug)}
                    className="group flex h-full flex-col rounded-[28px] border border-white/10 bg-ink-2 p-6 transition-colors duration-300 hover:border-gold/50"
                  >
                    <span className="text-[1.25rem] font-semibold leading-[1.2] tracking-[-0.02em] text-fg">
                      {entry.term}
                    </span>
                    <span className="mt-4 text-[0.9375rem] leading-[1.6] text-fg-2">
                      {entry.short}
                    </span>
                    <span className="mt-auto pt-6 text-[0.9375rem] font-medium text-gold">
                      Read the definition{" "}
                      <span
                        aria-hidden="true"
                        className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </span>
                  </a>
                </li>
              ),
            )}
          </ul>
        </section>
      ))}

      <ContentSection id="order" title="Where to start">
        <p>Read the structure terms in order. Each one builds on the last.</p>
        <ol>
          <li>
            <a href={glossaryHref("market-structure")}>Market structure</a>: how
            to mark swing highs and lows and tell an uptrend, a downtrend and a
            range apart.
          </li>
          <li>
            <a href={glossaryHref("break-of-structure")}>
              Break of structure (BOS)
            </a>
            : what it looks like when a trend continues.
          </li>
          <li>
            <a href={glossaryHref("change-of-character")}>
              Change of character (CHoCH)
            </a>
            : the first warning that a trend may be ending, and how it differs
            from a market structure shift.
          </li>
        </ol>
      </ContentSection>

      <ContentSection id="conventions" title="How we define terms">
        <p>
          Many trading terms, especially the smart-money ones, have no official
          definition, and the pages you find in search often disagree. Where
          that happens, each page names the common versions and says which one{" "}
          {SITE.name} uses. One rule runs through all of them: a level counts as
          broken only when a candle closes beyond it, not when a wick pokes
          through.
        </p>
        <p>
          The definitions match the glossary inside the {SITE.name} app, so a
          term in your analysis means the same thing here. Diagrams are
          illustrations, not real prices.
        </p>
      </ContentSection>

      <ContentSection id="tools" title="Put the terms to work">
        <p>
          Structure tells you where a stop loss and a target make sense. The
          free <a href="/tools">trading calculators</a> turn those levels into
          numbers: the risk-to-reward ratio, the value of a pip and the lot size
          for your account.
        </p>
      </ContentSection>
    </ContentPage>
  );
}

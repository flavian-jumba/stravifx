import { SITE } from "@/lib/site";

/**
 * Glossary terms that have a live page. The definitions follow the StraviFX
 * app's glossary (`src/config/glossary.ts` in the app repo), so the site and
 * the app use the same words. Add a term here only when its page ships.
 */
export type GlossaryEntry = {
  slug: string;
  term: string;
  /** The category used in the app's glossary. */
  category: "Structure" | "Liquidity" | "Zones" | "Execution" | "Risk" | "Indicators";
  /** One sentence for the hub card and related-term lists. */
  short: string;
};

export const GLOSSARY_PATH = "/glossary";

export const GLOSSARY: ReadonlyArray<GlossaryEntry> = [
  {
    slug: "market-structure",
    term: "Market structure",
    category: "Structure",
    short:
      "The sequence of swing highs and lows a market prints: rising is bullish, falling is bearish, neither is a range.",
  },
  {
    slug: "break-of-structure",
    term: "Break of Structure (BOS)",
    category: "Structure",
    short:
      "A candle close beyond the last swing high or low in the direction of the trend. It signals continuation.",
  },
  {
    slug: "change-of-character",
    term: "Change of Character (CHoCH)",
    category: "Structure",
    short:
      "The first break against the trend: an uptrend closing below its last higher low, or a downtrend above its last lower high.",
  },
  {
    slug: "market-structure-shift",
    term: "Market Structure Shift (MSS)",
    category: "Structure",
    short:
      "The confirmed flip that can follow a CHoCH: a failed swing in the old direction, then a close beyond the next swing.",
  },
  {
    slug: "swing-high-swing-low",
    term: "Swing high / swing low",
    category: "Structure",
    short:
      "A candle whose high is above its neighbours, or whose low is below them. The pivots every structure reading is measured from.",
  },
  {
    slug: "higher-highs-higher-lows",
    term: "Higher highs / higher lows",
    category: "Structure",
    short:
      "The four swing labels (HH, HL, LH, LL) and what each combination says: uptrend, downtrend or range.",
  },
  {
    slug: "range-consolidation",
    term: "Range / consolidation",
    category: "Structure",
    short:
      "Price moving between a ceiling and a floor with no new highs or lows beyond them. A reason to wait, or to trade the edges.",
  },
  {
    slug: "retest",
    term: "Retest",
    category: "Structure",
    short:
      "Price coming back to a level it has just closed beyond, to see whether the level now holds from the other side.",
  },
  {
    slug: "liquidity",
    term: "Liquidity",
    category: "Liquidity",
    short:
      "Resting orders, mostly stop losses, that pool just beyond obvious highs, lows and round numbers. Price is often drawn toward them.",
  },
];

export function glossaryHref(slug: string) {
  return `${GLOSSARY_PATH}/${slug}`;
}

/** DefinedTerm schema for a term page; the text must match the visible answer. */
export function definedTermSchema(slug: string, name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name,
    description,
    url: `${SITE.url}${glossaryHref(slug)}`,
    inDefinedTermSet: `${SITE.url}${GLOSSARY_PATH}`,
  };
}

/** FAQPage schema for a visible FAQ. */
export function faqSchema(faq: ReadonlyArray<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

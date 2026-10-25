import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

/**
 * Every indexable page, with the date its content last changed in a way a
 * reader would notice (new section, rewritten copy, corrected facts).
 *
 * Bump `updated` only for such changes, never for restyles, refactors or
 * redeploys. Google stops trusting a sitemap's dates if they move without
 * real changes, and then ignores them even when a page does change.
 *
 * Google ignores `changefreq` and `priority`, so they are left out.
 */
const PAGES: ReadonlyArray<{ path: string; updated: string }> = [
  { path: "/", updated: "2026-10-15" },
  { path: "/privacy", updated: "2026-10-15" },
  { path: "/terms", updated: "2026-10-15" },
  { path: "/disclaimer", updated: "2026-10-15" },
  { path: "/delete-account", updated: "2026-10-15" },
  { path: "/tools", updated: "2026-10-19" },
  { path: "/tools/lot-size-calculator", updated: "2026-10-16" },
  { path: "/tools/pip-calculator", updated: "2026-10-17" },
  { path: "/tools/risk-reward-calculator", updated: "2026-10-18" },
  { path: "/glossary", updated: "2026-10-24" },
  { path: "/glossary/market-structure", updated: "2026-10-20" },
  { path: "/glossary/break-of-structure", updated: "2026-10-20" },
  { path: "/glossary/change-of-character", updated: "2026-10-20" },
  { path: "/glossary/market-structure-shift", updated: "2026-10-21" },
  { path: "/glossary/swing-high-swing-low", updated: "2026-10-21" },
  { path: "/glossary/higher-highs-higher-lows", updated: "2026-10-21" },
  { path: "/glossary/range-consolidation", updated: "2026-10-22" },
  { path: "/glossary/retest", updated: "2026-10-22" },
  { path: "/glossary/liquidity", updated: "2026-10-22" },
  { path: "/glossary/liquidity-sweep", updated: "2026-10-23" },
  { path: "/glossary/buy-side-sell-side-liquidity", updated: "2026-10-23" },
  { path: "/glossary/equal-highs-equal-lows", updated: "2026-10-23" },
  { path: "/glossary/order-block", updated: "2026-10-24" },
  { path: "/glossary/fair-value-gap", updated: "2026-10-24" },
  { path: "/glossary/breaker-block", updated: "2026-10-24" },
  { path: "/glossary/mitigation-block", updated: "2026-10-25" },
  { path: "/glossary/supply-demand-zone", updated: "2026-10-25" },
  { path: "/glossary/premium-discount", updated: "2026-10-25" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map(({ path, updated }) => ({
    url: path === "/" ? SITE.url : `${SITE.url}${path}`,
    lastModified: updated,
  }));
}

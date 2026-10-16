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
  { path: "/tools/lot-size-calculator", updated: "2026-10-16" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map(({ path, updated }) => ({
    url: path === "/" ? SITE.url : `${SITE.url}${path}`,
    lastModified: updated,
  }));
}

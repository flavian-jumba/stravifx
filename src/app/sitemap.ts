import type { MetadataRoute } from "next";
import { LEGAL_LINKS, SITE } from "@/lib/site";

/** Every indexable page. Add new routes here as they ship. */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: SITE.url,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...LEGAL_LINKS.map((link) => ({
      url: `${SITE.url}${link.href}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}

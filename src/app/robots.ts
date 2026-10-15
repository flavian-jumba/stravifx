import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

/**
 * Open to every crawler, AI search bots included (GPTBot, OAI-SearchBot,
 * ClaudeBot, PerplexityBot, Google-Extended): being read is how StraviFX gets
 * cited in AI answers. Only the post-payment page is kept out.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/learn/welcome",
    },
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}

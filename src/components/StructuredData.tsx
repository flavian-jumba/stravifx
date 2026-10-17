import { QUESTIONS } from "@/components/sections/Faq";
import { SITE } from "@/lib/site";

const ORG_ID = `${SITE.url}/#org`;
const SITE_ID = `${SITE.url}/#website`;
const APP_ID = `${SITE.url}/#app`;

/**
 * Schema.org graph for the homepage. It names StraviFX as one entity (the
 * company, the site, the Android app and the film) so Google and AI models
 * stop confusing it with similarly spelled brands, and it links the site to
 * the Play listing.
 */
const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": ORG_ID,
      name: SITE.name,
      alternateName: SITE.alternateNames,
      legalName: SITE.publisher.name,
      url: SITE.url,
      logo: {
        "@type": "ImageObject",
        // The square icon, not the wordmark: Google shows this logo on white,
        // where the white "Stravi" lettering would vanish.
        url: `${SITE.url}${SITE.icon512}`,
        width: 512,
        height: 512,
      },
      description: SITE.description,
      address: {
        "@type": "PostalAddress",
        addressLocality: SITE.publisher.city,
        addressCountry: SITE.publisher.country,
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: SITE.email.support,
        availableLanguage: ["en"],
      },
      sameAs: SITE.sameAs,
    },
    {
      "@type": "WebSite",
      "@id": SITE_ID,
      url: SITE.url,
      name: SITE.name,
      alternateName: SITE.alternateNames,
      inLanguage: "en",
      publisher: { "@id": ORG_ID },
    },
    {
      "@type": "MobileApplication",
      "@id": APP_ID,
      name: SITE.name,
      alternateName: SITE.alternateNames,
      url: SITE.url,
      installUrl: SITE.playListingUrl,
      downloadUrl: SITE.playListingUrl,
      operatingSystem: "Android",
      applicationCategory: "FinanceApplication",
      description:
        "AI chart analysis app. Photograph or upload any forex, gold, stock or crypto chart, or pick a live market, and get the market structure, a buy, sell or stand-aside call with a confidence score, entry, stop loss, two targets and a position size. Every setup is saved to a journal and tracked to its outcome.",
      featureList: [
        "AI chart analysis from a photo or screenshot",
        "Live market analysis without a screenshot",
        "Market structure, support and resistance",
        "Execution ladder: entry, stop loss and two take-profit targets",
        "Position size and lot size calculator",
        "Automatic trading journal with outcome tracking",
        "Hourly checks on EUR/USD, GBP/USD, USD/JPY, XAU/USD, GBP/JPY and AUD/USD",
        "Plain-English trading glossary",
      ],
      screenshot: [
        `${SITE.url}/screens/scan.webp`,
        `${SITE.url}/screens/result.webp`,
        `${SITE.url}/screens/plan.webp`,
        `${SITE.url}/screens/journal.webp`,
      ],
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Free to download, with optional subscriptions.",
      },
      publisher: { "@id": ORG_ID },
    },
    {
      "@type": "VideoObject",
      name: "StraviFX in 35 seconds",
      description:
        "How StraviFX turns any chart into a trade plan: scan, read the structure, make the call, plan every level, size the risk and keep score.",
      thumbnailUrl: `${SITE.url}${SITE.film.poster}`,
      contentUrl: `${SITE.url}${SITE.film.src}`,
      // Google wants a full ISO 8601 datetime with a timezone, not a bare date.
      uploadDate: "2026-10-10T00:00:00+03:00",
      duration: "PT35S",
      publisher: { "@id": ORG_ID },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE.url}/#faq`,
      mainEntity: QUESTIONS.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
  ],
};

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      // Escape "<" so no string in the graph can close the script tag.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(graph).replace(/</g, "\\u003c"),
      }}
    />
  );
}

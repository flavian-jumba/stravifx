/** Site-wide constants. Edit these, not the components. */

const PLAY_PACKAGE_ID = "com.flavian.fxp";
const PLAY_LISTING_URL = `https://play.google.com/store/apps/details?id=${PLAY_PACKAGE_ID}`;

export const SITE = {
  name: "StraviFX",
  /** Other spellings people search for. Feeds the Organization schema. */
  alternateNames: ["Stravifx", "StraviFX app", "Stravi FX"],
  /** Canonical origin, used for metadata and social cards. */
  url: "https://www.stravifx.app",
  tagline: "Any chart. A clear plan.",
  /** Search title for the homepage. Leads with what people type, not the slogan. */
  seoTitle: "StraviFX: AI Chart Analysis App for Forex, Gold & Crypto",
  description:
    "Point your camera at any forex, gold or crypto chart. StraviFX reads the structure, plans entry, stop and targets, and sizes your risk.",
  playPackageId: PLAY_PACKAGE_ID,
  /** The listing itself, for schema and anywhere a clean URL matters. */
  playListingUrl: PLAY_LISTING_URL,
  /**
   * Where the "Get the app" buttons go. The referrer shows up in Play Console
   * under acquisition, so website installs can be told apart from Play search.
   */
  playStoreUrl: `${PLAY_LISTING_URL}&referrer=utm_source%3Dwebsite%26utm_medium%3Dcta`,
  /** The wordmark (white "Stravi", gold "FX"), cropped to the letters. */
  logo: {
    src: "/brand/stravifx-wordmark.png",
    width: 960,
    height: 197,
  },
  /**
   * The gold "FX" on a black square. Used where a square mark is needed: the
   * app manifest and the Organization schema logo, which Google shows on white,
   * where the white wordmark would disappear.
   */
  icon512: "/brand/icon-512.png",
  film: {
    src: "/film/stravifx-film.mp4",
    poster: "/film/poster.jpg",
  },
  /** The addresses the app and its policies already publish. */
  email: {
    support: "stravifxapp@gmail.com",
    privacy: "privacy@stravifx.app",
  },
  /** Who runs StraviFX, as listed on Google Play. */
  publisher: {
    name: "Infinytech Solutions",
    city: "Nairobi",
    country: "KE",
  },
  /**
   * Official profiles elsewhere. Each one tells search engines and AI models
   * that these accounts and this site are the same StraviFX. Add every new
   * profile here (YouTube, X, TikTok, Instagram, LinkedIn, Product Hunt…).
   */
  sameAs: [PLAY_LISTING_URL],
} as const;

/** Root-relative so the same links work from the legal pages too. */
export const NAV_LINKS = [
  { label: "How it works", href: "/#how" },
  { label: "Features", href: "/#features" },
  { label: "Markets", href: "/#markets" },
  { label: "Learn", href: "/#learn" },
  { label: "Principles", href: "/#principles" },
  { label: "FAQ", href: "/#faq" },
] as const;

export const LEGAL_LINKS = [
  { label: "Privacy policy", href: "/privacy" },
  { label: "Terms of use", href: "/terms" },
  { label: "Risk disclaimer", href: "/disclaimer" },
  { label: "Delete your account", href: "/delete-account" },
] as const;

/**
 * The footer's Resources column. Only list pages that are live: add Tools,
 * Glossary and the Learn guides here as each hub ships, never before.
 */
export const RESOURCE_LINKS: ReadonlyArray<{ label: string; href: string }> = [
  { label: "All tools", href: "/tools" },
  { label: "Lot size calculator", href: "/tools/lot-size-calculator" },
  { label: "Pip calculator", href: "/tools/pip-calculator" },
  { label: "Risk reward calculator", href: "/tools/risk-reward-calculator" },
  { label: "Trading glossary", href: "/glossary" },
  { label: "Learn to trade", href: "/#learn" },
  { label: "Trading FAQ", href: "/#faq" },
];

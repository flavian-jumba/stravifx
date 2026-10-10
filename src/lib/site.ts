/** Site-wide constants. Edit these, not the components. */

export const SITE = {
  name: "Stravifx",
  /** Canonical origin, used for metadata and social cards. */
  url: "https://www.stravifx.app",
  tagline: "Any chart. A clear plan.",
  description:
    "Point your camera at a chart or pick a live market. Stravifx reads the structure, makes a call and lays out the trade: entry, stop, targets and position size.",
  /**
   * TODO: replace with the real listing, e.g.
   * https://play.google.com/store/apps/details?id=<your.package.id>
   * Until then this opens a Play Store search for the app name.
   */
  playStoreUrl: "https://play.google.com/store/search?q=Stravifx&c=apps",
  film: {
    src: "/film/stravifx-film.mp4",
    poster: "/film/poster.jpg",
  },
} as const;

export const NAV_LINKS = [
  { label: "How it works", href: "#how" },
  { label: "Features", href: "#features" },
  { label: "Markets", href: "#markets" },
  { label: "Learn", href: "#learn" },
  { label: "Principles", href: "#principles" },
  { label: "FAQ", href: "#faq" },
] as const;

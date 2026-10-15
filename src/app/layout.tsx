import type { Metadata, Viewport } from "next";
import { Figtree, IBM_Plex_Mono } from "next/font/google";
import localFont from "next/font/local";
import { SITE } from "@/lib/site";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

/** Departure Mono (SIL OFL) — the pixel numerals from the film. */
const departure = localFont({
  src: "./fonts/DepartureMono-Regular.woff2",
  variable: "--font-departure",
  weight: "400",
  display: "swap",
});

/**
 * Defaults for every route. The homepage sets its own canonical and social
 * card in page.tsx; inner pages only need a title and a canonical.
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.seoTitle,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  openGraph: {
    siteName: SITE.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
  // Let the page run under the notch; the nav and footer pad themselves back in.
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} ${plexMono.variable} ${departure.variable}`}
    >
      <body>
        {/* Without JavaScript the scroll-reveal never fires, so show everything. */}
        <noscript>
          <style>{`.reveal{opacity:1;translate:none}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}

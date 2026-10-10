import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.amyfoodjournal.com"),
  title: "Amy Food Journal — Simple and intuitive calorie tracking",
  description:
    "Track calories like writing in Apple Notes. Just type what you ate and Amy finds the calories and macros for you.",
  alternates: {
    canonical: "https://www.amyfoodjournal.com",
  },
  icons: {
    icon: [{ url: "/favicon-64.png", type: "image/png", sizes: "64x64" }],
  },
  openGraph: {
    title: "Amy Food Journal — Simple and intuitive calorie tracking",
    description:
      "Track calories like writing in Apple Notes. Just type what you ate and Amy finds the calories and macros for you.",
    url: "https://www.amyfoodjournal.com",
    siteName: "Amy Food Journal",
    type: "website",
    images: [
      {
        url: "https://www.amyfoodjournal.com/amy-social-card.webp",
        type: "image/webp",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amy Food Journal — Simple and intuitive calorie tracking",
    description:
      "Track calories like writing in Apple Notes. Just type what you ate and Amy finds the calories and macros for you.",
    images: ["https://www.amyfoodjournal.com/amy-social-card.webp"],
  },
};

/** The target ships `<meta name="viewport" content="width=device-width">` with no initial-scale. */
export const viewport: Viewport = {
  width: "device-width",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/inter-v20-latin-variable.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/source-serif-4-v14-latin-variable.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

import { Faq } from "@/components/sections/Faq";
import { Features } from "@/components/sections/Features";
import { FinalCta } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { HowItReads } from "@/components/sections/HowItReads";
import { Learn } from "@/components/sections/Learn";
import { Markets } from "@/components/sections/Markets";
import { Principles } from "@/components/sections/Principles";
import { Statement } from "@/components/sections/Statement";
import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import { StructuredData } from "@/components/StructuredData";
import { SITE } from "@/lib/site";

/** Social cards keep the slogan; the search title (from layout) leads with keywords. */
const socialTitle = `${SITE.name} — ${SITE.tagline}`;

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    title: socialTitle,
    description: SITE.description,
    url: "/",
    siteName: SITE.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: socialTitle,
    description: SITE.description,
  },
};

export default function Home() {
  return (
    <>
      <StructuredData />
      <SiteNav />
      <main>
        <Hero />
        <Statement />
        <HowItReads />
        <Features />
        <Markets />
        <Learn />
        <Principles />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}

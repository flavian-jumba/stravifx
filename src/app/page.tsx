import { Faq } from "@/components/sections/Faq";
import { Features } from "@/components/sections/Features";
import { FinalCta } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { HowItReads } from "@/components/sections/HowItReads";
import { Markets } from "@/components/sections/Markets";
import { Principles } from "@/components/sections/Principles";
import { Statement } from "@/components/sections/Statement";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <Statement />
        <HowItReads />
        <Features />
        <Markets />
        <Principles />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}

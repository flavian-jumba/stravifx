"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NAV_LINKS, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500",
        scrolled || open
          ? "border-white/10 bg-black/85 backdrop-blur-xl backdrop-saturate-150"
          : "border-transparent bg-transparent",
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-14 max-w-[1240px] items-center justify-between px-5 sm:px-8"
      >
        <a href="#top" aria-label="Stravifx home" className="shrink-0">
          <Image
            src="/brand/stravifx-logo.png"
            alt="Stravifx"
            width={480}
            height={189}
            priority
            className="h-8 w-auto"
          />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[0.8125rem] text-fg-2 transition-colors duration-300 hover:text-fg"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={SITE.playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gold px-4 py-1.5 text-[0.8125rem] font-semibold text-black transition-colors duration-300 hover:bg-gold-soft"
          >
            Get the app
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="grid size-9 place-items-center rounded-full text-fg md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={cn(
          "grid overflow-hidden transition-[grid-template-rows] duration-500 ease-out-expo md:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <ul className="min-h-0 px-5">
          {NAV_LINKS.map((link) => (
            <li key={link.href} className="border-t border-white/10">
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-4 text-2xl font-semibold tracking-tight text-fg"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li aria-hidden="true" className="h-6" />
        </ul>
      </div>
    </header>
  );
}

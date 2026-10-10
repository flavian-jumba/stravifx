"use client";

import { useState } from "react";
import { MenuIcon } from "./icons";
import type { NavLink } from "@/types/content";

const APP_STORE_URL =
  "https://apps.apple.com/us/app/amy-food-journal/id6753904989";

const NAV_LINKS: NavLink[] = [
  { label: "Is it accurate?", href: "/accuracy" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={{ paddingTop: "15px" }}>
      <div className="max-w-7xl mx-auto px-[60px] lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center shrink-0">
            <a href="/" className="inline-flex items-center" aria-label="Amy home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/_optimized/transparent_amy_logo.png.e315e529911e.w329.webp"
                alt="Amy"
                width={329}
                height={284}
                className="block w-[58px] sm:w-[64px] h-auto"
                srcSet="/_optimized/transparent_amy_logo.png.e315e529911e.w329.webp 329w"
                sizes="(max-width: 720px) calc(100vw - 2rem), 800px"
                decoding="async"
              />
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-gray-900 transition text-sm lg:text-base"
              >
                {link.label}
              </a>
            ))}
            <a
              href={APP_STORE_URL}
              target="_blank"
              className="bg-[#4200FF] text-white px-5 lg:px-6 rounded-full hover:bg-[#3600CC] transition text-sm lg:text-base whitespace-nowrap"
              style={{
                paddingTop: "calc(0.55rem + 3px)",
                paddingBottom: "calc(0.55rem + 3px)",
              }}
            >
              Download Amy
            </a>
          </div>

          <button
            id="mobile-menu-btn"
            type="button"
            className="md:hidden p-2"
            aria-label="Open menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <MenuIcon className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`${menuOpen ? "" : "hidden "}md:hidden bg-white border-t border-gray-100 px-[60px] pb-4`}
      >
        <div className="flex flex-col space-y-3 pt-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-gray-900 transition text-sm"
            >
              {link.label}
            </a>
          ))}
          <a
            href={APP_STORE_URL}
            target="_blank"
            className="bg-[#4200FF] text-white px-5 py-2.5 rounded-full hover:bg-[#3600CC] transition text-sm text-center whitespace-nowrap w-fit"
          >
            Download Amy
          </a>
        </div>
      </div>
    </nav>
  );
}

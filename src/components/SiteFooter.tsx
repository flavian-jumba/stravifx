import Image from "next/image";
import { LEGAL_LINKS, NAV_LINKS, RESOURCE_LINKS, SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-ink-1 pb-[calc(3.5rem+env(safe-area-inset-bottom))] pt-14">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <a href="/#top" aria-label="StraviFX home">
            <Image
              src={SITE.logo.src}
              alt="StraviFX"
              width={SITE.logo.width}
              height={SITE.logo.height}
              className="h-7 w-auto"
            />
          </a>
          <nav aria-label="Footer">
            <ul className="-my-2 flex flex-wrap gap-x-7">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block py-3 text-sm text-fg-2 transition-colors duration-300 hover:text-fg"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={SITE.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-3 text-sm text-fg-2 transition-colors duration-300 hover:text-fg"
                >
                  Google Play
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {RESOURCE_LINKS.length > 0 ? (
          <nav aria-labelledby="footer-resources" className="mt-10">
            <p
              id="footer-resources"
              className="font-mono text-[0.6875rem] uppercase tracking-[0.28em] text-fg-3"
            >
              Resources
            </p>
            <ul className="mt-2 flex flex-wrap gap-x-7">
              {RESOURCE_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block py-2 text-sm text-fg-2 transition-colors duration-300 hover:text-fg"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}

        <div className="mt-10 border-t border-white/10 pt-8 text-xs leading-[1.7] text-fg-3">
          <nav aria-label="Legal" className="mb-6">
            <ul className="-my-1 flex flex-wrap gap-x-6">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block py-1 text-fg-2 transition-colors duration-300 hover:text-fg"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${SITE.email.support}`}
                  className="block py-1 text-fg-2 transition-colors duration-300 hover:text-fg"
                >
                  Support
                </a>
              </li>
            </ul>
          </nav>
          <p className="max-w-[900px]">
            StraviFX provides AI-generated market analysis for information and
            education only. It is not financial advice and not a recommendation
            to buy or sell any instrument. Trading foreign exchange, stocks and
            crypto carries a high risk of loss and may not be suitable for you.
            Setups shown on this site are examples from the app and do not
            predict future results.
          </p>
          <p className="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-between">
            <span>
              © {new Date().getFullYear()} {SITE.name}. All rights reserved.
            </span>
            <span>
              Google Play and the Google Play logo are trademarks of Google LLC.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

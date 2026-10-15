import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import { LEGAL_LINKS } from "@/lib/site";

type LegalPageProps = {
  title: string;
  /** Human date, e.g. "28 August 2026". */
  updated: string;
  intro?: React.ReactNode;
  children: React.ReactNode;
};

/** The shared shell for /privacy, /terms, /disclaimer and /delete-account. */
export function LegalPage({ title, updated, intro, children }: LegalPageProps) {
  return (
    <>
      <SiteNav />
      <main className="bg-ink pb-24 pt-32 sm:pb-32 sm:pt-40">
        <article className="mx-auto max-w-[760px] px-6 sm:px-8">
          <p className="font-mono text-[0.6875rem] uppercase tracking-[0.28em] text-fg-3 sm:text-xs">
            Legal
          </p>
          <h1 className="mt-5 text-[clamp(2.25rem,7vw,3.75rem)] font-semibold leading-[1] tracking-[-0.04em]">
            {title}
          </h1>
          <p className="mt-5 font-mono text-xs text-fg-3">
            Last updated: {updated}
          </p>
          {intro ? (
            <div className="mt-8 text-[1.0625rem] leading-[1.6] text-fg-2 [&_p+p]:mt-4">
              {intro}
            </div>
          ) : null}
          <div className="mt-4">{children}</div>

          <nav
            aria-label="Other policies"
            className="mt-16 border-t border-white/10 pt-8"
          >
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-fg-2 underline-offset-4 transition-colors duration-300 hover:text-fg hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}

type LegalSectionProps = {
  id?: string;
  title: string;
  children: React.ReactNode;
};

export function LegalSection({ id, title, children }: LegalSectionProps) {
  return (
    <section
      id={id}
      className="mt-12 scroll-mt-24 text-[1rem] leading-[1.7] text-fg-2 [&_a]:text-gold [&_a]:underline-offset-4 hover:[&_a]:underline [&_h3]:mt-6 [&_h3]:text-[1.0625rem] [&_h3]:font-semibold [&_h3]:text-fg [&_li]:mt-2 [&_p]:mt-4 [&_strong]:font-semibold [&_strong]:text-fg [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:marker:text-fg-3"
    >
      <h2 className="text-[1.5rem] font-semibold leading-[1.2] tracking-[-0.02em] text-fg">
        {title}
      </h2>
      {children}
    </section>
  );
}

/** A highlighted notice, for the "no financial advice" warnings. */
export function LegalCallout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-8 rounded-[20px] border border-gold/30 bg-gold/[0.06] px-5 py-4 text-[1rem] leading-[1.6] text-fg">
      {children}
    </div>
  );
}

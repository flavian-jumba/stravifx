import { PlayBadge } from "@/components/PlayBadge";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export type Crumb = {
  name: string;
  /** Root-relative path, e.g. "/tools". */
  href: string;
};

type ContentPageProps = {
  /** Small label above the H1, e.g. "Tool" or "Glossary". */
  eyebrow: string;
  /** The page's only H1. */
  title: string;
  /**
   * Trail after Home, ending with this page. Drives the visible breadcrumbs
   * and the BreadcrumbList schema.
   */
  breadcrumbs: Crumb[];
  /** The 40–60-word direct answer for definition and guide pages. */
  answer?: React.ReactNode;
  /** Extra schema for this page (FAQPage, HowTo…). BreadcrumbList is added. */
  schema?: Record<string, unknown>[];
  /** Calculators need more room than prose. */
  wide?: boolean;
  children: React.ReactNode;
};

/**
 * The shared shell for tools, glossary terms, guides and market pages:
 * breadcrumbs, one H1, a risk note that links to the disclaimer and a
 * "Get StraviFX" call to action.
 */
export function ContentPage({
  eyebrow,
  title,
  breadcrumbs,
  answer,
  schema = [],
  wide = false,
  children,
}: ContentPageProps) {
  const trail: Crumb[] = [{ name: "Home", href: "/" }, ...breadcrumbs];
  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: crumb.href === "/" ? SITE.url : `${SITE.url}${crumb.href}`,
    })),
  };

  return (
    <>
      <SiteNav />
      <main className="bg-ink pb-24 pt-32 sm:pb-32 sm:pt-40">
        <JsonLd data={[breadcrumbList, ...schema]} />
        <article
          className={cn(
            "mx-auto px-6 sm:px-8",
            wide ? "max-w-[1040px]" : "max-w-[760px]",
          )}
        >
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-fg-3 sm:text-xs">
              {trail.map((crumb, i) => {
                const last = i === trail.length - 1;
                return (
                  <li key={crumb.href} className="flex items-center gap-x-2">
                    {last ? (
                      <span aria-current="page" className="text-fg-2">
                        {crumb.name}
                      </span>
                    ) : (
                      <>
                        <a
                          href={crumb.href}
                          className="transition-colors duration-300 hover:text-fg"
                        >
                          {crumb.name}
                        </a>
                        <span aria-hidden="true">/</span>
                      </>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>

          <p className="mt-8 font-mono text-[0.6875rem] uppercase tracking-[0.28em] text-gold sm:text-xs">
            {eyebrow}
          </p>
          <h1 className="mt-5 text-[clamp(2.25rem,7vw,3.75rem)] font-semibold leading-[1] tracking-[-0.04em]">
            {title}
          </h1>
          {answer ? (
            <div className="mt-8 text-[1.125rem] leading-[1.6] text-fg [&_p+p]:mt-4">
              {answer}
            </div>
          ) : null}

          <div className="mt-4">{children}</div>

          <RiskNote />
          <GetAppCta />
        </article>
      </main>
      <SiteFooter />
    </>
  );
}

type ContentSectionProps = {
  id?: string;
  title: string;
  children: React.ReactNode;
};

/** An H2 section with the same prose styling as the legal pages. */
export function ContentSection({ id, title, children }: ContentSectionProps) {
  return (
    <section
      id={id}
      className="mt-12 scroll-mt-24 text-[1rem] leading-[1.7] text-fg-2 [&_a]:text-gold [&_a]:underline-offset-4 hover:[&_a]:underline [&_h3]:mt-6 [&_h3]:text-[1.0625rem] [&_h3]:font-semibold [&_h3]:text-fg [&_li]:mt-2 [&_ol]:mt-4 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:marker:text-fg-3 [&_p]:mt-4 [&_strong]:font-semibold [&_strong]:text-fg [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:marker:text-fg-3"
    >
      <h2 className="text-[1.5rem] font-semibold leading-[1.2] tracking-[-0.02em] text-fg">
        {title}
      </h2>
      {children}
    </section>
  );
}

/** Schema.org JSON-LD, escaped so no string can close the script tag. */
export function JsonLd({ data }: { data: Record<string, unknown>[] }) {
  return (
    <>
      {data.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(item).replace(/</g, "\\u003c"),
          }}
        />
      ))}
    </>
  );
}

function RiskNote() {
  return (
    <aside
      aria-label="Risk note"
      className="mt-16 rounded-[20px] border border-gold/30 bg-gold/[0.06] px-5 py-4 text-[0.9375rem] leading-[1.6] text-fg-2"
    >
      Trading forex, gold, stocks and crypto carries a high risk of loss. This
      page is for education only and is not financial advice. Read the{" "}
      <a
        href="/disclaimer"
        className="text-gold underline-offset-4 hover:underline"
      >
        risk disclaimer
      </a>
      .
    </aside>
  );
}

function GetAppCta() {
  return (
    <section
      aria-labelledby="get-stravifx"
      className="mt-10 rounded-[28px] border border-white/10 bg-ink-2 p-6 sm:p-8"
    >
      <h2
        id="get-stravifx"
        className="text-[1.375rem] font-semibold leading-[1.2] tracking-[-0.02em]"
      >
        Get {SITE.name}
      </h2>
      <p className="mt-3 max-w-[520px] text-[1rem] leading-[1.6] text-fg-2">
        Point your camera at any chart and {SITE.name} reads the structure,
        plans the entry, stop and targets, and sizes your risk. Free to
        download on Android, with optional subscriptions.
      </p>
      <PlayBadge className="-ml-2 mt-4" />
    </section>
  );
}

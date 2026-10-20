import Image from "next/image";
import { ContentSection } from "@/components/ContentPage";
import { GLOSSARY, GLOSSARY_PATH, glossaryHref } from "@/lib/glossary";

type TermFigureProps = {
  src: string;
  alt: string;
  caption: string;
};

/** A diagram as a real <img> with alt text, so search engines can index it. */
export function TermFigure({ src, alt, caption }: TermFigureProps) {
  return (
    <figure className="mt-8">
      <Image
        src={src}
        alt={alt}
        width={720}
        height={400}
        sizes="(min-width: 800px) 712px, calc(100vw - 48px)"
        className="h-auto w-full rounded-[20px] border border-white/10"
      />
      <figcaption className="mt-3 text-sm leading-[1.6] text-fg-3">
        {caption}
      </figcaption>
    </figure>
  );
}

/** Links to the other live glossary terms, plus the hub. */
export function RelatedTerms({ current }: { current: string }) {
  const others = GLOSSARY.filter((entry) => entry.slug !== current);
  return (
    <ContentSection id="related" title="Related terms">
      <ul>
        {others.map((entry) => (
          <li key={entry.slug}>
            <a href={glossaryHref(entry.slug)}>{entry.term}</a>: {entry.short}
          </li>
        ))}
      </ul>
      <p>
        See every term in the <a href={GLOSSARY_PATH}>trading glossary</a>.
      </p>
    </ContentSection>
  );
}

/** A visible FAQ. Pair it with `faqSchema` from the same array. */
export function TermFaq({ faq }: { faq: ReadonlyArray<{ q: string; a: string }> }) {
  return (
    <ContentSection id="faq" title="Questions">
      {faq.map(({ q, a }) => (
        <div key={q}>
          <h3>{q}</h3>
          <p>{a}</p>
        </div>
      ))}
    </ContentSection>
  );
}

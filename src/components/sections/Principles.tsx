import { Reveal } from "@/components/Reveal";

const PRINCIPLES = [
  {
    title: "Rules, not predictions.",
    body: "Signals come from fixed rules. They describe what the rules detected. They are not instructions to trade.",
  },
  {
    title: "Confidence is not a promise.",
    body: "A confidence score reflects the evidence in one analysis. It says nothing about whether a trade will make money.",
  },
  {
    title: "Losses stay on the record.",
    body: "The journal tracks every saved setup to its outcome, including the ones that hit the stop.",
  },
];

/** The paper-mode section: the film's counter-world, used here for plain talk. */
export function Principles() {
  return (
    <section id="principles" className="bg-paper py-28 text-ink-text sm:py-40">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-8">
        <Reveal className="max-w-[900px]">
          <p className="font-mono text-[0.6875rem] uppercase tracking-[0.28em] text-ink-muted sm:text-xs">
            Principles
          </p>
          <h2 className="mt-5 text-[clamp(2rem,9.6vw,5.25rem)] font-semibold leading-[0.98] tracking-[-0.04em]">
            Straight with you.
          </h2>
          <p className="mt-7 max-w-[640px] text-[clamp(1.125rem,1.7vw,1.4375rem)] leading-[1.4] text-ink-muted">
            Trading is risky, and a tool that reads charts should say so. Here
            is what Stravifx will and won’t tell you.
          </p>
        </Reveal>

        <ol className="mt-16 grid gap-5 sm:mt-24 lg:grid-cols-3">
          {PRINCIPLES.map((principle, i) => (
            <li key={principle.title}>
              <Reveal className="h-full">
                <article className="flex h-full flex-col rounded-[28px] border border-paper-line bg-paper-card p-8 shadow-[0_12px_32px_rgba(0,0,0,0.05)] sm:rounded-[36px] sm:p-10">
                  <p className="font-pixel text-6xl leading-none text-ink-text sm:text-7xl">
                    0{i + 1}
                  </p>
                  <h3 className="mt-10 text-[1.75rem] font-semibold leading-[1.08] tracking-[-0.03em] sm:mt-16">
                    {principle.title}
                  </h3>
                  <p className="mt-3 text-[1.0625rem] leading-[1.5] text-ink-muted">
                    {principle.body}
                  </p>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal className="mt-10">
          <p className="inline-block rounded-xl bg-ink-text px-4 py-2.5 text-[1.0625rem] font-medium text-paper">
            AI-generated analysis. Not financial advice.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

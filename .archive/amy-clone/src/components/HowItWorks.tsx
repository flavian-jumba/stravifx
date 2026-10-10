import type { HowItWorksStep } from "@/types/content";

const STEPS: HowItWorksStep[] = [
  {
    number: "01",
    title: "Type what you ate",
    description: "Just jot down your meal like you would in a notes app",
  },
  {
    number: "02",
    title: "Amy will search",
    description: "Amy instantly finds the nutritional information",
  },
  {
    number: "03",
    title: "Your calories are magically calculated",
    description: "See your totals and macros automatically updated",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 sm:py-20 px-[60px] lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          {/* Left: App Screenshot */}
          <div className="shrink-0 w-full lg:w-auto flex justify-center lg:justify-start">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/_optimized/AmyHomeScreen.png.e8d45b397fd8.w800.webp"
              alt="Amy App Home Screen"
              className="w-[420px] lg:w-[400px] h-auto"
              srcSet="/_optimized/AmyHomeScreen.png.e8d45b397fd8.w480.webp 480w, /_optimized/AmyHomeScreen.png.e8d45b397fd8.w800.webp 800w, /_optimized/AmyHomeScreen.png.e8d45b397fd8.w1200.webp 1200w, /_optimized/AmyHomeScreen.png.e8d45b397fd8.w1475.webp 1475w"
              sizes="(max-width: 720px) calc(100vw - 2rem), 800px"
              decoding="async"
              width={1475}
              height={2724}
            />
          </div>

          {/* Right: Text Content */}
          <div className="flex-1 w-full">
            <h2
              className="text-4xl sm:text-5xl font-bold mb-16 text-gray-900"
              style={{ lineHeight: 1.3 }}
            >
              Calorie tracking
              <br />
              as easy as Apple Notes
            </h2>

            {/* Vertically Stacked Steps */}
            <div className="space-y-12 w-full">
              {STEPS.map((step, index) => {
                const isLast = index === STEPS.length - 1;
                return (
                  <div
                    key={step.number}
                    className={`relative ${isLast ? "" : "pb-12 "}w-full`}
                  >
                    <span className="absolute top-0 right-0 text-6xl font-bold text-gray-200">
                      {step.number}
                    </span>
                    <h3 className="text-3xl font-semibold mb-2.5 text-gray-900 relative z-10 pr-20 lg:pr-24">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-lg relative z-10 pr-20 lg:pr-24">
                      {step.description}
                    </p>
                    {!isLast && (
                      <div className="absolute left-0 right-0 bottom-0 border-b border-gray-200" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

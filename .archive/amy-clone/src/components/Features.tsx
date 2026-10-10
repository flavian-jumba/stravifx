import type { FeatureCard } from "@/types/content";

/**
 * Twelve feature cards, in the target's DOM order. The pastel backdrop is baked into each
 * image — there is no CSS background. Card 1 is the one asset the target serves unoptimised
 * (a raw PNG with no srcset and no intrinsic dimensions), reproduced as-is.
 */
const FEATURES: FeatureCard[] = [
  {
    image: {
      src: "/FeatureSectionAssets/Amy's thought process.png",
      alt: "Amy's thought process",
    },
    title: "Amy's thought process",
  },
  {
    image: {
      src: "/_optimized/FeatureSectionAssets/Calorie estimate bias.png.aa720448b236.w800.webp",
      srcSet:
        "/_optimized/FeatureSectionAssets/Calorie estimate bias.png.aa720448b236.w480.webp 480w, /_optimized/FeatureSectionAssets/Calorie estimate bias.png.aa720448b236.w800.webp 800w, /_optimized/FeatureSectionAssets/Calorie estimate bias.png.aa720448b236.w1200.webp 1200w, /_optimized/FeatureSectionAssets/Calorie estimate bias.png.aa720448b236.w1290.webp 1290w",
      alt: "Calorie estimate bias",
      width: 1290,
      height: 1358,
    },
    title: "Calorie estimate bias",
  },
  {
    image: {
      src: "/_optimized/FeatureSectionAssets/Apple Health Syncing.png.df8ed3b02469.w800.webp",
      srcSet:
        "/_optimized/FeatureSectionAssets/Apple Health Syncing.png.df8ed3b02469.w480.webp 480w, /_optimized/FeatureSectionAssets/Apple Health Syncing.png.df8ed3b02469.w800.webp 800w, /_optimized/FeatureSectionAssets/Apple Health Syncing.png.df8ed3b02469.w1200.webp 1200w, /_optimized/FeatureSectionAssets/Apple Health Syncing.png.df8ed3b02469.w1290.webp 1290w",
      alt: "Apple Health Syncing",
      width: 1290,
      height: 1358,
    },
    title: "Apple Health Syncing",
  },
  {
    image: {
      src: "/_optimized/FeatureSectionAssets/Easy editing.png.a4114adbd399.w800.webp",
      srcSet:
        "/_optimized/FeatureSectionAssets/Easy editing.png.a4114adbd399.w480.webp 480w, /_optimized/FeatureSectionAssets/Easy editing.png.a4114adbd399.w800.webp 800w, /_optimized/FeatureSectionAssets/Easy editing.png.a4114adbd399.w1200.webp 1200w, /_optimized/FeatureSectionAssets/Easy editing.png.a4114adbd399.w1290.webp 1290w",
      alt: "Easy editing",
      width: 1290,
      height: 1358,
    },
    title: "Easy editing",
  },
  {
    image: {
      src: "/_optimized/FeatureSectionAssets/Goals at a glance.png.9914de7800d9.w800.webp",
      srcSet:
        "/_optimized/FeatureSectionAssets/Goals at a glance.png.9914de7800d9.w480.webp 480w, /_optimized/FeatureSectionAssets/Goals at a glance.png.9914de7800d9.w800.webp 800w, /_optimized/FeatureSectionAssets/Goals at a glance.png.9914de7800d9.w1200.webp 1200w, /_optimized/FeatureSectionAssets/Goals at a glance.png.9914de7800d9.w1290.webp 1290w",
      alt: "Goals at a glance",
      width: 1290,
      height: 1358,
    },
    title: "Goals at a glance",
  },
  {
    image: {
      src: "/_optimized/FeatureSectionAssets/Home & Lock screen widgets.png.79aa27f67671.w800.webp",
      srcSet:
        "/_optimized/FeatureSectionAssets/Home & Lock screen widgets.png.79aa27f67671.w480.webp 480w, /_optimized/FeatureSectionAssets/Home & Lock screen widgets.png.79aa27f67671.w800.webp 800w, /_optimized/FeatureSectionAssets/Home & Lock screen widgets.png.79aa27f67671.w1200.webp 1200w, /_optimized/FeatureSectionAssets/Home & Lock screen widgets.png.79aa27f67671.w1290.webp 1290w",
      alt: "Home & Lock screen widgets",
      width: 1290,
      height: 1358,
    },
    title: "Home & Lock screen widgets",
  },
  {
    image: {
      src: "/_optimized/FeatureSectionAssets/Location tracking for accurate restaurant information.png.7dbd0b702d9a.w800.webp",
      srcSet:
        "/_optimized/FeatureSectionAssets/Location tracking for accurate restaurant information.png.7dbd0b702d9a.w480.webp 480w, /_optimized/FeatureSectionAssets/Location tracking for accurate restaurant information.png.7dbd0b702d9a.w800.webp 800w, /_optimized/FeatureSectionAssets/Location tracking for accurate restaurant information.png.7dbd0b702d9a.w1200.webp 1200w, /_optimized/FeatureSectionAssets/Location tracking for accurate restaurant information.png.7dbd0b702d9a.w1290.webp 1290w",
      alt: "Location tracking for accurate restaurant information",
      width: 1290,
      height: 1358,
    },
    title: "Location tracking for accurate restaurant information",
  },
  {
    image: {
      src: "/_optimized/FeatureSectionAssets/Nutrition breakdown.png.c2ae5a59b9b0.w800.webp",
      srcSet:
        "/_optimized/FeatureSectionAssets/Nutrition breakdown.png.c2ae5a59b9b0.w480.webp 480w, /_optimized/FeatureSectionAssets/Nutrition breakdown.png.c2ae5a59b9b0.w800.webp 800w, /_optimized/FeatureSectionAssets/Nutrition breakdown.png.c2ae5a59b9b0.w1200.webp 1200w, /_optimized/FeatureSectionAssets/Nutrition breakdown.png.c2ae5a59b9b0.w1290.webp 1290w",
      alt: "Nutrition breakdown",
      width: 1290,
      height: 1358,
    },
    title: "Nutrition breakdown",
  },
  {
    image: {
      src: "/_optimized/FeatureSectionAssets/Quick saved meals.png.58b0dea58e65.w800.webp",
      srcSet:
        "/_optimized/FeatureSectionAssets/Quick saved meals.png.58b0dea58e65.w480.webp 480w, /_optimized/FeatureSectionAssets/Quick saved meals.png.58b0dea58e65.w800.webp 800w, /_optimized/FeatureSectionAssets/Quick saved meals.png.58b0dea58e65.w1200.webp 1200w, /_optimized/FeatureSectionAssets/Quick saved meals.png.58b0dea58e65.w1290.webp 1290w",
      alt: "Quick saved meals",
      width: 1290,
      height: 1358,
    },
    title: "Quick saved meals",
  },
  {
    image: {
      src: "/_optimized/FeatureSectionAssets/Reminders.png.e85345802dd4.w800.webp",
      srcSet:
        "/_optimized/FeatureSectionAssets/Reminders.png.e85345802dd4.w480.webp 480w, /_optimized/FeatureSectionAssets/Reminders.png.e85345802dd4.w800.webp 800w, /_optimized/FeatureSectionAssets/Reminders.png.e85345802dd4.w1200.webp 1200w, /_optimized/FeatureSectionAssets/Reminders.png.e85345802dd4.w1290.webp 1290w",
      alt: "Reminders",
      width: 1290,
      height: 1358,
    },
    title: "Reminders",
  },
  {
    image: {
      src: "/_optimized/FeatureSectionAssets/Streaks and badges.png.2f8777165527.w800.webp",
      srcSet:
        "/_optimized/FeatureSectionAssets/Streaks and badges.png.2f8777165527.w480.webp 480w, /_optimized/FeatureSectionAssets/Streaks and badges.png.2f8777165527.w800.webp 800w, /_optimized/FeatureSectionAssets/Streaks and badges.png.2f8777165527.w1200.webp 1200w, /_optimized/FeatureSectionAssets/Streaks and badges.png.2f8777165527.w1600.webp 1600w",
      alt: "Streaks and badges",
      width: 3870,
      height: 4074,
    },
    title: "Streaks and badges",
  },
  {
    image: {
      src: "/_optimized/FeatureSectionAssets/Customized nutrition plan.png.e27010074000.w800.webp",
      srcSet:
        "/_optimized/FeatureSectionAssets/Customized nutrition plan.png.e27010074000.w480.webp 480w, /_optimized/FeatureSectionAssets/Customized nutrition plan.png.e27010074000.w800.webp 800w, /_optimized/FeatureSectionAssets/Customized nutrition plan.png.e27010074000.w1200.webp 1200w, /_optimized/FeatureSectionAssets/Customized nutrition plan.png.e27010074000.w1290.webp 1290w",
      alt: "Customized nutrition plan",
      width: 1290,
      height: 1358,
    },
    title: "Customized nutrition plan",
  },
];

export default function Features() {
  return (
    <section className="py-16 sm:py-20 px-[60px] lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4">
          Simple, but powerful💪
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
          Powerful features to help you reach your goals,
          <br className="hidden sm:inline" />
          without the complexity
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={feature.image.src}
                alt={feature.image.alt}
                className="w-[92%] h-auto rounded-3xl"
                srcSet={feature.image.srcSet}
                sizes={
                  feature.image.srcSet
                    ? "(max-width: 720px) calc(100vw - 2rem), 800px"
                    : undefined
                }
                decoding={feature.image.srcSet ? "async" : undefined}
                width={feature.image.width}
                height={feature.image.height}
              />
              <h3 className="text-xl font-semibold text-center mt-4">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import {
  InstagramIcon,
  TikTokIcon,
  TwitterIcon,
  YouTubeIcon,
} from "./icons";
import type { FooterColumn } from "@/types/content";

const COLUMNS: FooterColumn[] = [
  {
    heading: "Product",
    links: [
      { label: "Home", href: "/" },
      { label: "Pricing", href: "/pricing" },
      { label: "Accuracy", href: "/accuracy" },
      { label: "AI Connectors", href: "/connectors" },
      {
        label: "iOS App",
        href: "https://apps.apple.com/us/app/amy-food-journal/id6753904989",
        external: true,
      },
      {
        label: "Feedback",
        href: "https://feedback.amyfoodjournal.com/",
        external: true,
      },
    ],
  },
  {
    heading: "Guides",
    links: [
      { label: "Calorie Counting 101", href: "/blog/calorie-counting-for-beginners" },
      { label: "How to Track Macros", href: "/blog/how-to-track-macros" },
      { label: "Start a Food Journal", href: "/blog/how-to-start-food-journal" },
      { label: "Science of Journaling", href: "/blog/science-of-food-journaling" },
      { label: "Best Journal Apps", href: "/blog/best-food-journal-apps" },
      { label: "Free Templates", href: "/resources/food-journal-template" },
    ],
  },
  {
    heading: "Tools",
    links: [
      { label: "All Tools", href: "/tools" },
      { label: "Deficit Calculator", href: "/tools/calorie-deficit-calculator" },
      { label: "Daily Calorie Needs", href: "/tools/how-many-calories-should-i-eat" },
      { label: "Recipe Calories", href: "/tools/recipe-calorie-counter" },
      { label: "Chipotle Calories", href: "/tools/chipotle-calorie-calculator" },
      { label: "Taco Bell Calories", href: "/tools/taco-bell-calorie-calculator" },
      { label: "Starbucks Calories", href: "/tools/starbucks-calorie-guide" },
    ],
  },
  {
    heading: "Compare",
    links: [
      { label: "All Comparisons", href: "/vs" },
      { label: "Amy vs MyFitnessPal", href: "/vs/myfitnesspal" },
      { label: "Amy vs Cronometer", href: "/vs/cronometer" },
      { label: "Noom Alternatives", href: "/blog/noom-alternatives" },
      {
        label: "Free Tracking Apps",
        href: "/blog/free-calorie-tracking-apps-no-subscription",
      },
      { label: "AI Calorie Counters", href: "/blog/ai-calorie-counter-apps" },
    ],
  },
];

const COMPANY_LINKS = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Support", href: "mailto:support@amyfoodjournal.com" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

const SOCIALS = [
  { label: "Twitter", href: "https://x.com/raroque", Icon: TwitterIcon },
  {
    label: "Instagram",
    href: "https://www.instagram.com/chris.raroque/",
    Icon: InstagramIcon,
  },
  { label: "YouTube", href: "https://www.youtube.com/@raroque", Icon: YouTubeIcon },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@chris.raroque",
    Icon: TikTokIcon,
  },
];

const HEADING_CLASS =
  "font-semibold text-xs sm:text-sm uppercase tracking-wider mb-4 text-white/80";
const LIST_CLASS = "space-y-2 sm:space-y-3 text-sm sm:text-base";

/**
 * Footer links carry `transition` but no hover class. The target writes
 * `hover:text-opacity-80` there, which is a no-op: the links inherit their colour from
 * `footer.text-white`, and an inherited colour is already resolved, so changing
 * `--tw-text-opacity` on the child cannot repaint it. Verified against the live page.
 */
export default function Footer() {
  return (
    <footer
      className="text-white py-12 sm:py-16 px-4 sm:px-[60px] lg:px-8 rounded-t-[3rem]"
      style={{ backgroundColor: "#4200FF" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-10 sm:mb-12">
          {COLUMNS.map((column) => (
            <div key={column.heading}>
              <h3 className={HEADING_CLASS}>{column.heading}</h3>
              <ul className={LIST_CLASS}>
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      className="transition"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Company & Social */}
          <div>
            <h3 className={HEADING_CLASS}>Company</h3>
            <ul className={`${LIST_CLASS} mb-6`}>
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex gap-3">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  className="bg-white/20 p-2 rounded-lg hover:bg-white/30 transition"
                >
                  <Icon className="w-4 h-4" />
                  <span className="sr-only">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/30 pt-6 sm:pt-8">
          <p className="text-xs sm:text-sm text-white/80 text-center">
            Amy Food Journal is operated by Saint Yeti LLC.
          </p>
        </div>
      </div>
    </footer>
  );
}

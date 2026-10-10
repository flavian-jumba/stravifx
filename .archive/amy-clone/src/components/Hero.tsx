import { AppleIcon } from "./icons";

export default function Hero() {
  return (
    <section className="pt-8 sm:pt-12 pb-16 sm:pb-20 px-[60px] lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div
          className="flex flex-col-reverse lg:flex-row items-center"
          style={{ gap: "80px" }}
        >
          {/* Left Column: Text Content */}
          <div className="shrink-0 text-center lg:text-left flex flex-col items-center lg:items-start w-full lg:max-w-[600px]">
            {/*
              The target writes `leading-tight` here, but on its Tailwind v3 build the responsive
              `sm:`/`md:` text utilities out-order it. Computed on the target: 45px / 48px / 60px.
            */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight sm:leading-[1] md:leading-[1] w-full lg:max-w-none">
              Track calories like writing in Apple Notes.
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-10">
              Simple and intuitive calorie tracking. Just type what you ate and
              Amy finds the calories and macros for you.
            </p>
            <div className="inline-flex flex-col items-center">
              <a
                href="https://apps.apple.com/us/app/amy-food-journal/id6753904989"
                target="_blank"
                className="inline-flex items-center space-x-2 bg-[#4200FF] text-white pl-[27px] pr-8 py-4 rounded-full hover:bg-[#3600CC] transition transform hover:scale-105 mb-4"
              >
                <AppleIcon className="w-6 h-6" />
                <span className="font-medium">Download on iOS</span>
              </a>
              <p className="text-sm text-gray-500" style={{ marginTop: "-8px" }}>
                No credit card required
              </p>
            </div>
          </div>

          {/* Right Column: App Video */}
          <div className="shrink-0">
            <video
              className="rounded-3xl h-auto"
              style={{ maxWidth: "362px", width: "362px" }}
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/videos/polish_2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}

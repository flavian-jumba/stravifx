import {
  ExternalLinkIcon,
  InstagramIcon,
  PlayIcon,
  YouTubeIcon,
} from "./icons";
import type { InstagramPost, YouTubeVideo } from "@/types/content";

const SIZES = "(max-width: 720px) calc(100vw - 2rem), 800px";

const VIDEOS: YouTubeVideo[] = [
  {
    href: "https://www.youtube.com/watch?v=cpF_EtwB8tc",
    thumbnail: "/youtube/cpF_EtwB8tc.jpg",
    alt: "YouTube Video 1",
  },
  {
    href: "https://www.youtube.com/watch?v=ETK_cZLezs4",
    thumbnail: "/youtube/ETK_cZLezs4.jpg",
    alt: "YouTube Video 2",
  },
  {
    href: "https://www.youtube.com/watch?v=sWs_qAgEEdI&t=10s",
    thumbnail: "/youtube/sWs_qAgEEdI.jpg",
    alt: "YouTube Video 3",
  },
  {
    href: "https://www.youtube.com/watch?v=ghxgQaxZ9Kw&t=219s",
    thumbnail: "/youtube/ghxgQaxZ9Kw.jpg",
    alt: "YouTube Video 4",
  },
];

/** The middle post is intentionally wider (132px vs 110px), so it reads as taller. */
const POSTS: InstagramPost[] = [
  {
    href: "https://www.instagram.com/chris.raroque/reel/DQ9zkSxD9jy/",
    maxWidth: 110,
    image: {
      src: "/_optimized/SocialMediaCovers/InstaPost1.png.d5930f1f3869.w800.webp",
      srcSet:
        "/_optimized/SocialMediaCovers/InstaPost1.png.d5930f1f3869.w480.webp 480w, /_optimized/SocialMediaCovers/InstaPost1.png.d5930f1f3869.w800.webp 800w, /_optimized/SocialMediaCovers/InstaPost1.png.d5930f1f3869.w1080.webp 1080w",
      alt: "Instagram Post 1",
      width: 1080,
      height: 1920,
    },
  },
  {
    href: "https://www.instagram.com/chris.raroque/reel/DQaai-yDyN-/",
    maxWidth: 132,
    image: {
      src: "/_optimized/SocialMediaCovers/InstaPost2.png.4cb63984cb03.w800.webp",
      srcSet:
        "/_optimized/SocialMediaCovers/InstaPost2.png.4cb63984cb03.w480.webp 480w, /_optimized/SocialMediaCovers/InstaPost2.png.4cb63984cb03.w800.webp 800w, /_optimized/SocialMediaCovers/InstaPost2.png.4cb63984cb03.w1080.webp 1080w",
      alt: "Instagram Post 2",
      width: 1080,
      height: 1920,
    },
  },
  {
    href: "https://www.instagram.com/chris.raroque/reel/DQmul45DyEG/",
    maxWidth: 110,
    image: {
      src: "/_optimized/SocialMediaCovers/InstaPost3.png.5f4b08c7d5ee.w800.webp",
      srcSet:
        "/_optimized/SocialMediaCovers/InstaPost3.png.5f4b08c7d5ee.w480.webp 480w, /_optimized/SocialMediaCovers/InstaPost3.png.5f4b08c7d5ee.w800.webp 800w, /_optimized/SocialMediaCovers/InstaPost3.png.5f4b08c7d5ee.w1080.webp 1080w",
      alt: "Instagram Post 3",
      width: 1080,
      height: 1920,
    },
  },
];

export default function BehindTheScenes() {
  return (
    <section className="py-16 sm:py-20 px-[60px] lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-4xl sm:text-5xl font-bold mb-3 text-gray-900">
            Behind the scenes 👀
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Want to see me build Amy? I make videos documenting my progress 👀
          </p>
        </div>

        {/* Two Column Grid: YouTube and Instagram */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* YouTube Section */}
          <div className="bg-white rounded-[2.5rem] p-8 pt-[22px] sm:p-10 sm:pt-[30px] lg:p-12 lg:pt-[38px]">
            {/* Header with YouTube branding and Open button */}
            <div className="flex items-center justify-between mb-2 bg-white rounded-2xl p-2.5">
              <div className="flex items-center gap-1.5">
                <div className="w-9 h-9 bg-red-600 rounded-xl flex items-center justify-center shrink-0">
                  <YouTubeIcon className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="text-base font-bold text-gray-900">YouTube</h3>
                  <p className="text-xs text-gray-600">Chris Raroque</p>
                </div>
              </div>
              <a
                href="https://www.youtube.com/@raroque"
                target="_blank"
                className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition font-semibold flex items-center gap-1 text-base"
              >
                Open
                <ExternalLinkIcon className="w-4 h-4" />
              </a>
            </div>

            {/* 2x2 Video Grid */}
            <div className="grid grid-cols-2 gap-3">
              {VIDEOS.map((video) => (
                <a
                  key={video.href}
                  href={video.href}
                  target="_blank"
                  className="bg-gray-200 rounded-2xl aspect-video flex items-center justify-center overflow-hidden hover:opacity-90 transition relative group"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={video.thumbnail}
                    alt={video.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition">
                      <PlayIcon className="w-5 h-5 text-black" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Instagram Section */}
          <div className="bg-white rounded-[2.5rem] p-8 pt-[22px] sm:p-10 sm:pt-[30px] lg:p-12 lg:pt-[38px]">
            {/* Header with Instagram branding and Open button */}
            <div className="flex items-center justify-between mb-2 bg-white rounded-2xl p-2.5">
              <div className="flex items-center gap-1.5">
                <div className="w-9 h-9 bg-linear-to-br/srgb from-purple-600 via-pink-600 to-orange-500 rounded-xl flex items-center justify-center shrink-0">
                  <InstagramIcon className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="text-base font-bold text-gray-900">
                    Instagram
                  </h3>
                  <p className="text-xs text-gray-600">@chris.raroque</p>
                </div>
              </div>
              <a
                href="https://www.instagram.com/chris.raroque/"
                target="_blank"
                className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition font-semibold flex items-center gap-1 text-base"
              >
                Open
                <ExternalLinkIcon className="w-4 h-4" />
              </a>
            </div>

            {/* 1x3 Post Grid */}
            <div className="flex items-center justify-center gap-1.5">
              {POSTS.map((post) => (
                <a
                  key={post.href}
                  href={post.href}
                  target="_blank"
                  className="rounded-3xl overflow-hidden shrink-0 hover:opacity-90 hover:scale-105 transition-all duration-200"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.image.src}
                    alt={post.image.alt}
                    className="w-full h-auto object-contain"
                    style={{ maxWidth: `${post.maxWidth}px` }}
                    srcSet={post.image.srcSet}
                    sizes={SIZES}
                    decoding="async"
                    width={post.image.width}
                    height={post.image.height}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

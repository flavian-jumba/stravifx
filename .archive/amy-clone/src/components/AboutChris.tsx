import type { CatPhoto } from "@/types/content";

/** Five circular cat photos absolutely positioned inside a 350×502 box. */
const CAT_PHOTOS: CatPhoto[] = [
  {
    position: "top-0 left-0",
    image: {
      src: "/_optimized/amyCatPhotos/amy1.png.17cb8189d5d0.w297.webp",
      srcSet: "/_optimized/amyCatPhotos/amy1.png.17cb8189d5d0.w297.webp 297w",
      alt: "Amy",
      width: 297,
      height: 312,
    },
  },
  {
    position: "top-[174px] left-0",
    image: {
      src: "/_optimized/amyCatPhotos/amy2.png.110d2f58c113.w467.webp",
      srcSet: "/_optimized/amyCatPhotos/amy2.png.110d2f58c113.w467.webp 467w",
      alt: "Amy",
      width: 467,
      height: 491,
    },
  },
  {
    position: "top-[348px] left-0",
    image: {
      src: "/_optimized/amyCatPhotos/amy3.png.b6c30953836a.w422.webp",
      srcSet: "/_optimized/amyCatPhotos/amy3.png.b6c30953836a.w422.webp 422w",
      alt: "Amy",
      width: 422,
      height: 428,
    },
  },
  {
    position: "top-[77px] right-0",
    image: {
      src: "/_optimized/amyCatPhotos/amy4.png.e953abb123b2.w492.webp",
      srcSet:
        "/_optimized/amyCatPhotos/amy4.png.e953abb123b2.w480.webp 480w, /_optimized/amyCatPhotos/amy4.png.e953abb123b2.w492.webp 492w",
      alt: "Amy",
      width: 492,
      height: 500,
    },
  },
  {
    position: "top-[251px] right-0",
    image: {
      src: "/_optimized/amyCatPhotos/amy5.png.ca1f04cc556a.w539.webp",
      srcSet:
        "/_optimized/amyCatPhotos/amy5.png.ca1f04cc556a.w480.webp 480w, /_optimized/amyCatPhotos/amy5.png.ca1f04cc556a.w539.webp 539w",
      alt: "Amy",
      width: 539,
      height: 553,
    },
  },
];

const SIZES = "(max-width: 720px) calc(100vw - 2rem), 800px";

export default function AboutChris() {
  return (
    <section className="py-16 sm:py-20 px-[60px] lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 lg:p-16">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left: Text Content (2/3 width) */}
            <div className="lg:w-2/3">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Hi, I&apos;m Chris 👋
              </h2>
              <p className="text-base sm:text-lg text-gray-700 mb-4">
                I built Amy to help me track my eating habits in a simple and
                intuitive way, while pushing myself to be a better designer.
              </p>
              <p className="text-base sm:text-lg text-gray-700 mb-4">
                I wanted to create a calorie tracking experience that felt{" "}
                <strong>incredible</strong> to use—like writing in a notes
                app—so great design and interaction was something I put a lot of
                time into.
              </p>
              <p className="text-base sm:text-lg text-gray-700 mb-8">
                Hopefully you feel that when you use it and my app helps you as
                much as its helped me :)
              </p>

              <div className="flex flex-col" style={{ gap: "30px" }}>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/_optimized/ChrisProfilePic.jpg.c21eb7a0161e.w800.webp"
                      alt="Chris Raroque"
                      className="w-full h-full object-cover"
                      srcSet="/_optimized/ChrisProfilePic.jpg.c21eb7a0161e.w480.webp 480w, /_optimized/ChrisProfilePic.jpg.c21eb7a0161e.w800.webp 800w, /_optimized/ChrisProfilePic.jpg.c21eb7a0161e.w1200.webp 1200w, /_optimized/ChrisProfilePic.jpg.c21eb7a0161e.w1600.webp 1600w"
                      sizes={SIZES}
                      decoding="async"
                      width={3500}
                      height={3500}
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-lg">
                      Chris Raroque
                    </p>
                    <p className="text-sm text-gray-600">Amy developer</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-300 shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/_optimized/amyCatPhotos/amyprofie.png.7f49c8a81e81.w447.webp"
                      alt="Amy"
                      className="w-full h-full object-cover"
                      srcSet="/_optimized/amyCatPhotos/amyprofie.png.7f49c8a81e81.w447.webp 447w"
                      sizes={SIZES}
                      decoding="async"
                      width={447}
                      height={470}
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-lg">Amy</p>
                    <p className="text-sm text-gray-600">Cat</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Amy Images scattered layout (1/3 width) */}
            <div className="lg:w-1/3 relative hidden lg:flex justify-end">
              <div
                className="relative w-full max-w-[350px]"
                style={{ height: "502px" }}
              >
                {CAT_PHOTOS.map((photo) => (
                  <div
                    key={photo.image.src}
                    className={`absolute ${photo.position} w-[154px] h-[154px] rounded-full overflow-hidden`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={photo.image.src}
                      alt={photo.image.alt}
                      className="w-full h-full object-cover"
                      srcSet={photo.image.srcSet}
                      sizes={SIZES}
                      decoding="async"
                      width={photo.image.width}
                      height={photo.image.height}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: SITE.name,
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      { src: "/icon.png", sizes: "192x192", type: "image/png" },
      { src: SITE.icon512, sizes: "512x512", type: "image/png" },
    ],
    // Points Android to the real app instead of offering to install the site.
    related_applications: [
      { platform: "play", id: SITE.playPackageId, url: SITE.playListingUrl },
    ],
    prefer_related_applications: true,
  };
}

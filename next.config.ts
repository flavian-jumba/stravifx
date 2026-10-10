import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  // Pin the workspace root: without it Next walks up to /home/infinity and warns.
  turbopack: {
    root: path.resolve(process.cwd()),
  },
};

export default nextConfig;

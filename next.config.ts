import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Standalone output is for the Docker image only. On Vercel the adapter owns
  // the output, and the standalone step fails looking for next-server.js.nft.json.
  output: process.env.VERCEL ? undefined : "standalone",
  // Pin the workspace root: without it Next walks up to /home/infinity and warns.
  turbopack: {
    root: path.resolve(process.cwd()),
  },
};

export default nextConfig;

// next.config.js
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true, // This ensures that paths are correctly generated for static export
};

export default nextConfig;

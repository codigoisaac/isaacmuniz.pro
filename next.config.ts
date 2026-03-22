import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"], // Tentar AVIF antes de WebP
  },
};

export default nextConfig;

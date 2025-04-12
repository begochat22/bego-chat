import { createRequire } from "module";
import path from "path";
import type { NextConfig } from "next";

const require = createRequire(import.meta.url);

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "encrypted-tbn0.gstatic.com",
      "upload.wikimedia.org",
      "codekitapp.com",
      "archive.org",
      "sdmntprsouthcentralus.oaiusercontent.com",
      "res.cloudinary.com",
    ],
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "./src"),
    };
    return config;
  },
};

export default nextConfig;

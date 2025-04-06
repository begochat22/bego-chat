import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
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
};

export default nextConfig;

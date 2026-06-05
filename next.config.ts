import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Emit each route as <path>/index.html so Apache/Hostinger serves clean URLs natively
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

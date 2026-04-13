import type { NextConfig } from "next";

const repo = "Implementatie-Canvas-Digitale-Technologie-in-de-Industrie";

const nextConfig: NextConfig = {
  output: "export",
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: `/${repo}`,
  },
};

export default nextConfig;

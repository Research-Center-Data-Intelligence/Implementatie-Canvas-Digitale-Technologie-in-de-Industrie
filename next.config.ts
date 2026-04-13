import type { NextConfig } from "next";

const repo = "Implementatie-Canvas-Digitale-Technologie-in-de-Industrie";

const nextConfig: NextConfig = {
  output: "export",
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
};

export default nextConfig;

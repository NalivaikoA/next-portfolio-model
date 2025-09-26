import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoName = "next-portfolio-model";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "docs",
  images: {
    unoptimized: true,
  },
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",
  trailingSlash: true,
};

export default nextConfig;

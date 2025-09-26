import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "docs",
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/next-portfolio-model" : "",
  assetPrefix: isProd ? "/next-portfolio-model/" : "",
  trailingSlash: true, // ← Рекомендую добавить для избежания проблем с путями
};

export default nextConfig;

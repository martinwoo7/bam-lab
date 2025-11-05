import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // <=== enables static exports
  reactStrictMode: true,
  basePath: isProd ? "/github-test" : "",
  assetPrefix: isProd ? "/github-test/" : "",
  images: { unoptimized: true },
};

export default nextConfig;

import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: __dirname,
  images: {
    // Remote media is served directly from the Framer CDN in the browser.
    // This avoids Next's server-side image proxy, which can time out on
    // slow networks and block rendering.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "framerusercontent.com",
      },
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;

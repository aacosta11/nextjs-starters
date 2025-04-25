import type { NextConfig } from "next";
import { BREAKPOINTS } from "@/lib/breakpoints";

const nextConfig: NextConfig = {
  images: {
    deviceSizes: Object.values(BREAKPOINTS),
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  devIndicators: {
    position: "bottom-right",
  }
};

export default nextConfig;

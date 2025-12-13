import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'api-maps.yandex.ru',
    }],
  }
};

export default nextConfig;

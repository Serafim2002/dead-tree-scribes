import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.builder.io',
        pathname: '/api/v1/image/assets/**',
      },
    ],
  },
};

module.exports = {
  ...nextConfig,
  allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev'],
}

export default nextConfig;

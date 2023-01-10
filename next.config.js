/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  enableSvg: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/hosting-khung-gia-re',
        destination: '/dich-vu-hosting-web-hosting-gia-re',
        permanent: true,
      },
      {
        source: '/thiet-ke-website',
        destination: '/dich-vu-thiet-ke-website-chuyen-nghiep',
        permanent: true,
      },
    ]
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;

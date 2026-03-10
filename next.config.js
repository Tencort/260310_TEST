/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/260310_TEST',
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;

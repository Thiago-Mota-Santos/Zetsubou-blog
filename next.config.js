/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
  images: {
    loader: "default",
    domains: ["media.graphassets.com"],
  },
};

module.exports = nextConfig;

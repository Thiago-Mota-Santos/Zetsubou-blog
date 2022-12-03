/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "media.graphassets.com",
          port: "",
          pathname: " ",
        },
      ],
      allowFutureImage: true,
    },
  },
  images: {
    loader: "default",
    domains: ["localhost"],
  },
};

module.exports = nextConfig;

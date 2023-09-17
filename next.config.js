/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "ismailwp.infinityfreeapp.com",
      },
    ],
  },
};

module.exports = nextConfig;

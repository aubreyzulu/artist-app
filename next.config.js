/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'photos.bandsintown.com',
      },
    ],
  },
};

module.exports = nextConfig;

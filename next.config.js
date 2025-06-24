// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // allows all hostnames (use with caution)
      },
    ],  },
};

module.exports = nextConfig;

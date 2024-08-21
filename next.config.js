// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'aceternity.com', // Existing domain
      'assets.aceternity.com' // New domain
    ],
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
});

module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
});

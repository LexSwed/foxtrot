// next.config.js
const path = require('path');
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const withGraphql = require('next-plugin-graphql');

const nextConfig = {
  devIndicators: {
    autoPrerender: false
  },
  webpack: config => {
    config.resolve.modules.push(path.resolve(__dirname, 'src'));
    return config;
  }
};

const plugins = [
  [
    optimizedImages,
    {
      mozjpeg: {
        quality: 90
      },
      optipng: {
        optimizationLevel: 3
      },
      webp: {
        quality: 90
      }
    }
  ],
  withGraphql
];

module.exports = withPlugins(plugins, nextConfig);

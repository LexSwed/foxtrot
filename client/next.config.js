// next.config.js
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const withGraphql = require('next-plugin-graphql');

const nextConfig = {
  devIndicators: {
    autoPrerender: false
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

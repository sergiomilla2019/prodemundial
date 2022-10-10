/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
});

const nextConfig = {
  reactStrictMode: true,
  webpack5: true,
  images: {
    domains: [
      "cdn11.bigcommerce.com",
      "idlogisticscoral.blob.core.windows.net",
      "ui-avatars.com",
    ],
  },
  module: {
    loaders: [
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        loader: "url-loader?limit=100000",
      },
    ],
  },
};

module.exports = withPWA(nextConfig);

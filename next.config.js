/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  assetPrefix: 'https://examplecdn.com', // prefix on icon.png not added
};

module.exports = nextConfig;

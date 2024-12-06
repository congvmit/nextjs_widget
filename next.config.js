/** @type {import('next').NextConfig} */

const { NEXT_PUBLIC_ASSET_PREFIX } = process.env

const nextConfig = {
  output: 'export',  // 'export',
  assetPrefix: NEXT_PUBLIC_ASSET_PREFIX,
  // transpilePackages: ['@propertyguru/hive-ui-widgets', 'ahooks'],
  transpilePackages: [
    '@propertyguru/hive-ui-widgets',
    '@unleash/nextjs',
    '@reduxjs/toolkit',
    'reselect',
    'query-string',
  ],
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn-assets-seller.batdongsan.com.vn',
        port: '',
        pathname: `/seller-staticfile/**`,
      },
    ],
  },
}

module.exports = nextConfig

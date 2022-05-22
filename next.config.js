/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['data.boch.gov.tw'],
  },
  async rewrites() {
    return [
      {
        source: '/api/data',
        destination: 'https://data.boch.gov.tw/data/opendata/v2/assetsCase/1.1.json',
      },
    ]
  },
}

module.exports = nextConfig

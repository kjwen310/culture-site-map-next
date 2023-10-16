/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['data.boch.gov.tw'],
  },
  async rewrites() {
    return [
      {
        source: '/api/data',
        destination: 'https://data.boch.gov.tw/opendata/v2/assetsCase/1.1.json',
      },
    ]
  },
}

module.exports = nextConfig

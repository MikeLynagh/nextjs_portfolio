/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/projects',
        destination: '/work',
        permanent: true,
      },
      {
        source: '/articles',
        destination: '/writing',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig

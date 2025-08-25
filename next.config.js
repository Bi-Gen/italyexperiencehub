/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['picsum.photos', 'images.unsplash.com'],
    unoptimized: true
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      // Redirect old URLs that were indexed but don't exist anymore
      {
        source: '/guide/trasporti-italia',
        destination: '/guide/trasporti-italia',
        permanent: true,
      },
      {
        source: '/guide/quando-visitare-toscana',
        destination: '/guide/quando-visitare-toscana', 
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    unoptimized: false,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Optimize image loading
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: false,
  },
  // Premium performance optimizations
  compress: true,
  poweredByHeader: false,
  swcMinify: true,
  // Optimize production builds
  productionBrowserSourceMaps: false,
  // Disable optimizeCss to avoid 404s on /_next/static/ in dev; re-enable for prod if desired
  experimental: {
    optimizeCss: false,
  },
}

module.exports = nextConfig

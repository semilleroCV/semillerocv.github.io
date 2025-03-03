/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization configuration
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    // Optimize images for better loading performance
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    // Since we're using static export, we need unoptimized images (Next.js requirement)
    unoptimized: true,
  },
  // Enable compression
  compress: true,
  // Improve performance by enabling React strict mode
  reactStrictMode: true,
  // Enable production source maps for better debugging
  productionBrowserSourceMaps: false,
  // Optimize package loading
  swcMinify: true,
  // Static site export settings
  output: 'export',
};

module.exports = nextConfig;
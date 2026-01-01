/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.unsplash.com',
      },
    ],
  },
  // Enable React strict mode (optional, true by default in Next.js 15)
  reactStrictMode: true,
  // swcMinify is no longer needed - Next.js 15 handles minification automatically
  // Remove compiler options if not needed
};

export default nextConfig;
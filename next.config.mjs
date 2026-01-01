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
  // Enable React strict mode
  reactStrictMode: true,
  // Optional: Enable swcMinify for faster builds
  swcMinify: true,
  // Optional: Add compiler options if needed
  compiler: {
    // removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => [
    {
      source: `/_next/data/:release/more-specific/:path*`,
      destination: `https://example.com`,
    },
    {
      source: `/test-app/subfolder/:release/more-specific/:path*`,
      destination: `https://example.com`,
    },
  ],
};

module.exports = nextConfig;

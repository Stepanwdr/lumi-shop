/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'picsum.photos' },
      { protocol: 'https', hostname: 'fakeapi.platzi' },
      { protocol: 'https', hostname: 'i.imgur.com' },
      {
        protocol: 'https',
        hostname: 'api.escuelajs.co',
        pathname: '/api/v1/products/**',
      },
    ],
  },
  async redirects() {
    return [];
  },
};

export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
  async redirects() {
    return [
      // убираем строки с source: '/' и '/en'
      // пока оставим пустой массив
    ];
  },
};

export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",
  output: "standalone",
  reactStrictMode: true,
  poweredByHeader: false,
  swcMinify: true,
};

export default nextConfig;

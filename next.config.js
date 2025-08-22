/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',           // 关键：静态导出
  images: { unoptimized: true },
  trailingSlash: true
};
module.exports = nextConfig;

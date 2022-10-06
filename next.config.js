/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['upload.wikimedia.org', 'cdn.sanity.io']
  },
  env: {
    SERVER: process.env.SERVER,
  },
}

module.exports = nextConfig

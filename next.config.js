/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '',
    poweredByHeader: process.env.NODE_ENV === 'development',
    reactStrictMode: process.env.NODE_ENV === 'development',
  };
  
  module.exports = nextConfig;
  
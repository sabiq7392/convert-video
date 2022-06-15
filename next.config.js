/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { 
      fs: false, 
      path: false,
      child_process: false,
    };

    return config;
  },
}

module.exports = nextConfig

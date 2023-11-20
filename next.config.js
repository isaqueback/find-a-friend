/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    googleApiKey: process.env.GOOGLE_API_KEY,
  },
}

module.exports = nextConfig

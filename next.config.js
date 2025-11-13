/** @type {import('next').NextConfig} */
const nextConfig = {
  plugins: ["react-compiler"],
  rules: {
    "react-compiler/react-compiler": "error",
  },
  images: {
    domains: ["images.unsplash.com"],
  },
};

module.exports = nextConfig;

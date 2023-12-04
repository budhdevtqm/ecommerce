/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DB_HOST: "localhost",
    DB_PASSWORD: "Password@1234",
    DB_USER: "root",
    DATABASE: "eCommerce",
    ACCESS_TOKEN_SECRET:
      "ab7a3de3ac0d63336ce98315661611122168743addab37cc27282351c6417bf0",
  },
  devIndicators: {
    buildActivityPosition: "bottom-right",
  },
};

module.exports = nextConfig;

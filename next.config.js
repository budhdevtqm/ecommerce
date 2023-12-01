/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DB_HOST: "localhost",
    DB_PASSWORD: "Password@1234",
    DB_USER: "root",
    DATABASE: "eCommerce",
    ACCESS_TOKEN_SECRET:
      "426f1c2a47930e4fb320f632cf00ec77e9167a2d347ebea002679e8b218caca0288a8dba41176981a32773ce1e5c90280c3fa7d2042062a0bf99c174808856d5",
  },
  devIndicators: {
    buildActivityPosition: "bottom-right",
  },
};

module.exports = nextConfig;

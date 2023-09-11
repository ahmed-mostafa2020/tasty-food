/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["market.amrbdr.com"],
  },
};

module.exports = { nextConfig, i18n };

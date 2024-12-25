import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  i18n: {
    locales: ["en", "fr"], // Define the supported languages (English and French)
    defaultLocale: "fr", // Default language
  },
};

export default nextConfig;

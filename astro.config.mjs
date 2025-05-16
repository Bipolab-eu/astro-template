// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react(), sitemap()],

  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
    routing: {
      prefixDefaultLocale: false
    }
  },

  image: {
    remotePatterns: [{ protocol: "https" }],
  },

  experimental: {
    fonts: [{
      provider: fontProviders.google(),
      name: "IBM Plex Serif",
      weights: ["100 900"],
      cssVariable: "--font-ibm-plex-serif"
    }]
  }
});
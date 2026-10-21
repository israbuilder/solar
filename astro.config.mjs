// @ts-check
import { defineConfig } from 'astro/config';

// Disable Netlify Vite plugin's background Deno Edge Functions emulator in local dev
if (!process.env.NETLIFY) {
  process.env.NETLIFY_DEV = 'true';
}

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'https://solarpanels.com.mx',

  redirects: {
    '/charities': '/community-mission',
  },

  trailingSlash: 'ignore',
  build: { format: 'directory' },

  prefetch: { prefetchAll: true, defaultStrategy: 'viewport' },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/404') &&
        !page.includes('/apply-received') &&
        !page.includes('/api/'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    })
  ],

  adapter: node({
    mode: 'standalone'
  })
});

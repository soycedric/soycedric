// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from 'astro-sitemap';
import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
  site: 'https://soycedric.github.io',
  trailingSlash: 'always',
  build: {
    assets: '_assets'
  },
  integrations: [
    sitemap(),
    robotsTxt({
      policy: [
        {
          userAgent: '*',
          allow: '/',
        },
      ],
      sitemap: true,
    }),
  ],
});

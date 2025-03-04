// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://soycedric.github.io',
  outDir: './dist', // Asegúrate de que esto sea './dist'
  trailingSlash: 'always',
  build: {
    assets: '_assets'
  },
  compressHTML: true
});

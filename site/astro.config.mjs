import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://mhudakcz.github.io',
  base: '/Shopify_news_magexo',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});

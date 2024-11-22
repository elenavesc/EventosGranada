import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://elenavesc.github.io',
  base: '/EventosGranada',
  integrations: [tailwind()],
});

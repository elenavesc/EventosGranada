import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://tu-dominio.com', // Reemplaza con tu dominio si lo tienes
});

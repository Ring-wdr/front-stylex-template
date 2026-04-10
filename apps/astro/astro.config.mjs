import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import stylex from '@stylexjs/unplugin';

export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [stylex.vite()],
    ssr: {
      noExternal: ['@repo/shared-components', '@repo/utils', '@stylexjs/stylex'],
    },
  },
});

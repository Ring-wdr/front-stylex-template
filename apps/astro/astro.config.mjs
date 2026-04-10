import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import react from '@astrojs/react';
import stylex from '@stylexjs/unplugin';

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), '../..');

export default defineConfig({
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  integrations: [
    react({
      babel: {
        plugins: ['babel-plugin-react-compiler'],
      },
    }),
  ],
  vite: {
    plugins: [
      stylex.vite({
        useCSSLayers: true,
        runtimeInjection: false,
        unstable_moduleResolution: {
          type: 'commonJS',
          rootDir,
        },
      }),
    ],
    ssr: {
      noExternal: ['@repo/shared-components', '@repo/utils', '@stylexjs/stylex'],
    },
  },
});

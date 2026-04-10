import { defineConfig } from 'vite';
import { devtools } from '@tanstack/devtools-vite';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import viteReact from '@vitejs/plugin-react';
import { nitro } from 'nitro/vite';
import stylex from '@stylexjs/unplugin';

export default defineConfig({
  plugins: [
    devtools(),
    nitro({ rollupConfig: { external: [/^@sentry\//] } }),
    stylex.vite(),
    tanstackStart(),
    viteReact(),
  ],
  ssr: {
    noExternal: ['@repo/shared-components', '@repo/utils', '@stylexjs/stylex'],
  },
});

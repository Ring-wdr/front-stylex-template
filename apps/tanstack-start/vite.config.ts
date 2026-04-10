import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import { devtools } from '@tanstack/devtools-vite';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import babel from '@rolldown/plugin-babel';
import viteReact, { reactCompilerPreset } from '@vitejs/plugin-react';
import { nitro } from 'nitro/vite';
import stylex from '@stylexjs/unplugin';

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), '../..');

export default defineConfig({
  plugins: [
    devtools(),
    nitro({ rollupConfig: { external: [/^@sentry\//] } }),
    stylex.vite({
      useCSSLayers: true,
      runtimeInjection: false,
      unstable_moduleResolution: {
        type: 'commonJS',
        rootDir,
      },
    }),
    tanstackStart(),
    viteReact(),
    babel({ presets: [reactCompilerPreset()] }),
  ],
  ssr: {
    noExternal: ['@repo/shared-components', '@repo/utils', '@stylexjs/stylex'],
  },
});

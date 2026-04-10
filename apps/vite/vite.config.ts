import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import babel from "@rolldown/plugin-babel";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import stylex from "@stylexjs/unplugin";

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), "../..");

export default defineConfig({
	plugins: [
		stylex.vite({
			useCSSLayers: true,
			unstable_moduleResolution: {
				type: "commonJS",
				rootDir,
			},
		}),
		react(),
		babel({ presets: [reactCompilerPreset()] }),
	],
});

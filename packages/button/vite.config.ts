import { resolve } from "path";
import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

import pkg from "./package.json";

export default defineConfig({
  plugins: [solidPlugin()],
  build: {
    target: "esnext",
    polyfillDynamicImport: false,
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es", "cjs"],
      fileName: (format) => `bonsai-button.${format}.js`,
    },
    outDir: resolve(__dirname, "./dist"),
    rollupOptions: {
      external: Object.keys(pkg.peerDependencies),
    },
  },
});

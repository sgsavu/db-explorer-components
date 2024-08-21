import { defineConfig } from 'tsup';
 
export default defineConfig({
    format: ['cjs', 'esm'],
    loader: {
      ".css": "css"
    },
    entry: ['./src/index.ts'],
    dts: true,
    shims: true,
    sourcemap: true,
    skipNodeModulesBundle: true,
    clean: true,
});
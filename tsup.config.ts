import { defineConfig } from 'tsup';
 
export default defineConfig({
    format: ['cjs', 'esm'],
    entry: ['./src/index.ts'],
    loader: {".css": "css"},
    dts: true,
    shims: true,
    sourcemap: true,
    skipNodeModulesBundle: true,
    clean: true,
    minify: true
});
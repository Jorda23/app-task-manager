/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import path from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import svgr from 'vite-plugin-svgr';
// import { nodeResolve } from '@rollup/plugin-node-resolve';
import Checker from 'vite-plugin-checker';

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    dts({
      insertTypesEntry: true,
    }),
    Checker({ typescript: true }), // Agrega el plugin Checker para TypeScript

  ],
  server: {
    watch: {
      usePolling: true,
    },
  },
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.tsx'),
      name: 'ReactKit',
      formats: ['es', 'umd', 'cjs', 'iife'],
      fileName: 'react-kit',
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      // plugins: [nodeResolve({ browser: true })],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});

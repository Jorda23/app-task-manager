import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import Checker from 'vite-plugin-checker';

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    Checker({ typescript: true }), // Agrega el plugin Checker para TypeScript
  ],
  resolve: {
    alias: {
      src: '/src',
    },
  },
  optimizeDeps: {
    include: ['@testing-library/react', 'react', 'react-dom'],
  },
  server: {
    watch: {
      usePolling: true,
    },
  },
});

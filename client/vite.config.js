import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/1020-website/',
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
});

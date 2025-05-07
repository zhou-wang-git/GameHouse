import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  base: './', // ✅ 或 '/' 也可以
  build: {
    outDir: 'dist',
    sourcemap: true
  }
});

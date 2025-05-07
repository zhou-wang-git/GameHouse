import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  base: './', // 👈 用相对路径即可适配本地和线上
  build: {
    outDir: 'dist',
    sourcemap: true
  }
});

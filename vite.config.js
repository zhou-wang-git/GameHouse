// vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  base: './GameHouse/', // 建议本地测试用相对路径
  build: {
    outDir: 'dist',
    sourcemap: true // 便于调试
  }
});
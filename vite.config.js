import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
 base: './', // 确保 base 路径设置为相对路径
  build: {
    outDir: 'dist',
    sourcemap: true
  },
  define: {
    'process.env': {} // 模拟 process.env
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    //historyApiFallback: true // ✅ 支持前端路由刷新不 404
  }
})

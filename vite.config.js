import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
 base: '/GameHouse/',  // 设置为你的子目录路径
})

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/GameHouse/', // 你的仓库名，注意前后有斜杠
  plugins: [vue()],
})

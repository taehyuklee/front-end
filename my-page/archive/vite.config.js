import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' 

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './',   // index.html 기준 상대경로 (github io에서 때문에)
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  }
})

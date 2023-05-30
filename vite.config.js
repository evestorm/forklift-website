import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy';
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11']
    }),
    vue(),
  ],
  build:{
    target: ['es2015', 'chrome63'],
  }
})

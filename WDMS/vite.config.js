import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  root: '.', // Root directory
  base: '/', // Base URL
  plugins: [
    vue(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true, // Fixed missing comma
  },
  optimizeDeps: {
    include: [
      'remixicon/fonts/remixicon.css',
      'remixicon/fonts/remixicon.woff2'
    ]
  }
})

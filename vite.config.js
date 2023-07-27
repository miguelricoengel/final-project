import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: 'https://yourbuble.netlify.app//',
  plugins: [react()],
  server: {
    proxy: {
      '/backend': { 
        target: 'https://apibuble.fly.dev',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/backend/, ''),
      },
    },
  },
  build: {
    outDir: 'dist',
  },
})

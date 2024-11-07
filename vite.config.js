import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: process.env.VITE_API_BASE_URL,  // Backend URL
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [react()],
});
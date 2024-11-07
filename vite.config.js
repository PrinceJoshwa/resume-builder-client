import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: process.env.REACT_APP_BACKEND_URL,  // Backend URL
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [react()],
});
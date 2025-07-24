import { defineConfig } from 'vite'; // <-- Add this import
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000', // Make sure this is your backend's port
        changeOrigin: true,
      },
    },
  },
});
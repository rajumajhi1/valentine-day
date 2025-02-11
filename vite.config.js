import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Enable access from all network interfaces
    port: 5173, // Optional: specify a custom port
  },
})

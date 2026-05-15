import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // or '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  base: '/kyz-threads/', // 👈 MAKE SURE THIS MATCHES YOUR GITHUB REPO NAME EXACTLY
})
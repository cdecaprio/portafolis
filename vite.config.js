import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Rutas relativas para que funcione también en GitHub Pages (/portafolis/)
  base: './',
  plugins: [vue(), tailwindcss()],
})

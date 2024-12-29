import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})

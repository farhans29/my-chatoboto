import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

export default defineConfig({
  plugins: [react()],
  base: '/ai-chatbot/', // Ensure this matches the subdirectory
  server: {
    proxy: {
      '/api': {
        target: 'https://newgpt.monogatari.my.id',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  define: {
    __APP_DESCRIPTION__: JSON.stringify(process.env.VITE_APP_DESCRIPTION || 'Default App Description'),
  },
});

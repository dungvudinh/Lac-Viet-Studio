import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
export default defineConfig({
  base: '/', // <-- make sure this is here
  plugins: [react()],
  build: {
    outDir: 'dist'
  }, 
  resolve: {
    alias: [
      { find: '~', replacement: '/src' }
    ]
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
  
})

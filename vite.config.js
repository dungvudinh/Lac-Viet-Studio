import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react() 
  ],
  resolve:{
    alias:[
      { find:'~', replacement:'/src' }
    ]
  }, 
  server: {
    proxy: {
      '/v1': {
        target: 'https://lac-viet-studio-api.onrender.com',
        changeOrigin:true,
        secure:true
      }
    }
  }
})

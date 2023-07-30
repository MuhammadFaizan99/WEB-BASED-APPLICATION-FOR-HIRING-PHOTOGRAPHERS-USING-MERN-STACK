import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dns from 'dns'



dns.setDefaultResultOrder('verbatim')


export default defineConfig({
  plugins: [react()],

  server:{
    host:'localhost',
    port: 3000
  }
  
})



// const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = {
//   // other Vite configuration options...
//   server: {
//     proxy: {
//       '/api': {
//         target: 'http://localhost:5000', // Replace with your backend server URL
//         changeOrigin: true,
//         secure: false,
//         rewrite: (path) => path.replace(/^\/api/, '')
//       }
//     }
//   }
// };

// https://vitejs.dev/config/

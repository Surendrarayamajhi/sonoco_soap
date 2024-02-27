import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

//https://vitejs.dev/config/
export default defineConfig({
  base: 'https://sonocosoap.com/',
  plugins: [react()],
  
})
// export default defineConfig({
//   build: {
//     rollupOptions: {
//        https://sonocosoap.com/
//     }
//   },
// })



import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: '/', // 👈 nom EXACT de ton repo GitHub kami-portefolio
  plugins: [react()],
})

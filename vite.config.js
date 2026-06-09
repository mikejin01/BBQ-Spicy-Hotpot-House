import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base ('./') keeps asset paths working on GitHub Pages project
// sites (e.g. user.github.io/repo-name/) without hardcoding the repo name.
export default defineConfig({
  base: './',
  plugins: [react()],
})

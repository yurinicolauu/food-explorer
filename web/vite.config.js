// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Configure how the output files are named:
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: ({ name }) => {
          // Handle assets based on their folder structure and extension
          if (name.includes('src/assets')) {
            // Put files originally in src/assets into dist/assets
            return 'assets/[name].[ext]'
          }
          // Other files go into a general assets folder
          return 'assets/[name].[ext]'
        },
      },
    },
  },
})

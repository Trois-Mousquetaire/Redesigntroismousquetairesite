import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

function getBasePath() {
  if (!process.env.GITHUB_REPOSITORY) {
    return '/'
  }

  const repoName = process.env.GITHUB_REPOSITORY.split('/')[1]
  return repoName.endsWith('.github.io') ? '/' : `/${repoName}/`
}

export default defineConfig({
  base: getBasePath(),
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react()],
  define: {
    'import.meta.env.DEV': 'true',
    'import.meta.env.MODE': '"development"',
    'process.env.NODE_ENV': '"development"',
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    globals: true,
    // jsdom 27 で不安定なら:
    // pool: 'threads',
    // isolate: true,
  },
})

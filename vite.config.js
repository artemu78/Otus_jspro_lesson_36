import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path';

const include = ['src/**/*.{ts,tsx}'];
const exclude = [
  "**/node_modules/**",
  "**/dist/**",
  "**/playwright-report/**",
  "**/playwrightTests/**",
  "**/test-results/**",
  "**/coverage/**",
  "**/src/setupTests.ts"
];

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src')
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    exclude,
    coverage: {
      enabled: true,
      provider: 'v8',
      reporter: ['text', 'lcov'],
      reportsDirectory: './coverage',
      include,
      exclude,
    }
  }
})

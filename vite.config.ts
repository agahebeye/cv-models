import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    laravel({
      input: 'resources/ts/app.tsx',
      refresh: true
    }),
    react()
  ], resolve: {
    alias: {
      '~': '/resources/ts'
    }
  }
})

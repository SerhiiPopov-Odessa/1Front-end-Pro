import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      // Явно указываем automatic runtime (по умолчанию, но лучше явно)
      jsxRuntime: 'automatic',
    }),
  ],

  test: {
    // Фейковый браузер для тестов
    environment: 'jsdom',

    // test / expect / describe без импортов
    globals: true,

    // setup-файл (опционально, но рекомендую)
    setupFiles: './src/setupTests.js',
  },
})

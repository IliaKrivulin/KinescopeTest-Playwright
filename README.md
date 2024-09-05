# KinescopeTokenTest

Установка playwright: npm init playwright@latest

Команда запуска теста: npx playwright test tests/tokenTest.spec.ts

Команда запуска теста в debug режиме: npx playwright test tests/tokenTest.spec.ts --debug

Установлена настройка запуска в Chrome. Для запуска теста в других браузерах, необходимо расскомментировать соответствующие блоки в файле playwright.config.js

    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

import { defineConfig } from '@playwright/test';

// Playwright smoke tests for ASP official website. Spawns `pnpm start` as the
// webServer if not already running; tests run against http://localhost:3000.
// Build is the responsibility of `pnpm build` (separate matrix entry).

export default defineConfig({
  testDir: './tests/e2e',
  // Each test gets up to 30s for navigation + assertions.
  timeout: 30_000,
  expect: { timeout: 5_000 },
  fullyParallel: false,  // 1 webServer; serial avoids race conditions on dev/prod start
  workers: 1,
  reporter: [['list']],
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
  webServer: {
    command: 'pnpm start',
    port: 3000,
    timeout: 120_000,  // 2 minutes for next start to come up
    reuseExistingServer: !process.env.CI,
  },
});

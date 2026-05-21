import { defineConfig } from '@playwright/test';

// Playwright smoke tests for ASP official website. Always spawns a fresh
// `pnpm start` on port 13030 (avoids common port-3000 conflicts with Docker
// Desktop's proxy listener and any local dev server). Build is the
// responsibility of `pnpm build` (separate matrix entry).

const PORT = Number(process.env.WEBSITE_PORT ?? 13030);

export default defineConfig({
  testDir: './tests/e2e',
  timeout: 30_000,
  expect: { timeout: 5_000 },
  fullyParallel: false,
  workers: 1,
  reporter: [['list']],
  use: {
    baseURL: `http://localhost:${PORT}`,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
  webServer: {
    command: `pnpm start --port ${PORT}`,
    port: PORT,
    timeout: 120_000,
    reuseExistingServer: false,
  },
});

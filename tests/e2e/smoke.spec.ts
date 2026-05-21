// Page-load smoke for the 5 routes the project promises:
//   /, /docs, /docs/builders, /docs/operators, /docs/protocol
// Each test asserts:
//   - HTTP 200
//   - page DOM loaded (heading or main content present)
//   - no console errors with severity 'error'
//
// These are SMOKE tests — not visual / content / interaction tests. The intent
// is to catch broken builds, missing routes, runtime exceptions on first render.
import { test, expect, type Page, type ConsoleMessage } from '@playwright/test';

interface RouteCheck {
  path: string;
  label: string;
  // Some content the page should contain — must be specific enough to fail
  // if the page is broken/empty, generic enough to not break on copy changes.
  expectedTextHints: RegExp[];
}

const ROUTES: RouteCheck[] = [
  { path: '/',                 label: 'home',           expectedTextHints: [/agent shell/i] },
  { path: '/docs',             label: 'docs index',     expectedTextHints: [/docs|documentation|introduction/i] },
  { path: '/docs/builders',    label: 'builders docs',  expectedTextHints: [/builder|build|sdk/i] },
  { path: '/docs/operators',   label: 'operators docs', expectedTextHints: [/operator|deploy|run/i] },
  { path: '/docs/protocol',    label: 'protocol docs',  expectedTextHints: [/protocol|spec|architecture/i] },
];

for (const { path, label, expectedTextHints } of ROUTES) {
  test(`smoke: ${label} (${path})`, async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on('console', (msg: ConsoleMessage) => {
      if (msg.type() === 'error') consoleErrors.push(`[${msg.type()}] ${msg.text()}`);
    });
    page.on('pageerror', (err) => {
      consoleErrors.push(`[pageerror] ${err.message}`);
    });

    const resp = await page.goto(path, { waitUntil: 'domcontentloaded' });
    expect(resp, `navigation to ${path} returned null`).not.toBeNull();
    expect(resp!.status(), `${path} returned HTTP ${resp!.status()}`).toBeLessThan(400);

    // Page body must have some text — empty body = broken render
    const bodyText = await page.locator('body').innerText();
    expect(bodyText.length, `${path} body has zero text content`).toBeGreaterThan(50);

    // At least one of the hints should match (loose; catches obviously-broken pages)
    const matchedHint = expectedTextHints.some((re) => re.test(bodyText));
    expect(matchedHint, `${path} body matched none of: ${expectedTextHints.map((r) => r.source).join(', ')}\n` +
      `Body sample (first 300 chars): ${bodyText.slice(0, 300)}`).toBe(true);

    // No runtime console errors (excluding known third-party noise)
    const realErrors = consoleErrors.filter((e) =>
      !/Failed to load resource.*favicon/i.test(e) &&  // favicon noise
      !/sourcemap/i.test(e) &&                          // sourcemap warnings
      !/Download the React DevTools/i.test(e)
    );
    expect(realErrors, `${path} produced console errors:\n${realErrors.join('\n')}`).toHaveLength(0);
  });
}

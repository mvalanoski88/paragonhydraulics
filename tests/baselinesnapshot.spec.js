
import { test, expect } from '@playwright/test';

test('generate production baseline', async ({ page }) => {

  const targetUrl = process.env.NUXT_PUBLIC_PLAYWRIGHT_TEST_URL || 'https://dev.paragonhydraulics.com';

  await page.goto(targetUrl);

  await page.getByRole('link', { name: 'Contact Us' }).first().click();

  await expect(
    page.getByRole('heading', { name: 'Contact Us' }),
    page.getByRole('iframe', { timeout: 5000 })
  ).toBeVisible();

  await expect(page).toHaveScreenshot('contactus-page-check.png', {maxDiffPixelRatio: 0.25});
});
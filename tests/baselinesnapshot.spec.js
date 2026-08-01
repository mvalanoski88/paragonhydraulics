
import { test, expect } from '@playwright/test';

test('paragon navigation and homepage check', async ({ page }) => {
  const targetUrl = 'https://dev.paragonhydraulics.com';
  const routes = ['/', '/services', '/aboutus', '/contactus'];

  for (const route of routes) {
    const checkPage = await page.context().newPage();
    const response = await checkPage.goto(`${targetUrl}${route}`, { waitUntil: 'domcontentloaded' });
    expect(response?.status()).toBe(200);
    await checkPage.close();
  }

  await page.goto(targetUrl, { waitUntil: 'domcontentloaded' });
  await expect(page).toHaveScreenshot('homepage-full-page.png', {
    maxDiffPixelRatio: 0.15,
    fullPage: true,
  });
});

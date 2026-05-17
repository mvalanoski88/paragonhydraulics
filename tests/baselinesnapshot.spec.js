
import { test, expect } from '@playwright/test';

test('generate production baseline', async ({ page }) => {

  await page.goto('https://paragonhydraulics.com');

  await page.getByRole('link', { name: 'Contact Us' }).first().click();

  await expect(
    page.getByRole('heading', { name: 'Contact Us' })
  ).toBeVisible();

  await expect(page).toHaveScreenshot('contactus-page-check.png');
});
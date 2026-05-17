import { test, expect } from '@playwright/test';

test('snapshot from dev homepage', async ({ page }) => {
  // navigate to homepage
  await page.goto('https://dev.paragonhydraulics.com');

  // click the fist a element with the name contact us
  await page.getByRole('link', { name: 'Contact Us' }).first().click();

  // expect heading with same name as link and capture screenshot
  await expect(page.getByRole('heading', { name: 'Contact Us' })).toBeVisible();
  await expect(page).toHaveScreenshot('contactus-page-check.png', {maxDiffPixelRatio: 0.35});
});
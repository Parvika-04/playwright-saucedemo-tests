import { test, expect } from '@playwright/test';

test('Invalid Login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  // Use wrong credentials on purpose
  await page.locator('#user-name').fill('wrong_user');
  await page.locator('#password').fill('wrong_password');
  await page.locator('#login-button').click();

  // Check that an error message appears
  const errorMessage = page.locator('[data-test="error"]');
  await expect(errorMessage).toBeVisible();
  await expect(errorMessage).toContainText('do not match any user in this service');
});
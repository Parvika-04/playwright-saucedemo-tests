import { test, expect } from '@playwright/test';

test('Logout', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();

  // Click the hamburger menu (☰) in the top-left corner
  await page.locator('#react-burger-menu-btn').click();

  // Click "Logout" from the menu that slides out
  await page.locator('#logout_sidebar_link').click();

  // Confirm we're back on the login page
  await expect(page.locator('#login-button')).toBeVisible();
});
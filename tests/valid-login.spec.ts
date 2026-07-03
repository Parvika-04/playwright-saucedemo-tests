import { test, expect } from '@playwright/test';

test('Valid Login', async ({ page }) => {
  // Step 1: Open the website
  await page.goto('https://www.saucedemo.com/');

  // Step 2: Type into the username box
  await page.locator('#user-name').fill('standard_user');

  // Step 3: Type into the password box
  await page.locator('#password').fill('secret_sauce');

  // Step 4: Click the login button
  await page.locator('#login-button').click();

  // Step 5: Check that login worked — we should be on the products page
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  await expect(page.locator('.title')).toHaveText('Products');
});
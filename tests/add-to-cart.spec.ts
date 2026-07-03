import { test, expect } from '@playwright/test';

test('Add 2 products to cart', async ({ page }) => {
  // Login first (every scenario after login needs this)
  await page.goto('https://www.saucedemo.com/');
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();

  // Click "Add to cart" on 2 products
  await page.locator('#add-to-cart-sauce-labs-backpack').click();
  await page.locator('#add-to-cart-sauce-labs-bike-light').click();

  // Just confirm the button text changed to "Remove" (means it was added)
  await expect(page.locator('#remove-sauce-labs-backpack')).toBeVisible();
  await expect(page.locator('#remove-sauce-labs-bike-light')).toBeVisible();
});
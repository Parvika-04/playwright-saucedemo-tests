import { test, expect } from '@playwright/test';

test('Verify correct products in cart', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();

  await page.locator('#add-to-cart-sauce-labs-backpack').click();
  await page.locator('#add-to-cart-sauce-labs-bike-light').click();

  // Click the cart icon to open the cart page
  await page.locator('.shopping_cart_link').click();

  // Get all product names shown in the cart
  const cartItems = page.locator('.inventory_item_name');

  await expect(cartItems).toHaveCount(2);
  await expect(cartItems.nth(0)).toHaveText('Sauce Labs Backpack');
  await expect(cartItems.nth(1)).toHaveText('Sauce Labs Bike Light');
});
import { test, expect } from '@playwright/test';

test('Remove product from cart', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();

  await page.locator('#add-to-cart-sauce-labs-backpack').click();
  await page.locator('#add-to-cart-sauce-labs-bike-light').click();

  await page.locator('.shopping_cart_link').click();

  // Remove the backpack
  await page.locator('#remove-sauce-labs-backpack').click();

  // Now only 1 item should remain, and it should be the bike light
  const cartItems = page.locator('.inventory_item_name');
  await expect(cartItems).toHaveCount(1);
  await expect(cartItems.first()).toHaveText('Sauce Labs Bike Light');
});
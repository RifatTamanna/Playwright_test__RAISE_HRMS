import { test, expect } from '@playwright/test';

test('Login Test Auto Generated', async ({ page }) => {
  await page.goto('https://dev.cnsbd.com:5050/');
  await page.getByRole('textbox', { name: 'Enter username' }).click();
  await page.getByRole('textbox', { name: 'Enter username' }).fill('025131');
  await page.locator('input[name="p_user_pass"]').click();
  await page.locator('input[name="p_user_pass"]').fill('Raise@1234#');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.waitForTimeout(2000);
  await page.goto('https://dev.cnsbd.com:5050/dashboard#/dashboard');
  await page.waitForTimeout(2000);
  await page.getByRole('link', { name: 'avatar   Md. Mashud Rana' }).click();
  await page.getByRole('link', { name: '   Logout' }).click();
  await page.waitForTimeout(2000);
});
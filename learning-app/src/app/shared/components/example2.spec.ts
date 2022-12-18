import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to http://localhost:4200/welcome
  await page.goto('http://localhost:4200/welcome');

  // // Click button:has-text("Start!")
  // await Promise.all([
  //   page.waitForNavigation(/*{ url: 'http://localhost:4200/main' }*/),
  //   page.click('button:has-text("Start!")')
  // ]);

  // // Click a:has-text("Cards")
  // await Promise.all([
  //   page.waitForNavigation(/*{ url: 'http://localhost:4200/main/cards' }*/),
  //   page.click('a:has-text("Cards")')
  // ]);

  await page.click('text=Start!');
  await page.click('text=Cards');

  const title = page.locator('.header-title');
  await expect(title).toHaveText('Cards list');
});

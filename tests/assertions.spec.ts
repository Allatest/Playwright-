import { test, expect, Locator } from '@playwright/test';

test.describe('Check initial state', () => {
  test('Check elements category', async ({ page }) => {
  await page.goto('/', { waitUntil: 'domcontentloaded' });
  const actualElementsArray: string[] = [];
  const expectedElementsExpanded: string[] = ['Elements', 'Forms', 'Alerts, Frame & Windows', 'Widgets', 'Interactions', 'Book Store Application'];
  const elementsCategoryCount = await page.locator('.card-body').count();

  for (let index = 0; index < elementsCategoryCount; index++) {
  let textElements: string = await page.locator('.card-body').nth(index).innerText();
  actualElementsArray.push(textElements);
  }

  expect(actualElementsArray).toEqual(expectedElementsExpanded);
  });

  test.only('Check and Verify the Click', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });

    const firstElement = await page.locator('.card-body:has-text("Elements")');

    await firstElement.click();
    const ButtonElements = await page.locator('.header-text:has-text("Elements")');
    await ButtonElements.click();
    await page.getByText('Buttons').click();
    // Verify Click
    
    await page.locator('#doubleClickBtn').dblclick();
    const doubleClick: Locator = page.locator ('#doubleClickBtn');
    await expect(page.locator('#doubleClickMessage')).toBeVisible();

    await page.locator('#rightClickBtn').click({ button: 'right' });
    await expect(page.locator('#rightClickMessage')).toBeVisible();
    
    await page.getByRole('button').nth(2).click();
    await expect(page.getByRole('button').nth(2)).toContainText('Click Me');
    await page.waitForSelector('text="You have done a dynamic click"', { state: 'visible' });

    
    

  });
});






















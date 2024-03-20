import { test, expect, Locator } from '@playwright/test';
import BasePage from '../pageObject/basePage';
import ElementsPage from '../pageObject/ElementsPage';
import { expectedElementsExpanded } from '../test-data/categories';


test.describe('Check initial state', () => {
  test('Check elements category', async ({ page }) => {
    const basePage = new BasePage (page);
  await page.goto('/', { waitUntil: 'domcontentloaded' });

 const actualElementsArray = await basePage.getAllCategories();
  expect(actualElementsArray).toEqual(expectedElementsExpanded);

  });

  test('Check and Verify the Click with Page Object', async ({ page }) => {

    const basePage = new BasePage(page);
    const elementsPage = new ElementsPage (page);
    
    await page.goto('/', { waitUntil: 'domcontentloaded' });

    await basePage.openButtonElements ();

    await elementsPage.openButtonsSubElements();
    await elementsPage.verifyDblButton();
    await elementsPage.verifyRightButton();
    await elementsPage.verifyDynamicButton();
    
    
    
  

    
  
  

  });
});






















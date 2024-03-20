import { Locator, Page } from "playwright-core";
import BasePage from "./basePage";
import { expect } from "playwright/test";

export default class ElementsPage extends BasePage {

    readonly page: Page;
    readonly buttonsSubElements: Locator;
    readonly DblButton: Locator;
    readonly MessageDblButton: Locator;
    readonly RightButton: Locator;
    readonly RightMessageButton: Locator;
    

    constructor(page: Page ) {
        super(page);
        this.page = page;
        this.buttonsSubElements= page.locator('text=Buttons');
        this.DblButton = page.locator('#doubleClickBtn');
        this.MessageDblButton = page.locator('#doubleClickMessage');
        this.RightButton = page.locator('#rightClickBtn');
        this.RightMessageButton = page.locator('#rightClickMessage');

    }

    async openButtonsSubElements(): Promise <void> {
        await this.buttonsSubElements.click();
    }
    async verifyDblButton (): Promise <void> {
        await this.DblButton.dblclick();
        
        await expect (this.MessageDblButton).toBeVisible();

    }
     async verifyRightButton (): Promise <void>{
        await this.RightButton.click({ button: 'right' });
        await expect (this.RightMessageButton).toBeVisible();
     }
    async verifyDynamicButton (): Promise <void> {
        await this.page.getByRole('button').nth(2).click();
        await expect(this.page.getByRole('button').nth(2)).toContainText('Click Me');
        await this.page.waitForSelector('text="You have done a dynamic click"', { state: 'visible' });
    }
}


    
    //await page.getByRole('button').nth(2).click();
    //await expect(page.getByRole('button').nth(2)).toContainText('Click Me');
    //await page.waitForSelector('text="You have done a dynamic click"', { state: 'visible' });



   

    
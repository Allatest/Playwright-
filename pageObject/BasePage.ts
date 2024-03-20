import { Locator, Page } from "playwright-core";

export default class BasePage {
    readonly page: Page;
    readonly ButtonElements: Locator;
    readonly AllCategories: Locator;
    

    constructor(page: Page) {
        this.page = page;
        this.ButtonElements = this.page.locator('.card-body', {has: page.getByText("Elements")});
        this.AllCategories = this.page.locator('.card-body');

    }

    async openButtonElements(): Promise<void> {
        await this.ButtonElements.click();
    }

    async getAllCategories(): Promise <string [] > {
        const actualElementsArray: string[] = [];
        const elementsCategoryCount = await this.AllCategories.count();

        for (let index = 0; index < elementsCategoryCount; index++) {
            let textElements: string = await this.AllCategories.nth(index).innerText();
            actualElementsArray.push(textElements);
            }
        return actualElementsArray;
    }
}


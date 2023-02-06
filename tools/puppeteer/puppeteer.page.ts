import {Page} from "../../framework";
import {ElementHandle, Page as PuppetPage} from "puppeteer";

export default class PuppeteerPage implements Page {
    private page: PuppetPage;

    constructor(page: PuppetPage) {
        this.page = page;
    }

    async goto(url: string): Promise<void> {
        await this.page.goto(url, { waitUntil: 'load', timeout: 10000 });
    }

    async takeScreenshot(): Promise<void> {
        await this.page.screenshot();
    }

    async click(inputId: string): Promise<void> {
        const element: ElementHandle = await this.page.$(`#${inputId}`);
        console.log(`Click element - ${inputId}`);
        await element?.click();
        return Promise.resolve(undefined);
    }

    check(inputId: string): Promise<void> {
        return Promise.resolve(undefined);
    }

    toggle(inputId: string): Promise<void> {
        return Promise.resolve(undefined);
    }

    async type(inputId: string, inputValue: string): Promise<void> {
        const element: ElementHandle = await this.page.$(`#${inputId}`);
        console.log(`Type element - ${inputId}`)
        await element.type(inputValue, { delay: 0 });
        return Promise.resolve(undefined);
    }

}
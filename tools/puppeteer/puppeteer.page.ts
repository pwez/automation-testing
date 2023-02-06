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
        expect(element)
    }

}
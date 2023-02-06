import {Browser, Page} from "../../framework";
import puppeteer, {Browser as PuppetBrowser} from "puppeteer";
import PuppeteerPage from "./puppeteer.page";

export default class PuppeteerBrowser implements Browser {

    browser: PuppetBrowser;

    constructor() {
        this.pages = new Map<number, Page>();
    }

    async launch() {
        this.browser = await puppeteer.launch({ headless: false, slowMo: 500 });
    }

    pages: Map<number, Page>;

    async close() {
        await this.browser.close();
    }

    async openPage(): Promise<Page> {
        const page = await this.browser.newPage();
        await page.setViewport({width: 1080, height: 1024});

        const puppeteerPage = new PuppeteerPage(page);
        this.pages.set(this.pages.size === 0 ? 0 : this.pages.size + 1, puppeteerPage);
        return puppeteerPage;
    };

}
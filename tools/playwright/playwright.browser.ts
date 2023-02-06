import {Browser, Page} from "../../framework";
import {Browser as PWrightBrowser, chromium} from "@playwright/test";
import PlaywrightPage from "./playwright.page";

export default class PlaywrightBrowser implements Browser {

    browser: PWrightBrowser;

    close(): void {
    }

    async launch() {
        this.browser = await chromium.launch({ headless: true });
    }

    async openPage(): Promise<Page> {
        let playwrightPage = new PlaywrightPage(await this.browser.newPage());
        this.pages.set(this.pages.size + 1, playwrightPage);
        return playwrightPage;
    }

    pages: Map<number, Page>;

}
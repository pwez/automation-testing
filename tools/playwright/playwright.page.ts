import {Page} from "../../framework";
import { Page as PWrightPage } from "@playwright/test";

export default class PlaywrightPage implements Page {

    page: PWrightPage;

    constructor(page: PWrightPage) {
        this.page = page;
    }

    async goto(url?: string): Promise<void> {
        await this.page.goto(url);
    }

    async takeScreenshot(): Promise<void> {
        await this.page.screenshot();
    }

}
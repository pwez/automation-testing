import {TextBehaviour} from "../../../framework/behaviour";
import {Page} from "puppeteer";

class PuppeteerTextBehaviour extends TextBehaviour {
    private page: Page;

    async type(inputId: string, inputValue?: string, expectedValue?: string) {
        await this.page.waitForSelector(inputId);
        await this.page.type(inputId, inputValue);
    }
}

export default PuppeteerTextBehaviour;
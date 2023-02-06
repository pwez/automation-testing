import {CheckboxBehaviour} from "../../../framework";
import {Page} from "puppeteer";

class PuppeteerCheckboxBehaviour extends CheckboxBehaviour {
    private page: Page;

    async check(inputId: string) {
        await this.page.waitForSelector(inputId);
        await this.page.click(inputId);
    }
}

export default PuppeteerCheckboxBehaviour;
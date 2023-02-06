import {RadioBehaviour} from "../../../framework/behaviour";
import {Page} from "puppeteer";

class PuppeteerRadioBehaviour extends RadioBehaviour {
    private page: Page;

    async toggle(inputId: string) {
        await this.page.waitForSelector(inputId);
        await this.page.click(inputId);
    }
}

export default PuppeteerRadioBehaviour;
import {ButtonBehaviour, Page} from "../../../framework";

class PuppeteerButtonBehaviour extends ButtonBehaviour {
    async click(page: Page, inputId: string) {
        await page.click(inputId);
    }

}

export default PuppeteerButtonBehaviour;
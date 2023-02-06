import {BehaviourProvider, Browser, Input, TestContext} from "../../framework";
import PuppeteerBrowser from "./puppeteer.browser";

export default class PuppeteerTestContext implements TestContext {
    behaviourProvider: BehaviourProvider;
    browser: Browser;
    inputs: Input[];

    constructor(inputs: Input[]) {
        this.behaviourProvider = new BehaviourProvider();
        this.browser = new PuppeteerBrowser();
        this.inputs = inputs;
    }

}
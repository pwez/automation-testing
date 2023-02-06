import {BehaviourProvider, Browser, TestContext} from "../../framework";
import PlaywrightBrowser from "./playwright.browser";
import PlaywrightBehaviourProvider from "./playwright-behaviour-provider";

export default class PlaywrightTestContext implements TestContext {
    behaviourProvider: BehaviourProvider;
    browser: Browser;

    constructor() {
        this.browser = new PlaywrightBrowser();
        this.behaviourProvider = new PlaywrightBehaviourProvider();
    }

}
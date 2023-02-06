import {TestContext} from "../../../framework";
import AutomationTestStep from "../../../framework/steps/automation-test-step";

class LaunchDemoQaStep extends AutomationTestStep {
    async execute(testContext: TestContext) {
        await super.execute(testContext);
        const page = await testContext.browser.openPage();
        await page.goto('https://demoqa.com/elements');
    }
}

export default LaunchDemoQaStep;
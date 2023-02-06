import {TestContext} from "../test";
import AutomationTestStep from "./automation-test-step";

class OpenBrowserStep extends AutomationTestStep {
    async execute(testContext: TestContext) {
        await super.execute(testContext);
        await testContext.browser?.launch();
    }
}

export default OpenBrowserStep;
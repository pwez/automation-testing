import {TestContext} from "../test";
import AutomationTestStep from "./automation-test-step";

class CloseBrowserStep extends AutomationTestStep {
    async execute(testContext: TestContext) {
        await super.execute(testContext);
        await testContext.browser?.close();
    }
}

export default CloseBrowserStep;
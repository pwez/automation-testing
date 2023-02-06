import {TestContext} from "../test";
import AutomationTestStep from "./automation-test-step";

class UndefinedStep extends AutomationTestStep {
    async execute(testContext: TestContext) {
        await super.execute(testContext);
        console.log('Do Nothing');
    }
}

export default UndefinedStep;
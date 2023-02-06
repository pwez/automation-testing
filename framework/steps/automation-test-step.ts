import {TestContext} from "../test";
import {TestStep} from "../test-step";

abstract class AutomationTestStep implements TestStep {
    async execute(testContext: TestContext) {
        console.log(`Executing step: '${this.constructor.name}'`);
    }
}

export default AutomationTestStep;
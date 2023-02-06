import {Behaviour, Page, TestContext} from "../../../framework";
import AutomationTestStep from "../../../framework/steps/automation-test-step";

class InteractWithDemoQa extends AutomationTestStep {
    async execute(testContext: TestContext) {
        await super.execute(testContext);
        const page: Page = testContext.browser.pages.get(0);
        for (let input of testContext.inputs) {
            let behaviour: Behaviour = testContext.behaviourProvider.behaviours.get(input.behaviourType);
            await behaviour.invoke(page, input);
        }
    }
}

export default InteractWithDemoQa;
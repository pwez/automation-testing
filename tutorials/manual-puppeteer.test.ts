import testsCases from "../test-cases";
import {TestContext, TestStep, TestSteps, TestStepType} from "../framework";
import PuppeteerTestContext from "../tools/puppeteer/puppeteer.test-context";


let minutesToTimeout = 3;
jest.setTimeout(1000 * 60 * minutesToTimeout);

// Besides the line where the test context is declared, no other line should have any language particular
// to puppeteer or playwright. Ultimately, I should be able to copy this code into the file that generates tests,
// where each line in here is wrapped in quotes to be an array of string that will be joined when writing the test file
const { description, testStepTypes, inputs: testCaseInputs } = testsCases[1];
const pretestStepTypes: TestStepType[] = [TestStepType.OPEN_BROWSER];
const posttestStepTypes: TestStepType[] = [TestStepType.CLOSE_BROWSER];
testStepTypes.unshift(...pretestStepTypes);
testStepTypes.push(...posttestStepTypes);

test(description, async () => {
    const testContext: TestContext = new PuppeteerTestContext(testCaseInputs);
    const testSteps: TestStep[] = testStepTypes.map((testStepType: TestStepType) => TestSteps.get(testStepType));
    for (const testStep of testSteps) {
        await testStep.execute(testContext);
    }
});

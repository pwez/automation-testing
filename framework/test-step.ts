import {TestContext, Input} from "./test";
import OpenBrowserStep from "./steps/open-browser.step";
import CloseBrowserStep from "./steps/close-browser.step";
import UndefinedStep from "./steps/undefined-step";
import LaunchDemoQaStep from "../test-cases/demoqa/steps/launch-demo-qa.step";
import InteractWithDemoQa from "../test-cases/demoqa/steps/interact-with-demo-qa";

/***
 * Represents a step that an automation test should execute. Steps
 * should be agnostic to underlying frameworks
 */
export interface TestStep {
    execute(testContext: TestContext, testStepInputs?: Input[]);
}

export enum TestStepType {
    UNDEFINED,
    OPEN_BROWSER,
    LAUNCH_DEMO_QA,
    INTERACT_WITH_DEMO_QA,
    CLOSE_BROWSER,
}

export const TestSteps: Map<TestStepType, TestStep> = new Map<TestStepType, TestStep>([
    [TestStepType.UNDEFINED, new UndefinedStep()],
    [TestStepType.OPEN_BROWSER, new OpenBrowserStep()],
    [TestStepType.CLOSE_BROWSER, new CloseBrowserStep()],
    [TestStepType.LAUNCH_DEMO_QA, new LaunchDemoQaStep()],
    [TestStepType.INTERACT_WITH_DEMO_QA, new InteractWithDemoQa()]
]);
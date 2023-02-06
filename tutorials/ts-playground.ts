import LaunchDemoQaStep from "../test-cases/demoqa/steps/launch-demo-qa.step";
import OpenBrowserStep from "../framework/steps/open-browser.step";
import UndefinedStep from "../framework/steps/undefined-step";
import CloseBrowserStep from "../framework/steps/close-browser.step";
import {TestStep} from "../framework/test-step";

// console.log(LaunchDemoQaStep);
// console.log(LaunchDemoQaStep.name);
// console.log(LaunchDemoQaStep.prototype);
const test: LaunchDemoQaStep = Object.create(LaunchDemoQaStep.prototype);
// console.log(test);

export const steps: Map<any, TestStep> = new Map<any, TestStep>([
    [UndefinedStep.prototype, new UndefinedStep()],
    [OpenBrowserStep.prototype, new OpenBrowserStep()],
    [CloseBrowserStep.prototype, new CloseBrowserStep()],
    [LaunchDemoQaStep.prototype, new LaunchDemoQaStep()],
]);

const testSteps: TestStep[] = [
    new OpenBrowserStep(),
    new LaunchDemoQaStep(),
    new CloseBrowserStep()
];

const stepMap: Map<any, TestStep> = new Map<any, TestStep>()
testSteps.forEach((testStep) => {
    stepMap.set(Object.getPrototypeOf(testStep), testStep);
});

console.log(stepMap.get(OpenBrowserStep.prototype));
console.log('\n');

let prototypeOf = Object.getPrototypeOf(OpenBrowserStep);
console.log(stepMap.get(prototypeOf));
let classOf = Object.create(prototypeOf);
console.log(classOf);

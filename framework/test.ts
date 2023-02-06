import {BehaviourProvider, BehaviourType} from "./behaviour";
import {Browser} from "./browser";
import {TestStepType} from "./test-step";

export interface TestContext {
    behaviourProvider: BehaviourProvider;
    browser: Browser;
    inputs: Input[]
}

/***
 * An input for an automation test to use
 * @param inputId Identifier of an HTML element to target
 * @param inputType The HTML type of input (e.g. button, checkbox, etc).
 * @param inputValue Value that should be used for the type of HTML element
 * @param expectedValue Expected value an HTML element should have, with or without input.
 */
export interface Input {
    inputId: string;
    behaviourType: BehaviourType;
    inputValue?: string;
    expectedValue?: string;
}

/***
 * Represents an automation test configuration
 * @param id Identifier for the test, which should be unique
 * @param description Detailed explanation of what is being testesd
 * @param testInputs List of test data input to be used
 */
export interface Test {
    id: string;
    description: string;
    testStepTypes: TestStepType[],
    inputs?: Input[]
}

import {Test, TestStepType} from "../../../framework";
import DemoqaTextTestInputs from "./demoqa-text.test-inputs";

const DemoqaTextTests: Test[] = [
    {
        id: '00-type-textbox-test',
        description: 'User can type in text fields on the DemoQA website',
        testStepTypes: [
            TestStepType.LAUNCH_DEMO_QA,
            TestStepType.INTERACT_WITH_DEMO_QA
        ],
        inputs: [...DemoqaTextTestInputs]
    }
];

export default DemoqaTextTests;
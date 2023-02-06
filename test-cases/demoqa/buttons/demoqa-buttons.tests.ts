import {Test, TestStepType} from "../../../framework";
import DemoqaButtonsTestInputs from "./demoqa-buttons.test-inputs";

const DemoqaButtonsTests: Test[] = [
    {
        id: '00-click-elements-test',
        description: 'User can click elements on the DemoQA website',
        testStepTypes: [
            TestStepType.LAUNCH_DEMO_QA,
            TestStepType.INTERACT_WITH_DEMO_QA
        ],
        inputs: [...DemoqaButtonsTestInputs]
    }
];

export default DemoqaButtonsTests;
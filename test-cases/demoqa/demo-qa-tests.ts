import {Test, TestStepType} from "../../framework";
import DemoQaTestInputs from "./demo-qa.test-inputs";

const DemoQaTests: Test[] = [
    {
        id: '00-launch-demoqa-test',
        description: 'User can launch the DemoQA website in an open browser',
        testStepTypes: [TestStepType.LAUNCH_DEMO_QA],
        inputs: []
    }, {
        id: '01-click-elements-test',
        description: 'User can click elements on the DemoQA website',
        testStepTypes: [
            TestStepType.LAUNCH_DEMO_QA,
            TestStepType.INTERACT_WITH_DEMO_QA
        ],
        inputs: [...DemoQaTestInputs]
    }
];

export default DemoQaTests;
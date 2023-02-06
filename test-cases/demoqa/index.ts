import {Test} from "../../framework";
import DemoqaButtonsTests from "./buttons/demoqa-buttons.tests";
import DemoqaTextTests from "./text-boxes/demoqa-text.tests";

const DemoqaTests: Test[] = [
    ...DemoqaButtonsTests,
    ...DemoqaTextTests
]

export default DemoqaTests;
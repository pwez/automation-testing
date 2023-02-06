import { Test } from "../framework";
import DemoqaTests from './demoqa';
import DiscoverTests from "./discover";

const tests: Test[] = [
    ...DemoqaTests,
    ...DiscoverTests
];

export default tests;

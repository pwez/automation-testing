import { Test } from "../framework/test";
import DiscoverTests from "./discover";
import GoogleTests from './demoqa';

const tests: Test[] = [
    ...DiscoverTests,
    ...GoogleTests
];

export default tests;

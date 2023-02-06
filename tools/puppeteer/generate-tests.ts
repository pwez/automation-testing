import {writeFile} from "fs";
import tests from "../../test-cases";
import {Input, BehaviourType, Test, TestStepType} from "../../framework";

let generatedTestDirectory = `${__dirname}/../../tests`;
let pretestStepTypes: TestStepType[] = [TestStepType.OPEN_BROWSER];
let posttestStepTypes: TestStepType[] = [TestStepType.CLOSE_BROWSER];

// TODO come back and figure out how to clear directory before writing to it
// readdir(generatedTestDirectory, (error, files) => {
//     if (error) throw error;
//     files.forEach(file => {
//         rmSync(`${generatedTestDirectory}/${file}`);
//     });
// });

let formatTestStepTypes = (testStepTypes: TestStepType[]) => {
    testStepTypes.unshift(...pretestStepTypes);
    testStepTypes.push(...posttestStepTypes);
    const reformattedTestStepTypes = testStepTypes.map(testStepType => `TestStepType.${TestStepType[testStepType]}`);
    return reformattedTestStepTypes.map(testStepType => {
        return `\t${testStepType}`;
    });
}

let formatInputs = (inputs: Input[]) => {
    return inputs.map((input: Input) => {
        return [
            `\t{\n\t\tinputId: '${input.inputId}'`,
                `\n\t\tbehaviourType: BehaviourType.${BehaviourType[input.behaviourType]}`,
                `\n\t\tinputValue: '${input.inputValue ?? ''}'`,
                `\n\t\texpectedValue: '${input.expectedValue ?? ''}'\n\t}, `
        ]
    }).join('\n');
};

tests.forEach((test: Test) => {
    const file = `${generatedTestDirectory}/${test.id}.test.ts`
    const content = [
        `import { Input, BehaviourType, TestContext, TestStep, TestSteps, TestStepType } from "../framework";`,
        `import PuppeteerTestContext from "../tools/puppeteer/puppeteer.test-context";`,
        ``,
        `const testCaseDataInput: Input[] = [`,
            `${formatInputs(test.inputs)}`,
        `];`,
        ``,
        `const testStepTypes = [`,
            `${formatTestStepTypes(test.testStepTypes).join(',\n')}`,
        `];`,
        ``,
        `test('${test.description}', async () => {`,
            `\tconst testContext: TestContext = new PuppeteerTestContext(testCaseDataInput);`,
            `\tconst testSteps: TestStep[] = testStepTypes.map((testStepType: TestStepType) => TestSteps.get(testStepType));`,
            `\tfor (const testStep of testSteps) {`,
                `\t\tawait testStep.execute(testContext);`,
            `\t}`,
        `});`
    ];
    writeFile(file, content.join('\n'), (error) => {
        if (error) throw error;
    });
});

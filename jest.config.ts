import type {Config} from 'jest';

const hargneTestReporterConfig = {
    outputPath: `${__dirname}/results/hargne-test-report.html`,
    pageTitle: "Test Report"
}

const hazyhTestReporterConfig = {
    darkTheme: true,
    pageTitle: "Test Report",
    publicPath: `${__dirname}/results`
}

let minutesUntilTestTimeout: number = 2;
const config: Config = {
    testTimeout: 1000 * 60 * minutesUntilTestTimeout,
    preset: "ts-jest",
    reporters: [
        "default",
        ["./node_modules/jest-html-reporter", hargneTestReporterConfig],
        ["./node_modules/jest-html-reporters", hazyhTestReporterConfig],
    ],
    verbose: false
};

export default config;
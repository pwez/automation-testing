# Automation Testing

## Abstract
The goal of this project is to implement simple automation tests that
go to Google, make a search, and click on one of the results. The 
tests should be agnostic to the implementation. That is, there should
be no language in the definitions/configurations of the test cases
that are specific to any underlying automation frameworks. Rather, the
tests utilize the underlying frameworks through an abstraction, such 
that at any time, the underlying framework can be toggled or have a 
version upgrade without breaking the tests.

## Requirements
- Two popular automation frameworks, **Puppeteer** & **Playwright** will
be leveraged for launching browsers and interacting with elements on 
pages. The use of these frameworks will be through an abstract layer that
keeps the test cases agnostic to them.
- The layer of abstraction between the tests and the underlying automation framework
will be in and of itself a framework that can be extended as needed.
- Test casess should be quick to add and configure using a simple data format 
such as JSON or CSV.
- A detailed report should be generated from the test results, and should include
tests details and screenshots.

## Project Framework
The project framework consists of the following elements, residing in the 
**_framework_** directory:

#### Behaviour
A behaviour refers to how an interaction can be performed on an element in a page. 
For example, a button behaviour would be something that may be clicked, and a radio
button behaviour refers to a radio element that can be toggled.

## Past Puppeteer Experience
The figured out how to convert arrays of JSON test configs into individual
.js files with individual tests. Then, Jest would run these files and create
the report off of them. The .js files would not be committed.

## Directories
#### framework
Contains the interfaces and abstract classes this project will use to enable
building framework-agnostic tests.
#### results
Contains generated HTML reports based upon the execution of the tests. Reporters
are configured in **_jest.config.ts_**.
#### test-cases
This is where the work should be done to set up new tests. No other directories
should need to be touched
#### tests
Contains generated test files that project should execute and generate reports for.
#### tools
Contains configurations for underlying framework implementations

## Terminal Commands
```npm run generate-puppeteer-tests``` - Generate tests which utilize the Puppeteer
framework

```npm run generate-playwright-tests``` - Generate tests which utilize the Playwright
framework

```npm run test``` - Runs the generated tests located in the **_tests_** directory

## Resources
[Playwright Docs](https://playwright.dev/docs/intro)  
[Playwright API](https://playwright.dev/docs/api/class-test)  
[Puppeteer Docs](https://pptr.dev/)     
[Puppeteer API](https://pptr.dev/api/puppeteer.puppeteernode)    
[Jest Puppeteer](https://github.com/argos-ci/jest-puppeteer)   

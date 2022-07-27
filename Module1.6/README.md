# Angular Testing MasterClass

## TypeScript

### JavaScript and More

TypeScript adds additional syntax to JavaScript to support a tighter integration with your editor. Catch errors early in your editor.

### A Result You Can Trust

TypeScript code converts to JavaScript, which runs anywhere JavaScript runs: In a browser, on Node.js or Deno and in your apps.

### Safety at Scale

TypeScript understands JavaScript and uses type inference to give you great tooling without additional

## Jasmine

Jasmine is a very popular JavaScript behavior-driven development (In BDD, you write tests before writing actual code) framework for unit testing JavaScript applications. It provides utilities that can be used to run automated tests for both synchronous and asynchronous code.

Jasmine has many features such as:

- It’s fast and has low overhead and no external dependencies.
- It’s a batteries included library and offers everything you need for testing your code.
- It’s available both for Node and the browser.
- It can be used with other languages like Python and Ruby.
- It does not require the DOM.
- It provides a clean and easy to understand syntax and also a rich and straightforward API.
- We can use natural language to describe the tests and the expected results.

## unit testing

Unit testing ensures that the units within your program are working as expected. Since the person who wrote a piece of code would have the greatest insight as to its expected behavior, it’s usually the developer’s responsibility to unit test. In combination with end-to-end tests and integration tests, unit testing helps ensure code quality early on in the development process.

### Best Practices

- Write tests for a number of scenarios

- Write good test names

- Set up automated tests

- Write deterministic tests
False positives and negatives are common in software testing, and we must be diligent in order to minimize them. The goal is to have consistent outputs for tests in order to verify the desired function. Unit tests should therefore be deterministic. In other words, as long as the test code isn’t changed, a deterministic test should have consistent behavior every time the test is run.

- Arrange, Act, and Assert (AAA)
The AAA protocol is a recommended approach for structuring unit tests. As a unit testing best practice, it improves your test’s readability by giving it a logical flow. AAA is sometimes referred to as the “Given/When/Then” protocol.

- Write tests before or during development
Test-driven development (TDD) is a software development process through which we enhance our test cases and software code in parallel. In contrast to a typical development methodology, TDD involves writing test code before production code. TDD has several advantages, including increasing the code coverage of unit tests.

- One use case per unit test
Each test should focus on a single use case, and verify the output is as expected for that tested method. By focusing on one use case, you’ll have a clearer line of sight into the root problem in the event that a test fails (as opposed to testing for multiple use cases).

- Avoid logic in tests
To reduce the chance of bugs, your test code should have little to no logical conditions or manual string concatenations.

- Reduce test dependencies
Tests should not be dependent on each other. By reducing dependencies between units, test runners can simultaneously run tests on different pieces of code. A unit can be considered testable only if its dependencies are staged (i.e. stubs) within the test code. No real-world or external dependencies should affect the outcome of the test.

- Aim for maximum test coverage
While we can aim for 100% test coverage, this might not be always desirable or possible. Such comprehensive testing may have budget and time requirements beyond our ability. In some cases, such comprehensive testing is theoretically impossible (i.e. undecidable). That being said, we should aim for the most possible coverage given our constraints.

- Keep proper test documentation
Maintaining test documentation will help both developers and, in some cases, the end users (e.g. in the case of an API).

## E2E Testing

End-to-end testing is a technique that tests the entire software product from beginning to end to ensure the application flow behaves as expected. It defines the product’s system dependencies and ensures all integrated pieces work together as expected.

The main purpose of End-to-end (E2E) testing is to test from the end user’s experience by simulating the real user scenario and validating the system under test and its components for integration and data integrity.

Software systems nowadays are complex and interconnected with numerous subsystems. If any of the subsystems fails, the whole software system could crash. This is a major risk and can be avoided by end-to-end testing.

### Benefits of End-to-End Testing

End-to-end testing has been more reliable and widely adopted because of the following benefits:

- Expand test coverage
- Ensure the correctness of the application
- Reduce time to market
- Reduce cost
- Detect bugs

Modern software systems allow subsystem interactions through advancements in technology. Whether the subsystem is the same or different from the main system, within or outside the organization, subsystem failures can cause adverse effects throughout the entire system.

System risks can be avoided by performing the following:

- Verifying the system flow
- Increasing test coverage areas
- Detecting issues associated with the subsystem

see more: <https://katalon.com/resources-center/blog/end-to-end-e2e-testing>

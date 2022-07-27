# Unit Testing and Test Driven Development in NodeJS

## What is Unit Testing?

A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system.

### Why Do We Unit Test?

- Software bugs hurt the business!
- Software testing catches the bugs before they get to the field.
- Need several levels of safety nets.

### Levels of Testing

- Unit Testing - Testing at the function level.
- Component Testing - Testing is at the library and compiled binary level.
- System Testing - Tests the external interfaces of a system which is a collection of sub-systems.
- Performance Testing - Testing done at sub-system and system levels to verify timing and resource usages are acceptable.

### Unit Testing Specifics

- Tests individual functions.
- A test should be written for each test case for a function (all positive and negative test cases).
- Groups of tests can be combined into test suites for better organization.
- Executes in the development environment rather than the production environment.
- Execution of the tests should be automated.

### A Simple Example

```sh
# Production Code
function str_len( theStr ){
 return theStr.length;
}
# A Unit Test
it(‘returns length of the string’,
function(){
 testStr = “1”; //Setup
 result = str_len(testStr); //Action
 expect(result).to.equal(1); //Assert
});

```

### Sumary

- Unit tests are the first safety net for catching bugs before they get to the field.
- Unit tests validate test cases for individual functions.
- They should build and run in the developer’s development environment.
- Unit tests should run fast!

## What is Test-Driven Development?

- A process where the developer takes personal responsibility for the quality of their code.
- Unit tests are written before the production code.
- Don’t write all the tests or production code at once.
- Tests and production code are both written together in small bits of functionality.

### What Are Some of the Benefits of TDD?

- Gives you the confidence to change the code.
- Gives you immediate feedback
- Documents what the code is doing.
- Drives good object oriented design.

### TDD Work Flow: Red, Green, Refactor

TDD has the following phases in its work flow:

- Write a failing unit test (the RED phase).
- Write just enough production code to make that test pass (the GREEN phase)-
- Refactor the unit test and the production code to make it clean (the REFACTOR phase).
- Repeat until the feature is complete.

### Uncle Bob’s 3 Laws of TDD

- You may not write any production code until you have written a failing unit test.
- You may not write more of a unit test than is sufficient to fail, and not compiling is failing.
- You may not write more production code than is sufficient to pass the currently failing unit test.

## What is Mocha?

- Mocha is a unit testing framework for Javascript that works both in NodeJS and in the browser.
- Implements an API for testing that follows Behavior Driven Development (BDD) to help write test describe system stories.
- Provides hooks to execute code before and after each individual test or suites of tests.
- Provides an API for testing asynchronous code via Promises.
- Has command line parameters to help filter which tests are executed and in what order.

## What is Chai?

- Chai is a javascript assertion library that can also be run in both NodeJS and in a browser.
- Like Mocha, Chai implements an API for specifying “expectations” that follows Behavior Driven Development (BDD) style of testing.
- Also provides an API for the more classical Test-Driven Development style of asserts.
- The BDD API provides a set of test calls that can be chained together to create a expectation that can be read as natural language. i.e. expect(result).to.equal(1).

### Creating a Unit Test with Mocha

- Unit tests are specified with
the “it” Mocha API call.
- Tests do verification of values
using the Chai expectations
API.

```sh
var expect=require(‘chai’).expect
it(‘returns true’, function(){
 expect(call()).to.equal(true);
});
```

## Test Discovery

- Mocha will automatically search for tests in a “test” directory inside the current working directory when it’s executed.
- Alternative test directories can be specified on the command line. i.e. mocha test_dir_one test_dir_two
- The sub-directories will automatically be searched if the “— recursive”command line parameter is specified.
- Specific test filenames can be specified as well. i.e. mocha tests/ test_file1.js
- More generalized globs (or regular expressions) can also be used or for specifying specific test files.
- Globs can also be used with the -g command line parameter to identify specific tests that should be run.

## Test Suites

- Tests suites are defined in Mocha with the “describe” API call.
- All tests defined inside of the “describe” function are part of that test suite.

```sh
var expect=require(‘chai’).expect
describe(‘test_suite’, function(){
    it(‘returns true’, function(){
        expect(call()).to.equal(true);
    });
});
```

## Test Setup and Teardown

### Mocha ‘Before’ and ‘After’ Hooks

```sh
describe(‘test_suite’, function(){
    before(function(){
        console.log(‘Before tests’);
    });
    it(‘returns true’, function(){
        expect(call()).to.equal(true);
    });
    after(function(){
        console.log(‘After tests’);
    });
});
```

- The Mocha ‘Before’ API call specifies code that executes before any test contained in a Describe block.
- The Mocha ‘After’ API call specifies code that executes after all test contained in a Describe block have
- Multiple calls can be specified in any Describe block.
- Can be placed anywhere in the Describe block.

### Mocha ‘beforeEach’ and ‘afterEach’

```sh
describe(‘test_suite’, function(){
    beforeEach(function(){
        console.log(‘before each’);
    });
    it(‘returns true’, function(){
        expect(call()).to.equal(true);
    });
    afterEach(function(){
        console.log(‘After each’);
    });
});
```

- The Mocha ‘beforeEach’ API call specifies code that executes before each test contained in a Describe block.
- The Mocha ‘afterEach’ API call specifies code that executes after each test contained in a Describe block.
- Can specify multiple and can be placed anywhere in the Describe block.

### Root-level Hooks

```sh
beforeEach(function(){
 console.log(‘before each’);
});
describe(‘test_suite’, function(){
 it(‘returns true’, function(){
 expect(call()).to.equal(true);
});
});
afterEach(function(){
 console.log(‘After each’);
});
```

- Mocha has an implied describe block known as the ‘root suite’ which is outside all other test suites.
- Any hooks specified outside of a describe block will be included in the ‘root suite’.
- Hooks in the root suite will apply to all tests found in all files.

## Assert Statements with the Chai Assert Library

### Javascript Truthy and Falsy

- Many of the expressions that Chai validates pass or fail depending on if the expression is “Truthy” or “Falsy”.
- “Truthy” and “Falsy” are Javascript concepts to specify when a value should evaluate to true or false.
- There are only six values that are “Falsy”: false, 0 (zero), empty string, null, undefined, and NaN (not a number).
- A value is “Truthy” if it is not “Falsy”.

## Assert API

- When the assert fails the specified message is included in the failure output.
- The expression parameter is tested for “truthiness” and if it passes the assert passes.
- Chai provides a classic assert API like what is typically found in other testing frameworks.
- Basic call with expression and message parameters.

```sh
it(‘assert_example’, function(){
 assert(false, “Assert fail!”);
});
```

### Additional Assert API Calls

- The Assert API provides MANY additional calls to easily verify different things.
- Most all of these API calls take one of two forms:
- Actual value compared with an expected value with an optional failure message.
- Expression to evaluate with an optional failure message.

```sh
it(“Assert types”, function(){
 assert.isTrue(true, “true”);
 assert.isNaN(1.1, “NaN”);
 assert.exists(foo, “!Exists”);
 assert.isArray(obj, “!Array”);
});
```

The additional assert API calls include calls for:

- Verifying equality of one value to another
- Verifying the type of a value
- Verifying the properties of objects
- Verifying exceptions are or are not thrown

```sh
assert.equal(actual, expected);
assert.isString(actual, expected);
assert.property(object, propName);
assert.throws(function);
```

- Complete API defined at: <http://www.chaijs.com/api/assert>

### BDD Style Asserts

- Chai provides a BDD assert style which is exposed through the “expect” and “should” API calls.
- This API allows you to chain additional calls to create a natural language representation of the expected behavior.
- The “expect” call is added as a reference to your script and is passed in a value to test
- “should” is called by your script and adds a “should” property to Object.prototype.

```sh
var expect = require(‘chai’).expect;
var should = require(‘chai’).should();
it(‘likes BDD!’, function(){
    var result = productionCall();
    expect(result).to.equal(true);
    result.should.equal(true);
});
```

### Language Chains

- Chai provides a set of chainable getter methods for creating natural language assertions.

```sh
to, be, been, is, that, which, has,
have, with, at, of, same, but, does
```

- Combine these language chain calls together along with the actual assertion call to create a natural language statement.
- For example here are two assertions which are essentially equivalent:

```sh
expect(result).to.equal(1);
expect(result).to.be.that.which.is.e
qual(1);
```

### Assertion Calls

Like the classical API, the BDD
API provides an impressive
assortment of assertion calls
such as:

- Verifying equality (expect(result).to.equal(1);).
- Verifying true/false (expect(result).to.be.true;).
- Verifying type (expect(result).to.be.instanceof(a);).
- Verifying exceptions (expect(badFn).to.throw();).

Complete API defined at: <http://www.chaijs.com/api/bdd>

## Testing Asynchronous Code

### What is Asynchronous Code?

- Asynchronous calls return immediately and continue to run in the background.
- Asynchronous calls generally notify the caller that they have completed their work either via a callback function, a Javascript “promise”, or the new async/await javascript keywords.
- Examples of asynchronous calls are:
- Timers (i.e. setTimeout)
- HTTP Requests (i.e. http.get)
- Database Operations

### Async Testing of Callbacks

- To test asynchronous code with callbacks pass a “done” parameter to your test.
- This is a callback function provided by Mocha.
- Mocha will not complete the test until the “done” callback has been called.

```sh
function myAsyncFunction(callback){
 setTimeout(function(){
 callback(“blah”);
 }, 50);
}
it(‘callback test’, function(done){
 myAsyncFunction(function(str){
 expect(str).to.equal(“blah”);
 done();
 });
});
```

### Async Testing with Promises

- To test asynchronous code with promises you simply return the promise from your test.
- Mocha delays the test until the returned promise is resolved.

```sh
function promiseFunc(){
 return new Promise(
 (resolve, reject)=>{
 setTimeout(()=>{
 resolve(“blah”);}, 50);
 });
}
it(“promise test”, function(){
 return promiseFunc().then(res=>{
 expect(res).to.equal(“blah”);
 });
});
```

### Async Testing with Async/Await

- To test with the async/await keywords specify “async” on your unit test.
- Inside your test you then call “await” on the asynchronous function that you’re testing.
- Your unit test will return a promise which Mocha will wait to be resolved.

```sh
function promiseFunc(){
 return new Promise(
 (resolve, reject)=>{
 setTimeout(()=>{
 resolve(“blah”);}, 50);
 });
}
it(“await test”, async ()=>{
 var res = await promiseFunc();
 expect(res).to.equal(“blah”);
});
```

## Unit Test Isolation with Dummies, Fakes, Stubs, Spies, and Mocks

### What Are Test Doubles?

- Almost all code depends on and collaborates with other parts of the system.
- Those other parts of the system are not always easy to replicate in the unit test environment or would make tests slow if used directly.
- Test doubles are objects that are used in unit tests as replacements to the real production system collaborators.

### Types of Test Doubles

- Dummy - Objects that can be passed around as necessary but do not have any type of test implementation and should never be used.
- Fake - These object generally have a simplified functional implementation of a particular interface that is adequate for testing but not for production.
- Stub - These objects provide implementations with canned answers that are suitable for the test.
- Spies - These objects provide implementations that record the values that were passed in so they can be used by the test.
- Mocks - These objects are pre-programmed to expect specific calls and parameters and can throw exceptions when necessary.

### Mock Frameworks

- Most mock frameworks provide easy ways for automatically creating any of these types of test doubles at runtime.
- They provide a fast means for creating mocking expectations for your tests.
- They can be much more efficient than implementing custom mock object of your own creation.
- Creating mock objects by hand can be tedious and error prone.

#### Sinon.JS

- Javascript Mocking Framework
- Works in NodeJS and a web browser
- Works well with Mocha and Chai

### Creating a Spy

The most basic test double provided by Sinon is the spy.
A spy is created by calling thesinon.spy method.
A spy keeps track of:

- How many times a function was called.
- What parameters were passed to the function.
- What value the function returned or if it threw.

```sh
it(‘tests spies’, function(){
 var callback = sinon.spy();
 prodFunction(callback);
 expect(callback).to.have.
 been.called();
});
```

### Method Wrapping Spy

- Spies can be created in two fashions: either anonymous or wrapping a particular method.
- Anonymous spies are used to create fake functions that need to be spied on during testing.
- Method wrapping spies are created on existing functions such as class methods.

```sh
//Method Wrapping Spy
it(‘tests spies’, function(){
 var tc = new TestClass();
 sinon.spy(tc, “testFunc”);
 tc.testFunc();
 expect(tc.testFunc).to.have.
 been.called();
});
```

### Spy API

Sinon provides an extensive API for testing calls made to a spy. For
example:

- spy.callCount - The number of times the spy was called.
- spy.called - True if the spy was called at least once.
- spy.calledWith(arg1, arg2, …) - Spy was called with the specified arguments (and possibly others)
- spy.returnValues - Array of return values made from the spied on function for each call to the function.
- spy.threw - The spy threw an exception at least once.
- Complete API available at: <https://sinonjs.org/releases/v6.1.5/spies/>

### Sinon Stubs

- Sinon also provides an API for implementing stub test doubles.
- Stubs are like spies in that they can be anonymous or wrap existing functions.
- Stubs support the full Spy testing API.
- Stubs are different from spies in that they do NOT call the wrapped function
- Stubs allow you to modify the behavior of the stubbed function call.

```sh
//Sinon Stub
it(‘tests stub’, function(){
 var tc = new TestClass();
 sinon.stub(tc, “testFunc”);
 testCall(tc)
 expect(tc.testFunc).to.have.
 been.called();
});
```

### Sinon Mocks

- Sinon also provides an API for creating mock objects.
- Sinon mocks provide all the capabilities of Sinon spies and stubs with the addition of preprogrammed expectations.
- A mock will verify that the specified expectations have occurred and if not will fail the test.

```sh
// Sinon Mocks
it(‘tests mock’, function(){
 var tc = new TestClass();
 var mock = sinon.mock(tc);
 mock.expects(‘func’).once();
 testCall(tc)
 mock.verify();
});
```

### Sinon Mocks Expectations

Sinon Mocks provide an extensive API of expectations that can be set. For example:

- expectation.atLeast - The mock was called at least the specified number of times.
- expectation.never - Verifies the mock was never called.
- expectation.once - Verifies the mock was called once.
- expectation.withArgs - The mock was called with the specified arguments and possibly others.
- expectation.on(obj) - The mock was called with the specified object as “this”.
- Complete API available at: <https://sinonjs.org/releases/v6.1.5/mocks/>

### Sinon Cleanup

- Sinon creates all of its test doubles in a sandbox.
- Although you can create your own sandbox you will typically use Sinon’s default sandbox.
- After each test the sandbox needs to be reset to clear out all the test doubles that were created by calling the sinon.restore method.

```sh
// Sinon Cleanup
afterEach(()=>{
 sinon.restore();
});
```

### Sinon-Chai

- The Sinon-Chai library continues the BDD style expectations provide by Chai when using Sinon test doubles.
- Sinon-Chai provides an API that on your mocks that mimics the Chai expect and should APIs.
- This helps ensure your unit tests consistently follow the Chai BDD style of specifying expectations.

```sh
//Method Wrapping Spy
it(‘tests spies’, function(){
 var tc = new TestClass();
 sinon.spy(tc, “testFunc”);
 tc.testFunc();
 tc.should.have.been.called();
});
```

## Test-Driven Development Best Practices

### Always Do the Next Simplest Test Case

- Doing the next simplest test case allows you to gradually increase the complexity of your code.
- If you jump into the complex test cases too quickly you will find yourself stuck writing a lot of functionality all at once.
- Beyond just slowing you down, this can also lead to bad design decisions.

### Use Descriptive Test Names

- Code is read 1000 times more than it’s written. Make it clear and readable!
- Unit tests are the best documentation for how your code works. Make them easy to understand.
- Test suites should name the class or function under test and the test names should describe the functionality being tested.

### Keep Test Fast

One of the biggest benefits of TDD is the fast feedback on how your changes have affected things.
This goes away if your unit tests take more than a few seconds to build and run.
To help your test stay fast try to:

- Keep console output to a minimum. This slows things down and can clutter up the testing framework output.
- Mock out any slow collaborators with test doubles that are fast.

### Use Code Coverage Tools

- Once you have all your test cases covered and you think you’re done run your unit test through a code coverage tool
- This can help you identify any test cases you may have missed (i.e. negative test cases).
- You should have a goal of 100% code coverage in functions with real logic in them (i.e. not simple getters/setters).
- Istanbul is easy to install (npm install —save-dev nyc) and can generate an easy to use html output.

### Run Your Tests Multiple Times and In Random Order

- Running your tests many times will help ensure that you don’t have any flaky tests that fail intermittently.
- Running your tests in random order ensures that your tests don’t have any dependencies between each other.
- The “choma” plugin for Mocha provide randomization of the execution order of the tests in Mocha.

### Use a Static Code Analysis Tool

- JSHint is an excellent open source static code analysis tool that will find errors in your code that you may have missed in your testing.
- JSHint can verify your javascript code meets your team’s coding standard.

## Overview of Code Coverage and NYC

### What is Code Coverage Analysis?

- Code coverage tools analyze the execution of your production code as you run your unit tests to see what parts of the production code were executed.
- Code coverage tools produce a report at the end of the execution of your unit tests specifying the coverage of the tests.
- The coverage report can tell you if you have any holes in your tests where parts of the production code are not being tested.
- Your goal should be to have 100% code coverage of all your production code by your unit tests (barring simple getter/setter functions).

### Types of Code Coverage Analysis

- Line - With this type of analysis the coverage report specifies which executable lines of the production code were executed.
- Statement - This type of coverage goes a step beyond line coverage to verify that every individual statement is covered (even
multiple statements on the same line.
- Branch - Branch testing reports on the percentage of each branch point that has been executed at least once.
- Modified Condition/Decision - This is an advance form of branch coverage which verifies that all entry and exit points in a program has been invoked at least once and with all possible condition criteria combinations.

### Istanbul (nyc)

- Code coverage plugin for Javascript both in NodeJS and the browser.
- Provides Line, Statement, and Branch coverage
- Can generate reports to the console or in HTML.
- Easy to install via “npm install nyc” and works well with Mocha.
- Webstorm integrates Istanbul code coverage results into the IDE.

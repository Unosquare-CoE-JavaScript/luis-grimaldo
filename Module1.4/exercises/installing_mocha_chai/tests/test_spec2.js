var expect = require("chai").expect;

before('Root setup code', () => {
    console.log("Root Setup code");
});

after('Root teardown code', () => {
    console.log("Root Teardown code");
});

beforeEach('Root setup for each test', () => {
    console.log("Root Setup code");
});

afterEach('Root teardown for each test', () => {
    console.log("Root Teardown code");
});

describe('test_suite2', () => {
    
    it('test3', ()=>{
        console.log('test3');
        expect(true).to.equal(true);
    });
    
});
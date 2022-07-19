var expect = require("chai").expect;

describe('test_suite1', () => {
    before('setup code', () => {
        console.log("Setup code");
    });

    after('teardown code', () => {
        console.log("Teardown code");
    });

    beforeEach('setup for each test', () => {
        console.log("Setup code");
    });

    afterEach('teardown for each test', () => {
        console.log("Teardown code");
    });

    it('test1', ()=>{
        console.log('test1');
        expect(true).to.equal(true);
    })

    it('test2', ()=>{
        console.log('test2');
        expect(true).to.equal(true);
    })
});
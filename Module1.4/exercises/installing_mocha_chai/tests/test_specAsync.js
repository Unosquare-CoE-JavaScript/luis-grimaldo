var expect = require("chai").expect;

function myAsyncFunction(callback){
    setTimeout(()=>{
        callback("blah");
    }, 50);
}

function myPromiseFunction(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("blah");
        },50);
    })
}

it("test_async", (done) => {
    myAsyncFunction(function(str){
        expect(str).to.equal("blah");
        done();
    });
});

it("test_promise", () => {
    myPromiseFunction(function(res){
        expect(res).to.equal("blah");
    });
});

it("test_async_await", async () => {
    var result = await myPromiseFunction();
    expect(result).to.equal("blah");
});
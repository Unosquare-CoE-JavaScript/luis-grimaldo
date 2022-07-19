var expect = require("chai").expect;
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var request = require("request");
var getUsers = require("../get_users");
chai.should();
chai.use(sinonChai);

describe('GetUsers Tests', () => {

    var spy;

    beforeEach(() => {
        spy = sinon.spy();
        sinon.stub(request, 'get').callsFake((url,callback) => {
            callback({},{body:'{"users":["user1","user2"]}'});
        });
    });

    afterEach(() => {
        sinon.restore();
    });

    it('calls the callback', () => {
        getUsers(spy);
        spy.should.have.been.calledOnce;
    });

    it('Calls the correct URL', () => {
        getUsers(spy);
        request.get.should.have.been.calledWith("https://www.mysite.com/api/users");
    });

    it('Return correct data', () => {
        getUsers(spy);
        spy.should.have.been.calledWith({users:['user1','user2']});
    });
});
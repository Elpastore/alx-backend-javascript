const request = require("request");
const {describe, it} = require("mocha");
const expect = require("chai").expect;

describe("Index page", function() {
    const options = {
	url: "http://localhost:7865/",
	method: "GET"
    }
    it("check correct status code", function(done) {
	request(options, function(err, res, body) {
	    expect(res.statusCode).to.equal(200);
	    done();
	});
    });
    it("check correct content", function(done) {
	request(options, function(err, res, body) {
	    expect(body).to.contain("Welcome to the payment system");
	    done();
	});
    });

});

describe("Cart page", function() {
    it('check status code ', function(done) {
        request('http://localhost:7865/cart', function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
    it('check content', function(done) {
        request('http://localhost:7865/cart/12', function(error, response, body) {
        expect(body).to.contain('Payment methods for cart 12');
        done();
        });
    });

    it("check incorrect url", function(done) {
        request.get("http//localhost:7865/cart/laye", function(error, response, body) {
            expect(response.statusCode).to.equal(404);
            done();
        });
    });
});
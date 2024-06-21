const sinon = require("sinon");
const sendPaymentRequestToApi = require("./5-payment");
const assert = require("assert");

describe("sendPaymentRequestToApi", function() {
  let consoleLogSpy;

  beforeEach(function() {
    // Set up the spy before each test
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(function() {
    // Restore the original method after each test
    consoleLogSpy.restore();
  });

  it("should log the correct total and be called once when called with 100 and 20", function() {
    sendPaymentRequestToApi(100, 20);
    assert(consoleLogSpy.calledOnceWithExactly('The total is: 120'));
    assert(consoleLogSpy.calledOnce);
  });

  it("should log the correct total and be called once when called with 10 and 10", function() {
    sendPaymentRequestToApi(10, 10);
    assert(consoleLogSpy.calledOnceWithExactly('The total is: 20'));
    assert(consoleLogSpy.calledOnce);
  });
});

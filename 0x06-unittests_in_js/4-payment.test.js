const sinon = require("sinon");
const sendPaymentRequestToApi = require("./3-payment");
const Utils = require("./utils");
const assert = require("assert");

describe("sendPaymentRequestToApi", function() {
  it("check that Utils.calculateNumber was called once", function() {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const consoleLogSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    assert(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20));
    assert(consoleLogSpy.calledOnceWithExactly('The total is: 10'));

    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });
});

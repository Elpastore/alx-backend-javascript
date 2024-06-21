const calculateNumber = require('./2-calcul_chai');
const chai = require('chai');
const expect = chai.expect;

describe('calculateNumber', function () {
  describe('SUM', function () {
    it('should return 6 when inputs are 1.4 and 4.5', function () {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('should return 5 when inputs are 1.4 and 3.5', function () {
      expect(calculateNumber('SUM', 1.4, 3.5)).to.equal(5);
    });
  });

  describe('SUBTRACT', function () {
    it('should return -3 when inputs are 1.4 and 4.5', function () {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('should return -2 when inputs are 1.4 and 3.5', function () {
      expect(calculateNumber('SUBTRACT', 1.4, 3.5)).to.equal(-3);
    });
  });

  describe('DIVIDE', function () {
    it('should return 0.2 when inputs are 1.4 and 4.5', function () {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return Error when divisor is 0', function () {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });

    it('should return 2.5 when inputs are 5.4 and 2', function () {
      expect(calculateNumber('DIVIDE', 5.4, 2)).to.equal(2.5);
    });
  });

  describe('Invalid type', function () {
    it('should throw an error for invalid type', function () {
      expect(() => calculateNumber('INVALID', 1.4, 4.5)).to.throw('Invalid operation type');
    });
  });
});

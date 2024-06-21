const calculateNumber = require('./1-calcul');
const assert = require('assert');

describe('calculateNumber', function () {
  describe('SUM', function () {
    it('should return 6 when inputs are 1.4 and 4.5', function () {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('should return 5 when inputs are 1.4 and 3.5', function () {
      assert.strictEqual(calculateNumber('SUM', 1.4, 3.5), 5);
    });
  });

  describe('SUBTRACT', function () {
    it('should return -3 when inputs are 1.4 and 4.5', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('should return -2 when inputs are 1.4 and 3.5', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 3.5), -3);
    });
  });

  describe('DIVIDE', function () {
    it('should return 0.2 when inputs are 1.4 and 4.5', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return Error when divisor is 0', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });

    it('should return 2.5 when inputs are 5.4 and 2', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 5.4, 2), 2.5);
    });
  });

  describe('Invalid type', function () {
    it('should throw an error for invalid type', function () {
      assert.throws(() => {
        calculateNumber('INVALID', 1.4, 4.5);
      }, Error, 'Invalid operation type');
    });
  });
});

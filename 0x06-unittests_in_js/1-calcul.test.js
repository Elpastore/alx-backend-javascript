const calculateNumber = require('./1-calcul');
const assert = require('assert');

describe('CalculateNumber test', function () {
  describe('SUM test cases', function () {
    it('should return 6 when type is SUM and inputs are 1.4 and 4.5', function () {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('should return 4 when type is SUM and inputs are 1.4 and 2.4', function () {
      assert.strictEqual(calculateNumber('SUM', 1.4, 2.4), 3);
    });
  });

  describe('SUBTRACT test cases', function () {
    it('should return -4 when type is SUBTRACT and inputs are 1.4 and 4.5', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('should return -1 when type is SUBTRACT and inputs are 1.4 and 2.6', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 2.6), -2);
    });
  });

  describe('DIVIDE test cases', function () {
    it('should return 0.2 when type is DIVIDE and inputs are 1.4 and 4.5', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return Error when type is DIVIDE and inputs are 1.4 and 0', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });

    it('should return 5 when type is DIVIDE and inputs are 10 and 2', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 10, 2), 5);
    });
  });

  describe('Invalid type test cases', function () {
    it('should throw an error for an invalid type', function () {
      assert.throws(() => calculateNumber('MULTIPLY', 1.4, 2.6), /Invalid type/);
    });
  });
});

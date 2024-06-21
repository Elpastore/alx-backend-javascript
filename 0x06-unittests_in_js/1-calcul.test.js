const calculateNumber = require('./1-calcul');
const assert = require('assert');

describe('CalculateNumber test', function () {
  describe('Add test case', function () {
    it('should return 5 when type is SUM and inputs are 1.2 and 4', function () {
      assert.strictEqual(calculateNumber('SUM', 1.2, 4), 5);
    });

    it('should return 4 when type is SUM and inputs are 1.2 and 2.4', function () {
      assert.strictEqual(calculateNumber('SUM', 1.2, 2.4), 3);
    });
  });

  describe('SUBTRACT test case', function () {
    it('should return 5 when type is SUBTRACT and inputs are 1.2 and -4', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.2, -4), 5);
    });

    it('should return -1 when type is SUBTRACT and inputs are 1.4 and 2.6', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 2.6), -2);
    });
  });

  describe('DIVIDE test case', function () {
    it('should return 2 when type is DIVIDE and inputs are 10 and 4.7', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 10, 4.7), 2);
    });

    it('should return Error when type is DIVIDE and inputs are 10 and 0', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 10, 0), 'Error');
    });

    it('should return 5 when type is DIVIDE and inputs are 10 and 2', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 10, 2), 5);
    });
  });
});

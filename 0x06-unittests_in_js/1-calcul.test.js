const calculateNumber = require('./1-calcul');
const assert = require('assert');

describe('CalculateNumber test', function () {
  describe('Add test case', function () {
    it('test if type is SUM', function () {
      assert.strictEqual(calculateNumber('SUM', 1.2, 4), 5);
    });
  });

  describe('SuBSTRACT test case', function () {
    it('test if type is SUBSTRACT', function () {
      assert.strictEqual(calculateNumber('SUBSTRACT', 1.2, -4), 5);
    });
  });

  describe('DIVIDE test case', function () {
    it('test if type is DIVIDE', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 10, 4.7), 2);
    });

    it('DIVIDE test case', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 10, 0), 'Error');
    });
  });
});

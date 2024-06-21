const calculateNumber = require('./0-calcul');
const assert = require('assert');

describe('CalculateNumber', function () {
  it('should return 6 when inputs are 1.4 and 4.5', function () {
    assert.strictEqual(calculateNumber(1.4, 4.5), 6);
  });

  it('should return 5 when inputs are 1.4 and 3.5', function () {
    assert.strictEqual(calculateNumber(1.4, 3.5), 5);
  });

  it('should return 3 when inputs are 1.2 and 1.4', function () {
    assert.strictEqual(calculateNumber(1.2, 1.4), 2);
  });

  it('should return -1 when inputs are -1.4 and 0.4', function () {
    assert.strictEqual(calculateNumber(-1.4, 0.4), -1);
  });

  it('should return 0 when inputs are -0.4 and 0.4', function () {
    assert.strictEqual(calculateNumber(-0.4, 0.4), 0);
  });
});

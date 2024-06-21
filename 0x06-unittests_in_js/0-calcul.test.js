const calculateNumber = require('./0-calcul');
const assert = require('assert');

describe("Test case", function() {
  it("test if 1.2 and 5 is equal to 5", function() {
    assert.strictEqual(calculateNumber(1.2, 4), 5);
  });
  it("test if 1.8 and 4.6 is equal to 6", function() {
    assert.strictEqual(calculateNumber(1.8, 4.6), 7);
  });

  it("test if 2 and 3 is equal to 5", function() {
    assert.strictEqual(calculateNumber(2, 3), 5);
  });

  it("test if 0 and 0 is equal to 0", function() {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

  it("test if negatif number works", function() {
    assert.strictEqual(calculateNumber(-2, -7.8), -10);
  });

  it("test if negatif and positif number wors", function() {
    assert.strictEqual(calculateNumber(2.8, -8), -5);
  });

  it("test if negatif and positif number wors", function() {
    assert.strictEqual(calculateNumber(8, -2.8), 5);
  });
})

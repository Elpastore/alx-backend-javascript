const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('Test case', () => {
  it('test if 1.2 and 5 is equal to 6', () => {
    assert.strictEqual(calculateNumber('SUM', 1.2, 5), 6);
  });
  it('test if 1.8 and 4.6 is equal to 7', () => {
    assert.strictEqual(calculateNumber('SUM', 1.8, 4.6), 7);
  });

  it('test if 2 and 3 is equal to 5', () => {
    assert.strictEqual(calculateNumber('SUM', 2, 3), 5);
  });

  it('test if 0 and 0 is equal to 0', () => {
    assert.strictEqual(calculateNumber('SUM', 0, 0), 0);
  });

  it('test if negatif number works', () => {
    assert.strictEqual(calculateNumber('SUM', -2, -7.8), -10);
  });

  it('test if negatif and positif number wors', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 2.8, -8), 11);
  });

  it('test if negatif and positif number wors', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 8, -2.8), 11);
  });

  it('test if error is returned when dividing by zero', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 2, 0), 'Error');
  });

  it('test divide', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 10, 4.8), 2);
  });
});

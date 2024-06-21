const calculateNumber = require('./0-calcul');
const assert = require('assert');

describe('Test cases', function() {
  it('test 1', function() {
    assert(calculateNumber(1, 3), 4);
  });
  it('test 2', function() {
    assert(calculateNumber(1, 3.7), 5);
  });
  it('test 3', function() {
    assert(calculateNumber(1.2, 3.7), 5);
  });
  it('test 4', function() {
    assert(calculateNumber(1.5, 3.7), 6);
  });
})
const calculateNumber = require('./2-calcul_chai');
const chai = require('chai');
const expect = chai.expect;
describe('Test cases', function() {
  it('Add test', function() {
    expect(calculateNumber('SUM', 1.2, 5)).to.equal(6);
  });

  it('Subtract test', function() {
    expect(calculateNumber('SUBTRACT', -1.8, 3)).to.equal(-5);
  });

  it('Divide test', function() {
    expect(calculateNumber('DIVIDE', 14, 0.0)).to.equal('Error');
  });

  it('Divide test', function() {
    expect(calculateNumber('DIVIDE', 15, 2.6)).to.equal(5);
  });
})
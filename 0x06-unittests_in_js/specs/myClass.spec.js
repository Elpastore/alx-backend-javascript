// specs/myClass.spec.js
let chai;
let expect;
const Myclass = require('../src/myClass'); // CommonJS import for MyClass

describe('Test suite for MyClass', function () {
  let myObj;
  beforeEach(async function () {
    // Dynamically import Chai
    chai = await import('chai');
    expect = chai.expect;
    myObj = new Myclass()
    
  });

  it("Test the add method", function () {
    expect(myObj.add(2, 3)).to.equal(5); // Adjusted expectation to match your logic
  });

  it("Test the multiple method",  function () {
    expect(myObj.multiple(2, 3)).to.equal(6);
  });
});

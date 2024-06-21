const getPaymentTokenFromAPI = require('./6-payment_token');
const assert = require('assert');

describe('getPaymentTokenFromAPI', function() {
  it('should resolve with the correct data when success is true', function(done) {
    getPaymentTokenFromAPI(true)
      .then(response => {
        assert.deepStrictEqual(response, { data: 'Successful response from the API' });
        done();
      })
      .catch(err => {
        done(err);
      });
  });
});

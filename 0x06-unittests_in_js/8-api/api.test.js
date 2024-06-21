const request = require('request');
const { expect } = require('chai');
const server = require('./api');

const BASE_URL = 'http://localhost:7865';

describe('API tests', () => {
  before(() => {
    server;
  });

  describe('GET /', () => {
    it('should return status 200', (done) => {
      request.get(BASE_URL, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it('should return the message "Welcome to the payment system"', (done) => {
      request.get(BASE_URL, (error, response, body) => {
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });
  });


  after(() => {
    server.close();
  });
});

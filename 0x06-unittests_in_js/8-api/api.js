const express = require('express')
const app = express();
const port = 7865;

app.get('/', (request, response) => {
    response.send('Welcome to the payment system');
});

const server = app.listen(PORT, () => {
    console.log(`API available on localhost port ${PORT}`);
  });
  
module.exports = server;
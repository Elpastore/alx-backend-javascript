const express = require('express');

const app = express();
const port = 7865;

app.get('/', (request, response) => {
  response.send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (request, response) => {
    response.send(`Payment methods for cart ${request.params.id}`);
});

app.get('/available_payments', (request, response) => {
    response.set("Content-Type", "application/json");
    const payMethods = {
	payment_methods: {
          credit_cards: true,
          paypal: false
	}
    }
    response.send(payMethods);
});

app.post('/login', (req, res) => {
    const { userName } = req.body;
    res.send(`Welcome ${userName}`);
  });

app.listen(port, () => {
    console.log(`API available on localhost port ${port}`);
});

module.exports = app;

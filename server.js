const express = require('express');
const app = express();
const drinks = require('./models/drinks');


app.get('/drinks', (req, res) => {
  res.send(drinks);
});


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
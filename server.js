const express = require('express');
const app = express();
const drinks = require('./models/drinks');


app.set('view engine', 'ejs');


app.get('/drinks', (req, res) => {
  res.render('index', { drinks: drinks });
});


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

const express = require('express');
const app = express();
const drinks = require('./models/drinks');


app.set('view engine', 'ejs');


app.get('/drinks/:id', (req, res) => {
    res.send(req.params.id);
  });

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

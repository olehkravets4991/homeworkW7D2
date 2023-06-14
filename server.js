const express = require('express');
const app = express();
const drinks = require('./models/drinks');


app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));


app.get('/drinks/:id', (req, res) => {
    const drinkId = req.params.id;
    const drink = drinks[drinkId];
    res.render('show', { drink: drink });
  });

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

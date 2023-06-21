// const express = require('express');
// const app = express();
// const drinks = require('./models/drinks');


// app.set('view engine', 'ejs');

// app.use(express.static(__dirname + '/public'));


// app.get('/drinks/:id', (req, res) => {
//     const drinkId = req.params.id;
//     const drink = drinks[drinkId];
//     res.render('show', { drink: drink });
//   });

//   app.get('/drinks',(req, res) => {
//     res.render('index')
//   });

// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });

// const express = require('express');
// const app = express();
// const port = 3000;

// app.set('view engine', 'ejs');
// app.use(express.static('public'));

// app.get('/', (req, res) => {
//   res.send('Welcome to the Gitpub App!');
// });

// app.get('/drinks', (req, res) => {
//   const drinkNames = ['latte', 'cappuccino', 'espresso', 'macchiato'];
//   res.render('index', { drinks: drinkNames });
// });

// app.get('/drinks/:id', (req, res) => {
//   const drinkNames = ['latte', 'cappuccino', 'espresso', 'macchiato'];
//   const drinkIndex = req.params.id;
//   const drink = drinkNames[drinkIndex];
//   res.render('show', { drink: drink });
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Welcome to the Gitpub App!');
});

app.get('/drinks', (req, res) => {
  const drinkNames = [
    { name: 'latte', image: 'latte.png', price: '$3.99' },
    { name: 'cappuccino', image: 'cappuccino.png', price: '$4.99' },
    { name: 'espresso', image: 'espresso.png', price: '$2.99' },
    { name: 'macchiato', image: 'macchiato.png', price: '$4.49' }
  ];
  res.render('index', { drinks: drinkNames });
});

app.get('/drinks/:id', (req, res) => {
  const drinkNames = [
    { name: 'latte', image: 'latte.png', price: '$3.99' },
    { name: 'cappuccino', image: 'cappuccino.png', price: '$4.99' },
    { name: 'espresso', image: 'espresso.png', price: '$2.99' },
    { name: 'macchiato', image: 'macchiato.png', price: '$4.49' }
  ];
  const drinkIndex = req.params.id;
  const drink = drinkNames[drinkIndex];
  res.render('show', { drink: drink });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

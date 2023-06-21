
const express = require('express');
const app = express();
const port = 3000;

// Array of drinks
const drinks = [
  {
    name: 'cruddy mary',
    price: 132,
    image: 'https://imgur.com/Va5iIw5'
  },
  {
    name: 'index on the beach',
    price: 68,
    image: 'https://imgur.com/XV2aPa2'
  },
  {
    name: 'hack & coke',
    price: 1,
    image: 'https://imgur.com/rLOXFRI'
  },
  {
    name: 'whiskey-value pair',
    price: 11,
    image: 'https://imgur.com/a7rmkoS'
  },
  {
    name: '404 horsemen',
    price: 202,
    image: 'https://imgur.com/FLucOLr'
  },
  {
    name: 'if stateMint julep',
    price: 2,
    image: 'https://imgur.com/yaoK0Dg'
  },
  {
    name: 'APIPA',
    price: 43,
    image: 'https://imgur.com/qAhA7pi'
  },
  {
    name: 'node to joy',
    price: 56,
    image: 'https://imgur.com/MbVdwZz'
  },
  // Additional Drinks
  {
    name: 'sour grapefruit',
    price: 89,
    image: 'https://imgur.com/NLkMCE6'
  },
  {
    name: 'mint mojito',
    price: 78,
    image: 'https://imgur.com/YYq6d5t'
  }
];

// Set the 'views' directory
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// Route to render the index.ejs template
app.get('/drinks', (req, res) => {
  res.render('index', { drinks: drinks });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

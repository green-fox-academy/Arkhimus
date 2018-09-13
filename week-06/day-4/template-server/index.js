'use strict';

const express = require('express');
const app = express();
const PORT = 4040;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home', {
    title: 'homepage',
    header: 'GreenFox',
  });
});

app.get('/products/:id', (req, res) => {
  console.log(req.query.fox);
  res.render('home', {
    title: 'Product page',
    header: req.params.id, // url-ből ner ki végpontot
    withGoodbye: req.query.withGoodbye === 'true', // query a home.ejs-el összekötve
  });
});

app.listen(PORT, () => {
  console.log(`Server runs on: ${PORT}`);
});

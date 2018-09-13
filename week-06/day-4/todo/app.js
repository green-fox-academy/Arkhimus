'use strict';

const express = require('express');
const app = express();
const PORT = 3030;

app.set('view engine', 'ejs');

const todos = [
  'get up',
  'survive',
  'go back to bed',
];

app.get('/', (res, req) => {
  res.render('home', {
    todo: todos,
  });
});

app.listen(PORT, () => {
  console.log(`Server is at: ${PORT}`);
});

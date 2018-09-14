'use strict';

const express = require('express');
const app = express();
const PORT = 3030;
const todos = [
  'get up',
  'survive',
  'go back to bed',
];

app.set('view engine', 'ejs');


app.get('/', (res, req) => {
  let todo = '';
  for (let i = 0; i < todos.length; i++) {
    todo += todos[i];
  }
  res.render('home', {
    print: todo,
  });
});

app.listen(PORT, () => {
  console.log(`Server is at: ${PORT}`);
});

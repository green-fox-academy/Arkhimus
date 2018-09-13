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
  let eachTodo = [];
  for (let i = 0; i < todos.length; i++) {
    eachTodo += todos[i];
  }
})

app.listen(PORT, () => {
  console.log(`Server is at: ${PORT}`);
})
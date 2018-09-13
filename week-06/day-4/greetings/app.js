'use strict';

const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  let queryName = 'Guest';
  if (req.query.name !== undefined) {
    queryName = req.query.name;
  }
  res.render('home', {
    kiscica: queryName,
  })
});

app.listen(PORT, () => {
  console.log(`Dis server balbla: ${PORT}`);
})
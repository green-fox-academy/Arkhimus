'use strict';

const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = 3030;

app.get('/api/giphy/', (req, res) => {
  let url = [
    `https://api.giphy.com/v1/gifs/search`,
    `?api_key=4JlQY4W0sEGi1trynU2RmudN9VG5t0Ep`,
    `&q=cheeseburgers&limit=16`,
  ].join('');

  fetch(url)
  .then((resp) => (resp.json()))
  .then(response => {
    res.json(response);
  });
});

app.listen(PORT, () => {
  console.log(`Server runs at: ${PORT}`);
});

'use strict'

const express = require('express');
const fetch = require('node-fetch');

const app = express();
const PORT = 4040;

const apiKey = '7e99abb23ef746a68c8772890cbedf29';

app.get('/api/nytimes/', (req, res) => {
  let url = [
    'https://api.nytimes.com/svc/search/v2/articlesearch.json',
    `?api-key=${apiKey}`,
  ].join('');

   fetch(url)
  .then((resp) => (resp.json()))
  .then(response => {
    res.json(response);
  });
});

app.listen(PORT, () => {
  console.log(`App runs at: ${PORT}`);
});

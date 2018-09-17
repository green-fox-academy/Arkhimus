'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const jsonParser = bodyParser.json();
const PORT = 4000;

app.use(jsonParser);

app.get('/', (req,res) => {
  res.send('All right baby!');
});

app.post('/sith', (req,res) => {
  let text = req.body.text;
});

app.listen(PORT, () => {
  console.log(`Server is uuuup dude at port: ${PORT}`);
});

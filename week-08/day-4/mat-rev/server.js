'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 3030;

app.use(bodyParser.json());
app.use(cors());

app.post('/postElements', (req,res) => {
  console.log(req.body);
  res.json(req.body);
});

app.listen(PORT, () => {
  console.log(`Server runz at: ${PORT}`);
});
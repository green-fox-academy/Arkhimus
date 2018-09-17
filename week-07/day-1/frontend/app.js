'use strict';

const express = require('express');
const app = express();
const PORT = 3030;

app.get('/', (req, res) => {
  res.send('OK!');
});

app.listen(PORT, () => {
  console.log(`Server runs at: ${PORT}`);
});

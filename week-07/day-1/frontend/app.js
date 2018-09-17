'use strict';

const express = require('express');
const app = express();
const PORT = 3030;
const path = require('path');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server runs at: ${PORT}`);
});

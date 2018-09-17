'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const jsonParser = bodyParser.json();

const PORT = 5050;

app.use(jsonParser);

app.post('/arrays', (req, res) => {
  let operation = req.body.what;
  let numbersToUse = req.body.numbers;
  if (operation === 'sum') {
    let sumNumber = 0;
    for (let i = 0; i < numbersToUse.length; i++) {
      sumNumber += numbersToUse[i];
    }
    res.json({
      "result" : `${sumNumber}`,
    });
  } else if (operation === 'multiply') {
    let multiply = 1;
    for (let i = 0; i < numbersToUse.length; i++) {
      multiply *= numbersToUse[i];
    }
    res.json({
      "result" : `${multiply}`,
    });
  } else if (operation === 'double') {
    let doubled = [];
    for (let i = 0; i < numbersToUse.length; i++) {
      doubled.push(numbersToUse[i] * 2);
    }
    res.json({
      "result" : `${doubled}`,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is up and running on ${PORT} port bro`);
});

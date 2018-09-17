'use strict';

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const jsonParser = bodyParser.json();
const app = express();
const PORT = 8080;

app.use(jsonParser);

app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
  if (req.query.input !== undefined) {
    res.json({
      "received": req.query.input,
      "result": req.query.input * 2,
    });
  } else {
    res.json({
      "error": "Please provide an input!"
    });
  }
});

app.get('/greeter', (req, res) => {
  if (req.query.name && req.query.title) {
    res.json({
      "welcome_message": `Oh, hi there ${req.query.name}, my dear ${req.query.title}!`,
    });
  } else if (!req.query.name) {
    res.json({
      "error": "Please provide a name!",
    });
  } else if (!req.query.title) {
    res.json({
      "error": "Please provide a title!",
    });
  }
});

app.get('/appenda/:appendable', (req, res) => {
  let appendable = req.params.appendable;
  if (appendable) {
    res.json({
      "appended": `${appendable}a`,
    });
  } else {
    res.json({
      error: `No appendable with = ${appendable}`,
    });
  }
});

function factorialize(num) {
  if (num < 0) {
    return -1;
  } else if (num === 0) {
    return 1;
  } else {
    return (num * factorialize(num - 1));
  }
};

function summarize(num) {
  if (num < 0) {
    return -1;
  } else if (num === 1) {
    return 1;
  } else {
    return (num + summarize(num - 1));
  }
};

app.post('/dountil/:action', (req, res) => {
  let action = req.params.action;
  let until = req.body.until;
  if (until) {
    if (action === 'factor') {
      res.json({
        "result": factorialize(until),
      });
    } else if (action === 'sum') {
      res.json({
        "result": summarize(until),
      });
    }
  } else {
    res.json({
      "error": "Please provide what to do with the numbers!"
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server runs at: ${PORT}`);
});

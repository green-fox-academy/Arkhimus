'use strict';

const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const app = express();
const PORT = 4040;

app.use(cors());

let conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'asdasd',
  database: 'reddit'
});

conn.connect(function (err) {
  if (err) {
    console.log('Error while connecting to database');
    console.log(err);
    return;
  }
  console.log('Connected to mysql databasemadafaaaaaa...');
})

app.get('/', (req, res) => {
  res.send('okeyzie');
});




app.post('/api/posts', jsonParser, (req, res) => {
  if (req.body.title && req.body.url) {
    conn.query(`INSERT INTO posts(title, url) VALUES ('${req.body.title}', '${req.body.url}')`, (err, result) => {
      if (err) {
        console.log('failure', err.message);
        return;
      }
      conn.query(`SELECT * FROM posts WHERE id=${result.insertId}`, (error, fullResult) => {
        res.json(fullResult);
      });
    });
  }
});

// app.put(`/posts/${req.body.id}/upvote`, jsonParser, (req, res) => {

// });

app.get('/api/posts', (req, res) => {
  conn.query(`SELECT * FROM posts`, (err, result) => {
    if (err) {
      console.log('failed', err.message);
    } else {
      console.log(result);
    }
    res.json(result);
  });
});

app.listen(PORT, () => {
  console.log(`Server iz runna at ${PORT} boiz`);
});

'use strict';

const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const path = require('path');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const app = express();
const PORT = 4040;

app.use(cors());
app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

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

app.get('/posts', (req, res) => {
  conn.query(`SELECT * FROM posts`, (err, result) => {
    if (err) {
      console.log('failed', err.message);
    } else {
      console.log(result);
    }
    res.status(200).json(result);
  });
});

app.post('/posts', jsonParser, (req, res) => {
  if (req.body.title && req.body.url && req.body.user && res.statusCode === 200) {
    conn.query(`INSERT INTO posts(title, url, user) VALUES ('${req.body.title}', '${req.body.url}', '${req.body.user}');`, (err, result) => {
      if (err) {
        console.log('failure', err.message);
        return;
      }
      conn.query(`SELECT * FROM posts WHERE id=${result.insertId}`, (error, fullResult) => {
        res.status(200).json(fullResult);
      });
    });
  }
});

app.put(`/posts/:id/:action`, (req, res) => {
  let addVote = '';
  if (req.params.action === 'upvote') {
    addVote = '+';
  } else if (req.params.action === 'downvote') {
    addVote = '-';
  }
  conn.query(`UPDATE posts SET score = score ${addVote} 1, vote = ${addVote}1 WHERE id=${req.params.id};`, (err, result) => {
    if (err) {
      console.log('failure', err.message);
      return;
    }
    conn.query(`SELECT * FROM posts WHERE id=${req.params.id}`, (error, voteResult) => {
      res.status(200).json(voteResult);
    });
  });
});

app.delete('/posts/:id', (req, res) => {
  conn.query(`DELETE FROM posts WHERE id=${req.params.id};`, (err, result) => {
    res.status(404).json('whateverdude');
  });
});

app.put('/posts/:id', jsonParser, (req,res) => {
  if (req.body.title && req.body.url && res.statusCode === 200) {
    conn.query(`UPDATE posts SET title = '${req.body.title}', url = '${req.body.url}' WHERE id=${req.params.id};`, (err, result) => {
      if (err) {
        console.log('failure', err.message);
        return;
      }
      conn.query(`SELECT * FROM posts WHERE id=${req.params.id}`, (error, fullResult) => {
        res.status(200).json(fullResult);
      });
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server iz runna at ${PORT} boiz`);
});

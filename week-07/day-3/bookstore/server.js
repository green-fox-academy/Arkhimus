'use strict';

const mysql = require('mysql');
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = 3030;

app.use(cors());
app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

let conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'asdasd',
  database: 'bookstore'
});

conn.connect(function (err) {
  if (err) {
    console.log('Error connecting to Db');
    console.log(err);
    return;
  }
  console.log('Connection established');
});

app.get('/api/books', (req, res) => {
  conn.query(`SELECT book_name, aut_name, cate_descrip, pub_name, book_price FROM book_mast 
    INNER JOIN author ON book_mast.aut_id=author.aut_id 
    INNER JOIN category ON book_mast.cate_id=category.cate_id 
    INNER JOIN publisher ON book_mast.pub_id=publisher.pub_id`, (err, result) => {
      if (err) {
        console.log('failed', err.message);
      } else {
        console.log(result);
      }
      res.json(result);
    });
});

app.listen(PORT, () => {
  console.log(`server runs at: ${PORT}`);
});

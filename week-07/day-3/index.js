let mysql = require('mysql');

let conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'asdasd',
  database: 'todoapp'
});

conn.connect(function (err) {
  if (err) {
    console.log('Error connecting to Db');
    console.log(err);
    return;
  }
  console.log('Connection established');
});

conn.query(`SHOW TABLES;`, (error, result) => {
  console.log(result);
});

const insertTask = (task, progress, mood) => {
  conn.query(`INSERT INTO todo (task, progress, mood) VALUES ('${task}', '${progress}', '${mood}')`, (err, res) => {
    if (err) {
      console.log('you failed so hard dude', err.message);
      return;
    } else {
      console.log(res);
      return res;
    }
  });
}

const getTodoz = () => {
  conn.query(`SELECT * FROM todo`, (err, res) => {
    if (err) {
      console.log('failed', err.message);
    } else {
      console.log(res);
      return res;
    }
  })
}

const delTodo = (id, deleteIt) => {
  if (id) {
    conn.query(`DELETE FROM todo WHERE id = ${id}`, (err, res) => {
      if (err) {
        console.log('ur ducked', err.message);
        return;
      }
      console.log(res);
    });
    return;
  }
  conn.query(`DELETE FROM todo WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log(err.message);
      return;
    }
    console.log(res);
  });
}

// insertTask('let it go', 'y', 1);

getTodoz();

conn.end();

const express = require('express');
const app = express();
const PORT = 3000;

app.get('/ping', (req, res) => {
  res.json({
    message: 'pong',
    status: 210,
  });
});

app.get('/', (req, res) => {
  res.json({
    message: 'Cannot GET /',
  });
});

app.listen(PORT, () => {
  console.log(`Server is at port: ${PORT}`)
});

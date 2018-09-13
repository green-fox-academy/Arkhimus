const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.get('/ping', (req, res) => {
  res.json({
    message: 'pong',
    status: 210,
  });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is at port: ${PORT}`);
});

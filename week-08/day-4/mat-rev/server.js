'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 3030;

app.listen(PORT, () => {
  console.log(`Server runz at: ${PORT}`);
});
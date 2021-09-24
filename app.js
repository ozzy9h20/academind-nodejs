const express = require('express');
const app = express();

app.use('/', (req, res, next) => {
  res.send('Test');
});

app.listen(3000);

const express = require('express');
const app = express();

app.use('/', (req, res, next) => {
  console.log('Always On!');
  next();
});

app.use('/users', (req, res, next) => {
  res.send('Users');
});

app.use('/', (req, res, next) => {
  res.send('Test');
});

app.listen(3000);

const express = require('express');
const app = express();

app.set('port', process.env.port || 3000);
app.set('view engine', 'pug');
app.set('views', 'views');

app.get('/', (req, res, next) => {
  res.send('<h1>Hello world<h1>');
})

app.listen(app.get('port'), server => {
  console.info(`Server listen on port ${app.get('port')}`);
})

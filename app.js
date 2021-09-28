const express = require('express');
const mainRouter = require('./routes/mainRouter');

const app = express();

app.set('port', process.env.port || 3000);
app.set('view engine', 'pug');
app.set('views', 'views');

app.use(mainRouter);

app.listen(app.get('port'), server => {
  console.info(`Server listen on port ${app.get('port')}`);
})

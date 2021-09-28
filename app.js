const { urlencoded } = require('body-parser');
const express = require('express');
const mainRouter = require('./routes/mainRouter');
const userData = require('./routes/userRouter');

const app = express();

app.use(urlencoded({ extended: true }));
app.set('port', process.env.port || 3000);
app.set('view engine', 'pug');
app.set('views', 'views');

app.use(mainRouter);
app.use(userData.router);

app.listen(app.get('port'), server => {
  console.info(`Server listen on port ${app.get('port')}`);
})

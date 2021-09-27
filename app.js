const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const expHbs = require('express-handlebars');
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.engine('handlebars', expHbs({
  layoutsDir: 'views/layouts/', 
  defaultLayout: 'main-layout',
  // extname: 'hbs',
}));
app.set('view engine', 'handlebars');
app.set('views', 'views')

app.use(bodyParser.urlencoded({extended: true}));
app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res) => {
  res.status(404).render('404', {
    layout: false, 
    pageTitle: 'Page Not Found'});
});

app.listen(3000);

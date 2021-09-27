// TASK
// Create a NPM Project & install Express.js (+Nodemon)
// Create an Express.js app which serves two HTML files (of your choice)
// Add some static (.js/.css) to your project that should e required by at leastone of your HTML files

const path = require('path');
const express = require('express');
const bodyparser = require('body-parser');

// Routes
const mainRouter = require('./routes/mainRoute');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyparser.urlencoded({extended: true}));

app.use(mainRouter);


app.listen(3000);
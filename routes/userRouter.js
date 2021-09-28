const express = require('express');
const userRouter = express.Router();

const users = [];

userRouter.post('/users', (req, res, next) => {
  const { username } = req.body;
  users.push(username);
  res.redirect('/users');
});

userRouter.get('/users', (req, res, next) => {
  res.render('users', {
    users,
  });
});

module.exports = {
  router: userRouter,
  users
};

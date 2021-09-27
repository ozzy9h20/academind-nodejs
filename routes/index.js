const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Route1');
});

router.get('/users', (req, res, next) => {
  res.send('Route2');
});

module.exports = router;
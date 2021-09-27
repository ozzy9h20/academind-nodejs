const path = require('path');
const express = require('express');
const router = express.Router();
const rootDir = require('./../util/path');

router.get('/users', (_, res) => {
  res.sendFile(path.join(rootDir, 'view', 'users.html'));
});

router.get('/', (_, res) => {
  res.sendFile(path.join(rootDir, 'view', 'home.html'));
});

router.use((_, res) => {
  res.sendFile(path.join(rootDir, 'view', '404.html'));
})

module.exports = router;
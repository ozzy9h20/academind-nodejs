const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req);
  process.exit(); // Exit node event loop
});

server.listen(3000);
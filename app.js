const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <html>
        <head>
          <title>Assignment 1</title>
        </head>
        <body>
          <p>Welcome to my page!</p>
        </body>
      </html>
    `);
    return res.end();
  }

  if (url === '/users') {
    
  }

});

server.listen(3000);
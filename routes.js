const routesHandler = (req, res) => {
  const {method, url} = req;

  const users = ['Aras', 'Beta', 'Candi'];

  if (url === "/") {
    res.write("<h1>Hello from me!</h1>");
    res.write(`
      <form action="/create-user" method="POST">
        <input type="text" name="name" />
        <button type="submit">Send</button>
      </form>
    `);
    res.end();
  }

  if (url === "/users") {
    res.setHeader("Content-Type", "text/html");
    res.write("<ul>");
    res.write(users.map((user) => `<li>${user}</li>`).join(''));
    res.write("</ul>");
    res.end();
  }

  if (url === "/create-user" && method === "POST") {
    const body = [];

    req.on('data', (chunk) => {
      body.push(chunk);  
    });

    return req.on('end', () => {
      const newUser = Buffer.concat(body).toString().split("=")[1];
      console.log(newUser);
      res.statusCode = 302;
      res.setHeader("Location", "/users");

      return res.end();
    });
  }
}

module.exports = routesHandler;

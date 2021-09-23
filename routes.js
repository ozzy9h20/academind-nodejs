const routesHandler = (req, res) => {
  const {method, url} = req;

  const users = ['Aras', 'Beta', 'Candi'];

  if (url === "/") {
    res.write("<h1>Hello from me!</h1>");
    res.end();
  }

  if (url === "/users") {
    res.setHeader("Content-Type", "text/html");
    res.write("<ul>");
    res.write(users.map((user) => `<li>${user}</li>`).join(''));
    res.write("</ul>");
    res.end();
  }
}

module.exports = routesHandler;

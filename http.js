const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("home");
  } else if (req.url === "/about") {
    res.end("abot page");
  } else {
    res.end(`
    <h1>Error</h1>
    <a href="/">go back to home</a>
`);
  }
});

server.listen(5000);

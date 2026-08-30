const http = require('http');
const port = process.env.PORT || 4000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'Coming Soon!';
  console.log(`${msg} at ${new Date()}`);
  res.end(msg);
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});

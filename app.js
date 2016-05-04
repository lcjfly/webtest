const http = require('http');

const hostname = process.env.IP;
const port = process.env.PORT || '3000';
console.log(process.env);

const server = http.createServer(function (req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World4\n');
});

server.listen(port, hostname, function () {
  console.log('Server running at http://'+hostname+':'+port);
});

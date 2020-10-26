'use strict';

const http = require('http');

const server = http.createServer(function (req, res) {
  res.writeHead(200, {
    'content-type': 'text/html'
  });

  res.write('<!doctype html>');
  res.write('<html>');
  res.write('<head>');
  res.write('<title>My Node.js website</title>');
  res.write('</head>');
  res.write('<body>');
  res.write('<p>Some content ...</p>');
  res.write('</body>');
  res.write('</html>');

  res.end();
});

server.listen(3000);

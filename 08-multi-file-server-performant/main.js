'use strict';

const fs = require('fs');
const http = require('http');
const path = require('path');

const server = http.createServer(function (req, res) {
  let fileName;

  switch (req.url) {
    case '/':
    case '/index':
    case '/index.html':
      fileName = 'index.html';
      break;

    case '/second':
    case '/second.html':
      fileName = 'second.html';
      break;

    default:
      fileName = 'error.html';
  }

  const filePath = path.join(__dirname, fileName);

  fs.readFile(filePath, 'utf8', function (err, fileContent) {
    if (err) {
      res.writeHead(500);
      res.write('Internal server error.');
      res.end();

      return;
    }

    res.writeHead(200, {
      'content-type': 'text/html'
    });

    res.write(fileContent);
    res.end();
  });
});

server.listen(3000);

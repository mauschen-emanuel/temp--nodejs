'use strict';

const fs = require('fs');
const http = require('http');
const path = require('path');

const server = http.createServer(function (req, res) {
  res.writeHead(200, {
    'content-type': 'text/html'
  });

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
  const fileContent = fs.readFileSync(filePath, 'utf8');

  res.write(fileContent);
  res.end();
});

server.listen(3000);

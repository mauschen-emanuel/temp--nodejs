'use strict';

const fs = require('fs');
const http = require('http');
const path = require('path');

const server = http.createServer(function (req, res) {
  res.writeHead(200, {
    'content-type': 'text/html'
  });

  const indexHtmlPath = path.join(__dirname, 'index.html');
  const indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');

  res.write(indexHtml);
  res.end();
});

server.listen(3000);

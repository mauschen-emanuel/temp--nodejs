'use strict';

const fs = require('fs');
const http = require('http');
const path = require('path');

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'pages', 'index.html');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).end();
      return;
    }

    res.send(data);
  });
});

app.get('/second', (req, res) => {
  const filePath = path.join(__dirname, 'pages', 'second.html');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).end();
      return;
    }

    res.send(data);
  });
});

app.get('/api', (req, res) => {
  const person = {
    firstName: 'Dana',
    lastName: 'Scully'
  };

  res.json(person);

  // res.writeHead(200, {
  //   'content-type': 'application/json'
  // });
  //
  // res.write(JSON.stringify(person));
  // res.end();
});

const server = http.createServer(app);
server.listen(3000);

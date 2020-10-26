'use strict';

const fs = require('fs');
const path = require('path');

const fileName = path.join(__dirname, 'main.js');

fs.readFile(fileName, 'utf8', function (err, data) {
  console.log(data);
});

console.log('Laden...');

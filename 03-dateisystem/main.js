'use strict';

const fs = require('fs');
const path = require('path');

const fileName = path.join(__dirname, 'main.js');

const data = fs.readFileSync(fileName, 'utf8');

console.log(data);

'use strict';

const express = require('express');

const getSource = require('./routes/getSource');

const getApp = function () {
  const app = express();

  app.get('/:source', getSource);

  return app;
};

module.exports = getApp;

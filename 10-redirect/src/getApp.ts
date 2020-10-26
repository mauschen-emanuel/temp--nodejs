import express from 'express';
import { getSource } from './routes/getSource';

const getApp = function () {
  const app = express();

  app.get('/:source', getSource);

  return app;
};

export { getApp };

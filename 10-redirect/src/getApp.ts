import { getSource } from './routes/getSource';
import express, { Application } from 'express';

const getApp = function (): Application {
  const app = express();

  app.get('/:source', getSource);

  return app;
};

export { getApp };

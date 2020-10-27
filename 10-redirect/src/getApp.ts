import { redirect } from './routes/redirect';
import express, { Application } from 'express';

const getApp = function (): Application {
  const app = express();

  app.get('/:source', redirect);

  return app;
};

export { getApp };

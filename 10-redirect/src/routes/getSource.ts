import fs from 'fs';
import path from 'path';
import { RequestHandler } from 'express';

const getSource: RequestHandler = async function (req, res): Promise<void> {
  const routesPath = path.join(__dirname, '..', 'routes.json');

  let routesData;

  try {
    routesData = await fs.promises.readFile(routesPath, 'utf8');
  } catch {
    return res.status(500).end();
  }

  const routes = JSON.parse(routesData);

  for (const route of routes) {
    if (route.source === req.params.source) {
      return res.
        status(307).
        set('location', route.target).
        end();
    }
  }

  res.status(404).end();
};

export { getSource };

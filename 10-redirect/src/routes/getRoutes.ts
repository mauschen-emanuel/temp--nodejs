import fs from 'fs';
import path from 'path';

import { Route } from './Route';

const getRoutes = async (): Promise<Route[]> => {
  const routesPath = path.join(__dirname, '..', 'routes.json');

  const routesData = await fs.promises.readFile(routesPath, 'utf8');
  const routes: Route[] = JSON.parse(routesData);

  return routes;
};

export { getRoutes };

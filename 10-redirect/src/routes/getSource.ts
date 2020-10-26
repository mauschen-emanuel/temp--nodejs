import fs from 'fs';
import path from 'path';
import { RequestHandler } from 'express';

const getSource: RequestHandler = function (req, res) {
  const routesPath = path.join(__dirname, '..', 'routes.json');

  fs.readFile(routesPath, 'utf8', (err, routesData) => {
    if (err) {
      res.status(500).end();
      return;
    }

    const routes = JSON.parse(routesData);

    for (let i = 0; i < routes.length; i++) {
      const route = routes[i];

      if (route.source === req.params.source) {
        res.
          status(307).
          set('location', route.target).
          end();
        return;
      }
    }

    res.status(404).end();
  });
};

export { getSource };

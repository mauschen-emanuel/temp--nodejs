'use strict';

const fs = require('fs');
const path = require('path');

const getSource = (req, res) => {
  const routesPath = path.join(__dirname, 'routes.json');
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

module.exports = getSource;

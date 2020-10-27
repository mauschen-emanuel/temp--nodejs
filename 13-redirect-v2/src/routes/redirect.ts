import { findRoute } from './findRoute';
import { getRoutes } from './getRoutes';
import { RequestHandler } from 'express';

const redirect: RequestHandler = async function (req, res): Promise<void> {
  let routes;

  try {
    routes = await getRoutes();
  } catch {
    return res.status(500).end();
  }

  const route = findRoute(routes, req.params.source);

  if (!route) {
    return res.status(404).end();
  }

  res.status(307).set('location', route).end();
};

export { redirect };

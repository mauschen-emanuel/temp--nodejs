import { Route } from './Route';

const findRoute = (routes: Route[], source: string): string | undefined => {
  for (const route of routes) {
    if (route.source === source) {
      return route.target;
    }
  }
};

export { findRoute };

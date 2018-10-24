import pathToRegexp from 'path-to-regexp';

export const routes = {
  default: '/',
  availability: '/availability',
};

export const paths = {};

Object.keys(routes)
  .forEach((routeName) => {
    paths[routeName] = pathToRegexp.compile(routes[routeName]);
  });

export default routes;

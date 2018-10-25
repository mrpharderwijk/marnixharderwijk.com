import pathToRegexp from 'path-to-regexp';

export const routes = {
  home: '/',
  availability: '/availability',
  availabilityInfo: '/availability/info',
};

export const paths = Object.keys(routes)
  .reduce((accRoutes, currRoute) => {
    const sourceObj = {};
    sourceObj[currRoute] = pathToRegexp.compile(routes[currRoute]);
    return Object.assign(accRoutes, sourceObj);
  }, {});

export default routes;

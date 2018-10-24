import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from '../shared/helpers/RoutesHelper';
import MainContainer from './Main/MainContainer';
import AvailabilityContainer from './Availability/AvailabilityContainer';

const ApplicationRoutes = ({ ...props }) => (
  <Switch>
    <Route exact path={routes.default} component={MainContainer} {...props} />
    <Route path={routes.availability} component={AvailabilityContainer} {...props} />
  </Switch>
);

export default ApplicationRoutes;

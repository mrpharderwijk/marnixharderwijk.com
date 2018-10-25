import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from '../shared/helpers/RoutesHelper';
import HomeContainer from './Home/HomeContainer';
import AvailabilityContainer from './Availability/AvailabilityContainer';
import NotFound404 from './NotFound404/NotFound404';

const ApplicationRoutes = ({ ...props }) => (
  <Switch>
    <Route exact path={routes.home} component={HomeContainer} {...props} />
    <Route path={routes.availability} component={AvailabilityContainer} {...props} />
    <Route path={routes.availabilityInfo} component={AvailabilityContainer} {...props} />
    <Route component={NotFound404} />
  </Switch>
);

export default ApplicationRoutes;

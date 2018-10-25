import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from '../../shared/helpers/RoutesHelper';
import AvailabilityInfo from './AvailabilityInfo/AvailabilityInfo';
import AvailabilityOverview from './AvailabilityOverview/AvailabilityOverview';
import NotFound404 from '../NotFound404/NotFound404';

const AvailabilityRoutes = ({ ...props }) => (
  <Switch>
    <Route exact path={routes.availability} component={AvailabilityOverview} {...props} />
    <Route path={routes.availabilityInfo} component={AvailabilityInfo} {...props} />
    <Route component={NotFound404} />
  </Switch>
);

export default AvailabilityRoutes;

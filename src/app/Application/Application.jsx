import React from 'react';
import ApplicationRoutes from './ApplicationRoutes';

const Application = ({ ...props }) => (
  <React.Fragment>
    <ApplicationRoutes {...props} />
  </React.Fragment>
);

export default Application;

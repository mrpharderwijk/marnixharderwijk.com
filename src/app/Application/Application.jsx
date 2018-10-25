import React from 'react';
import CookiesNotificationContainer from '../shared/components/common/Cookies/CookiesNotificationContainer';
import ApplicationRoutes from './ApplicationRoutes';

import './Application.css';

const Application = ({ ...props }) => (
  <React.Fragment>
    <header>
      header
    </header>
    <main role="main" className="main__container">
      <ApplicationRoutes {...props} />
    </main>
    <CookiesNotificationContainer />
  </React.Fragment>
);

export default Application;

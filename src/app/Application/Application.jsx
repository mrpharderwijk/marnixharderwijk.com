import React from 'react';
import { Button } from 'reactstrap';
import CookiesNotificationContainer from '../shared/components/common/Cookies/CookiesNotificationContainer';
import ApplicationRoutes from './ApplicationRoutes';
import appHistory from './ApplicationHistory';
import './Application.css';

const Application = ({ ...props }) => (
  <React.Fragment>
    <header>
      <Button onClick={appHistory.goBack}>
        <span className="icon icon-chevron-left" />
      </Button>
    </header>
    <main role="main" className="main__container">
      <ApplicationRoutes {...props} />
    </main>
    <CookiesNotificationContainer />
  </React.Fragment>
);

export default Application;

import React from 'react';
import PropTypes from 'prop-types';
import { Jumbotron } from 'reactstrap';

import mainMock from './MainMock';
import CookiesNotificationContainer from '../../shared/components/common/Cookies/CookiesNotificationContainer';
import Headlines from '../../shared/components/common/Headlines/Headlines';
import SocialList from '../../shared/components/common/SocialList/SocialList';
import './Main.css';

const propTypes = {
  cookies: PropTypes.shape({
    isLoading: PropTypes.bool,
    cookieApproval: PropTypes.bool
  }).isRequired
};

const Main = () => (
  <div className="main">
    <main role="main" className="main__container">
      <Jumbotron fluid className="main__container__jumbotron">
        {/* header text */
        mainMock.header ? (
          <h1 className="heading heading--xxl">
            <span className="highlight">{mainMock.header.firstName}</span>{' '}
            <span>{mainMock.header.lastName}</span>
          </h1>
        ) : (
          ''
        )}

        <Headlines lines={mainMock.headlines} />
        <SocialList listItems={mainMock.socialList} />
      </Jumbotron>
    </main>
    <CookiesNotificationContainer />
  </div>
);

Main.propTypes = propTypes;

export default Main;

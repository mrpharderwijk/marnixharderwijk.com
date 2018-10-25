import React from 'react';
import PropTypes from 'prop-types';
import { Jumbotron } from 'reactstrap';
import Headlines from '../../shared/components/common/Headlines/Headlines';
import SocialList from '../../shared/components/common/SocialList/SocialList';
import appHistory from '../ApplicationHistory';
import { paths } from '../../shared/helpers/RoutesHelper';

import homeMock from './HomeMock';
import './Home.css';

const propTypes = {
  cookies: PropTypes.shape({
    isLoading: PropTypes.bool,
    cookieApproval: PropTypes.bool,
  }).isRequired,
};

const Home = () => {
  const clicker = () => {
    appHistory.push(paths.availability());
  };

  return (
    <Jumbotron fluid>
      { /* header text */
        homeMock.header
          ? (
            <h1 className="heading heading--xxl">
              <span className="highlight">{homeMock.header.firstName}</span>
              {' '}
              <span>{homeMock.header.lastName}</span>
            </h1>
          ) : ''
      }
      <Headlines lines={homeMock.headlines} />
      <SocialList listItems={homeMock.socialList} />
      <button type="button" className="btn btn-primary" onClick={clicker}>test</button>
    </Jumbotron>
  );
};

Home.propTypes = propTypes;

export default Home;

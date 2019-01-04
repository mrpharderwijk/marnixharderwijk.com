import React from 'react';
import PropTypes from 'prop-types';
import { Jumbotron } from 'reactstrap';
import moment from 'moment';
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

  const getGreet = () => {
    if (!moment() || !moment().isValid()) {
      return 'Hello,';
    }

    let greet = null; // return g

    const splitAfternoon = 12; // 24hr time to split the afternoon
    const splitEvening = 17; // 24hr time to split the evening
    const currentHour = parseFloat(moment().format('HH'));

    if (currentHour >= splitAfternoon && currentHour <= splitEvening) {
      greet = 'afternoon';
    } else if (currentHour >= splitEvening) {
      greet = 'evening';
    } else {
      greet = 'morning';
    }

    return `Good ${greet},`;
  };

  return (
    <Jumbotron fluid>
      { /* header text */
        homeMock.header
          ? (
            <h1 className="heading heading--xxl">
              {getGreet()}
              <br />
              I'm
              {' '}
              <span className="h-color--primary h-font--semi-bold">{homeMock.header.firstName}</span>
              {' '}
              <span className="h-color--primary h-font--semi-bold">{homeMock.header.lastName}</span>
              .
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

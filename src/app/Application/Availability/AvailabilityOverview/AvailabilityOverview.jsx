import React from 'react';
import { Jumbotron } from 'reactstrap';
import appHistory from '../../ApplicationHistory';
import { paths } from '../../../shared/helpers/RoutesHelper';
import availabilityMock from '../AvailabilityMock';
import './AvailabilityOverview.css';

const AvailabilityOverview = () => {
  const openForm = () => {
    appHistory.push(paths.availabilityInfo());
  };

  return (
    <Jumbotron fluid>
      <h1 className="heading heading--xxl">
        {
          availabilityMock && availabilityMock.status
            ? availabilityMock.available.text
            : availabilityMock.notAvailable.text
        }
      </h1>
      <button type="button" className="btn btn-primary" onClick={openForm}>more info</button>
    </Jumbotron>
  );
};

export default AvailabilityOverview;

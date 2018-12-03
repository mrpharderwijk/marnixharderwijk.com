import React from 'react';
import {
  Jumbotron,
  Card,
  CardBody,
  CardTitle,
} from 'reactstrap';
import appHistory from '../../ApplicationHistory';
import { paths } from '../../../shared/helpers/RoutesHelper';
import availabilityMock from '../AvailabilityMock';
import './AvailabilityOverview.css';

const AvailabilityOverview = () => {
  const openForm = () => {
    appHistory.push(paths.availabilityInfo());
  };

  return (
    <React.Fragment>
      <Jumbotron fluid>
        <Card>
          <CardBody>
            <CardTitle>
              {
                availabilityMock && availabilityMock.status
                  ? availabilityMock.available.text
                  : availabilityMock.notAvailable.text
              }
            </CardTitle>
            <dl>
              <dd>Current client: NS International</dd>
              <dt>Due till: March 2019</dt>
            </dl>
            <button type="button" className="btn btn-primary" onClick={openForm}>more info</button>
          </CardBody>
        </Card>
      </Jumbotron>
    </React.Fragment>
  );
};

export default AvailabilityOverview;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  fetchGeoLocation: PropTypes.func.isRequired,
};

class GeoLocation extends Component {
  componentDidMount() {
    const { fetchGeoLocation } = this.props;
    fetchGeoLocation();
  }

  render() {
    const { position } = this.props;
    return (
      <React.Fragment>
        <pre>{JSON.stringify(this.props, null, 2)}</pre>
        {
          position && position.coords
            ? `lat : ${position.coords.latitude} / long: ${position.coords.longitude}`
            : ''
        }
      </React.Fragment>
    );
  }
}

GeoLocation.propTypes = propTypes;

export default GeoLocation;

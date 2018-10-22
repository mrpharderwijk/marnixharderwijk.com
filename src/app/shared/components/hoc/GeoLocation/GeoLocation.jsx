import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  fetchGeoLocation: PropTypes.func.isRequired,
};

class GeoLocation extends Component {
  componentDidMount() {
    this.props.fetchGeoLocation();
  }

  render() {
    return (
      <React.Fragment>
        <pre>{JSON.stringify(this.props, null, 2)}</pre>
        {
          this.props.position && this.props.position.coords
            ? `lat : ${this.props.position.coords.latitude} / long: ${this.props.position.coords.longitude}`
            : ''
        }
      </React.Fragment>
    );
  }
}

GeoLocation.propTypes = propTypes;

export default GeoLocation;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  fetchIpLocation: PropTypes.func.isRequired,
};

class IpLocation extends Component {
  componentDidMount() {
    const { fetchIpLocation } = this.props;
    fetchIpLocation();
  }

  render() {
    const { position } = this.props;

    return (
      <React.Fragment>
        <pre>{JSON.stringify(this.props, null, 2)}</pre>
        {
          position && position.longitude && position.latitude
            ? `lat : ${position.latitude} / long: ${position.longitude}`
            : ''
        }
      </React.Fragment>
    );
  }
}

IpLocation.propTypes = propTypes;

export default IpLocation;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchIpLocationIfNeeded } from './redux/IpLocationActions';

const propTypes = {
  fetchIpLocation: PropTypes.func.isRequired,
};

const mapStateToProps = state => state.ipLocation;

const mapDispatchToProps = dispatch => ({
  fetchIpLocation: () => dispatch(fetchIpLocationIfNeeded()),
});

const IpLocationHOC = WrappedComponent => connect(
  mapStateToProps,
  mapDispatchToProps,
)(class extends Component {
  componentWillMount() {
    const { fetchIpLocation } = this.props;
    fetchIpLocation();
  }

  render() {
    return (
      <React.Fragment>
        <WrappedComponent {...this.props} />
      </React.Fragment>
    );
  }
});

IpLocationHOC.propTypes = propTypes;

export default IpLocationHOC;

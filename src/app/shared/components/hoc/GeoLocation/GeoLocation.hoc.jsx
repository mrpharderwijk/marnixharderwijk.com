import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchGeoLocationIfNeeded } from './geoLocation.actions';

const propTypes = {
  fetchGeoLocation: PropTypes.func.isRequired,
};

const mapStateToProps = state => state.geoLocation;

const mapDispatchToProps = dispatch => ({
  fetchGeoLocation: () => dispatch(fetchGeoLocationIfNeeded()),
});

const GeoLocationHOC = WrappedComponent =>
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(class extends Component {
    componentWillMount() {
      this.props.fetchGeoLocation();
    }

    render() {
      return (
        <React.Fragment>
          <WrappedComponent {...this.props} />
        </React.Fragment>
      );
    }
  });

GeoLocationHOC.propTypes = propTypes;

export default GeoLocationHOC;

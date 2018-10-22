import { connect } from 'react-redux';
import { fetchGeoLocationIfNeeded } from './geoLocation.actions';
import GeoLocation from './GeoLocation';

const mapStateToProps = state => state.geoLocation;

const mapDispatchToProps = dispatch => ({
  fetchGeoLocation: () => dispatch(fetchGeoLocationIfNeeded()),
});

export default connect(mapStateToProps, mapDispatchToProps)(GeoLocation);

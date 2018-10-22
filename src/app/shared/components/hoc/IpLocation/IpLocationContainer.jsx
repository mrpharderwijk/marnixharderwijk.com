import { connect } from 'react-redux';
import { fetchIpLocationIfNeeded } from './redux/IpLocationActions';
import IpLocation from './IpLocation';

const mapStateToProps = state => state.ipLocation;

const mapDispatchToProps = dispatch => ({
  fetchIpLocation: () => dispatch(fetchIpLocationIfNeeded()),
});

export default connect(mapStateToProps, mapDispatchToProps)(IpLocation);

import { connect } from 'react-redux';
import Availability from './Availability';

const mapStateToProps = state => ({
  cookies: state.cookies,
  ipLocation: state.ipLocation,
});

export default connect(mapStateToProps)(Availability);

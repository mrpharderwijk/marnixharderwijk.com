import { connect } from 'react-redux';
import Home from './Home';

const mapStateToProps = state => ({
  cookies: state.cookies,
  ipLocation: state.ipLocation,
});

export default connect(mapStateToProps)(Home);

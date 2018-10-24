import { connect } from 'react-redux';
import Main from './Main';

const mapStateToProps = state => ({
  cookies: state.cookies,
  ipLocation: state.ipLocation,
});

export default connect(mapStateToProps)(Main);

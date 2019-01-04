import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Navigation from './Navigation';

const mapStateToProps = state => ({
  navigation: state.navigation,
});

export default withRouter(connect(mapStateToProps)(Navigation));

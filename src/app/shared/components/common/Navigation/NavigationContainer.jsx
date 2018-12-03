import { connect } from 'react-redux';
import Navigation from './Navigation';
import { showBackButton } from './redux/NavigationActions';

const mapStateToProps = state => ({
  navigation: state.navigation,
});

const mapDispatchToProps = dispatch => ({
  shouldShowBackButton: location => dispatch(showBackButton(location)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);

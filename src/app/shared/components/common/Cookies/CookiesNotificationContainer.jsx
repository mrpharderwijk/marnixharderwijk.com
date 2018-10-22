import { connect } from 'react-redux';
import { setCookieApproval } from './redux/CookiesActions';
import CookiesNotification from './CookiesNotification';
import cookiesMock from './CookiesNotificationMock';

const mapStateToProps = state => ({
  cookies: state.cookies,
  message: cookiesMock.message,
  button: cookiesMock.button,
});

const mapDispatchToProps = dispatch => ({
  setCookieApproval: () => dispatch(setCookieApproval()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CookiesNotification);

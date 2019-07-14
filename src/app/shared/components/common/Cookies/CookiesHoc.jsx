import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllCookies, setCookieApproval, setCookieVisitCount } from './redux/CookiesActions';
import cookiesMock from './CookiesNotificationMock';

const propTypes = {
  setCookieApproval: PropTypes.func.isRequired,
  setCookieVisitCount: PropTypes.func.isRequired,
  getAllCookies: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  cookies: state.cookies,
  message: cookiesMock.message,
  button: cookiesMock.button
});

const mapDispatchToProps = dispatch => ({
  setCookieApproval: () => dispatch(setCookieApproval()),
  setCookieVisitCount: visitCount => dispatch(setCookieVisitCount(visitCount)),
  getAllCookies: () => dispatch(getAllCookies())
});

const CookiesHOC = WrappedComponent =>
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(
    class extends Component {
      componentWillMount() {
        const { getAllCookies } = this.props;
        getAllCookies();
      }

      render() {
        return (
          <React.Fragment>
            <WrappedComponent {...this.props} />
          </React.Fragment>
        );
      }
    }
  );

CookiesHOC.propTypes = propTypes;

export default CookiesHOC;

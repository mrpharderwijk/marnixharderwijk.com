import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Container } from 'reactstrap';

import './CookiesNotification.css';

const propTypes = {
  setCookieApproval: PropTypes.func.isRequired,
  button: PropTypes.shape({
    text: PropTypes.string,
  }),
  cookies: PropTypes.shape({
    approval: PropTypes.bool,
  }),
  message: PropTypes.string,
};

const defaultProps = {
  button: null,
  cookies: null,
  message: null,
};

class CookiesNotification extends Component {
  acceptCookies() {
    const { setCookieApproval } = this.props;
    setCookieApproval();
  }

  shouldShowNotificaton() {
    const { cookies } = this.props;

    return (!cookies || !cookies.isLoading)
      && (!cookies.cookies || !cookies.cookies.approval);
  }

  render() {
    const { message, button } = this.props;

    return (
      <React.Fragment>
        {
          this.shouldShowNotificaton()
            ? (
              <div className="cookie-notification">
                <Container className="cookie-notification__container">
                  <p className="cookie-notification__container__message">
                    {message || 'This website uses cookies to ensure you get the best experience on our website.'}
                  </p>
                  {
                    button
                      ? (
                        <Button className="cookie-notification__container__button" color="primary" onClick={() => this.acceptCookies()}>
                          {button.text || 'Approve!'}
                        </Button>
                      )
                      : ''
                  }
                </Container>
              </div>
            )
            : ''
        }
      </React.Fragment>
    );
  }
}

CookiesNotification.propTypes = propTypes;
CookiesNotification.defaultProps = defaultProps;

export default CookiesNotification;

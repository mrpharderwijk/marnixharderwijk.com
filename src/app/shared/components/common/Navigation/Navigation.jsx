import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  Button,
} from 'reactstrap';
import { NavLink as RouterLink } from 'react-router-dom';
import UtilsHelper from '../../../helpers/UtilsHelper';
import appHistory from '../../../../Application/ApplicationHistory';

import './Navigation.css';

const propTypes = {
  navigation: PropTypes.shape({
    didInvalidate: PropTypes.bool,
    isFetching: PropTypes.bool,
    lastUpdated: PropTypes.number,
    backButton: PropTypes.bool,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);

    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  }

  shouldShowBackButton() {
    const { location } = this.props;

    return UtilsHelper.hasPath(location, 'pathname')
      ? location.pathname.split('/').filter(Boolean).length
      : false;
  }

  render() {
    const { isOpen } = this.state;

    return (
      <Navbar className="navbar--fixed-top" expand="md">
        {
          this.shouldShowBackButton()
            ? (
              <Button onClick={appHistory.goBack}>
                <span className="icon icon-chevron-left" />
              </Button>
            )
            : ''
        }
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <RouterLink className="nav-link" to="/about">About</RouterLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

Navigation.propTypes = propTypes;

export default Navigation;

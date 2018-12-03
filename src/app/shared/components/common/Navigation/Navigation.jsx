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
import appHistory from '../../../../Application/ApplicationHistory';

const propTypes = {
  shouldShowBackButton: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    didInvalidate: PropTypes.bool,
    isFetching: PropTypes.bool,
    lastUpdated: PropTypes.number,
    backButton: PropTypes.bool,
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

  componentDidMount() {
    const { shouldShowBackButton } = this.props;
    shouldShowBackButton(appHistory.location);
  }

  toggle() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  }

  render() {
    const { isOpen } = this.state;
    const { navigation } = this.props;
    return (
      <Navbar className="navigation" expand="md">
        {
          navigation.backButton
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

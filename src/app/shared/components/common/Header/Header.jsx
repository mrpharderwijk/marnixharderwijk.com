import React from 'react';
import { withRouter } from 'react-router-dom';
import NavigationContainer from '../Navigation/NavigationContainer';
import UtilsHelper from '../../../helpers/UtilsHelper';
import './Header.css';

const Header = ({ ...props }) => {
  const shouldShowHeader = () => {
    const { location } = props;

    return UtilsHelper.hasPath(location, 'pathname') && !!location
      .pathname.split('/').filter(Boolean).length;
  };

  return (
    <React.Fragment>
      {
        shouldShowHeader()
          ? (
            <header className="main-header">
              <NavigationContainer />
            </header>
          )
          : ''
      }
    </React.Fragment>
  );
};

export default withRouter(Header);

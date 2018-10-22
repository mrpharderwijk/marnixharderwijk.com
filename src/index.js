import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';
import * as serviceWorker from './serviceWorker';

import applicationStore from './app/Application/redux/ApplicationStore';
import applicationHistory from './app/Application/ApplicationHistory';
import ApplicationContainer from './app/Application/ApplicationContainer';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './assets/styles/styles.css';

render(
  (
    <Provider store={applicationStore}>
      <CookiesProvider>
        <Router history={applicationHistory}>
          <ApplicationContainer />
        </Router>
      </CookiesProvider>
    </Provider>
  ),
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

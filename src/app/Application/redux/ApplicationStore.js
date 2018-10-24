import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import applicationReducer from './ApplicationReducer';

const loggerMiddleware = createLogger();

const applicationStore = createStore(
  applicationReducer,
  composeWithDevTools(applyMiddleware(
    thunkMiddleware,
    loggerMiddleware,
  )),
);

export default applicationStore;

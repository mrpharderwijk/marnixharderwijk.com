import { handleActions } from 'redux-actions';
import {
  REQUESTING_COOKIES,
  RECEIVING_COOKIES,
  SET_COOKIES,
  REMOVE_COOKIES,
} from './CookiesActions';

const initialState = {
  isLoading: false,
  didInvalidate: false,
  cookies: null,
};

export default handleActions({
  [REQUESTING_COOKIES]: state => ({
    ...state,
    isLoading: true,
  }),
  [RECEIVING_COOKIES]: (state, { payload }) => ({
    isLoading: false,
    didInvalidate: false,
    cookies: payload,
  }),
  [SET_COOKIES]: () => ({
    isLoading: true,
    didInvalidate: false,
  }),
  [REMOVE_COOKIES]: () => ({
    isLoading: false,
    cookies: null,
  }),
}, initialState);

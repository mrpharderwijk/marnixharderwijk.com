import { createAction } from 'redux-actions';
import config from '../../../../config';
import cookieStorage from '../CookieStorage';

export const REQUESTING_COOKIES = 'REQUESTING_COOKIES';
export const RECEIVING_COOKIES = 'RECEIVING_COOKIES';
export const SET_COOKIES = 'SET_COOKIES';
export const REMOVE_COOKIES = 'REMOVE_COOKIES';

export const requestingCookies = createAction(REQUESTING_COOKIES);
export const getCookies = createAction(RECEIVING_COOKIES);
export const setCookie = createAction(SET_COOKIES);
export const removeCookies = createAction(REMOVE_COOKIES);

export const getAllCookies = () => async (dispatch) => {
  dispatch(requestingCookies());
  const cookies = cookieStorage.getAllCookies();

  dispatch(getCookies(cookies));
};

export const setCookieApproval = () => async (dispatch) => {
  dispatch(setCookie());
  cookieStorage.setCookie(config.cookie.approval, true);

  dispatch(requestingCookies());
  dispatch(getCookies(cookieStorage.getAllCookies()));
};

export const setCookieVisitCount = visitCount => async (dispatch) => {
  dispatch(setCookie());

  cookieStorage.setCookie(config.cookie.visitCount, visitCount);
  const cookies = cookieStorage.getAllCookies();

  dispatch(requestingCookies());
  dispatch(getCookies(cookies));
};

export const removeAllCookies = () => async (dispatch) => {
  dispatch(removeCookies());
  cookieStorage.remove();

  dispatch(requestingCookies());
  dispatch(getCookies(cookieStorage.getAllCookies()));
};

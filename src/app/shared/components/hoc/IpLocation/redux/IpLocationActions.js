import { createAction } from 'redux-actions';
import ipLocationService from '../IpLocationService';

export const REQUEST_IPLOCATION = 'REQUEST_IPLOCATION';
export const RECEIVE_IPLOCATION = 'RECEIVE_IPLOCATION';
export const INVALIDATE_IPLOCATION = 'INVALIDATE_IPLOCATION';

const requestIpLocation = createAction(REQUEST_IPLOCATION);
const receiveIpLocation = createAction(RECEIVE_IPLOCATION);
export const invalidateIpLocation = createAction(INVALIDATE_IPLOCATION);


/**
 * retrieve the ip location object
 */
const fetchIpLocation = () => (dispatch) => {
  dispatch(requestIpLocation());
  ipLocationService.getIpLocation()
    .then((result) => {
      dispatch(receiveIpLocation({
        receivedAt: Date.now(),
        result,
      }));
    })
    .catch((error) => {
      dispatch(invalidateIpLocation({
        receivedAt: Date.now(),
        message: error.message,
      }));
    });
};

/**
 * checks if a ip location should be fetched from the server
 * @param {object} state
 * @return {boolean}
 */
const shouldFetchIpLocation = (state) => {
  if (!state.ipLocation || !state.ipLocation.position) {
    return true;
  } else if (state.ipLocation.isFetching) {
    return false;
  }
  return state.ipLocation.didInvalidate;
};

/**
 * checks to see if the ip location needs to be fetched or retrieved from cache
 * @return {object}
 */
export const fetchIpLocationIfNeeded = () => (
  (dispatch, getState) => {
    if (shouldFetchIpLocation(getState())) {
      return dispatch(fetchIpLocation());
    }
    return getState().ipLocation;
  }
);

import { createAction } from 'redux-actions';
import geoLocationService from './geoLocation.service';

export const REQUEST_GEOLOCATION = 'REQUEST_GEOLOCATION';
export const RECEIVE_GEOLOCATION = 'RECEIVE_GEOLOCATION';
export const INVALIDATE_GEOLOCATION = 'INVALIDATE_GEOLOCATION';

const requestGeoLocation = createAction(REQUEST_GEOLOCATION);
const receiveGeoLocation = createAction(RECEIVE_GEOLOCATION);
export const invalidateGeoLocation = createAction(INVALIDATE_GEOLOCATION);


/**
 * retrieve the geolocation object
 */
const fetchGeoLocation = () =>
  (dispatch) => {
    dispatch(requestGeoLocation());

    geoLocationService.getGeoLocation()
      .then((result) => {
        const position = {
          coords: {
            accuracy: result.coords.accuracy,
            altitude: result.coords.altitude,
            altitudeAccuracy: result.coords.altitudeAccuracy,
            heading: result.coords.heading,
            latitude: result.coords.latitude,
            longitude: result.coords.longitude,
            speed: result.coords.speed,
          },
          timestamp: result.timestamp || null,
        };

        dispatch(receiveGeoLocation({
          receivedAt: Date.now(),
          position,
        }));
      })
      .catch((error) => {
        dispatch(invalidateGeoLocation({
          receivedAt: Date.now(),
          message: error.message,
        }));
      });
  };

/**
 * checks if a geolocation should be fetched from the server
 * @param {object} state
 * @return {boolean}
 */
const shouldFetchGeoLocation = (state) => {
  if (!state.geoLocation || !state.geoLocation.position) {
    return true;
  } else if (state.geoLocation.isFetching) {
    return false;
  }
  return state.geoLocation.didInvalidate;
};

/**
 * checks to see if the geolocation needs to be fetched or retrieved from cache
 * @return {object}
 */
export const fetchGeoLocationIfNeeded = () => (
  (dispatch, getState) => {
    if (shouldFetchGeoLocation(getState())) {
      return dispatch(fetchGeoLocation());
    }
    return getState().geoLocation;
  }
);

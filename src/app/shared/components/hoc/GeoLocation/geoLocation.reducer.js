import {
  REQUEST_GEOLOCATION,
  RECEIVE_GEOLOCATION,
  INVALIDATE_GEOLOCATION,
} from './geoLocation.actions';

function geoLocationReducer(
  state = {
    didInvalidate: false,
    isFetching: false,
    success: false,
  },
  action,
) {
  switch (action.type) {
    case INVALIDATE_GEOLOCATION:
      return Object.assign({}, state, {
        didInvalidate: true,
        isFetching: false,
      });

    case REQUEST_GEOLOCATION:
      return Object.assign({}, state, {
        didInvalidate: false,
        isFetching: true,
      });

    case RECEIVE_GEOLOCATION:
      return Object.assign({}, state, {
        didInvalidate: false,
        isFetching: false,
        lastUpdated: action.payload.receivedAt,
        message: action.payload.message || null,
        position: action.payload.position || null,
        success: true,
      });

    default:
      return state;
  }
}

export default geoLocationReducer;

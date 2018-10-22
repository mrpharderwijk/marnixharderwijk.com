import {
  REQUEST_IPLOCATION,
  RECEIVE_IPLOCATION,
  INVALIDATE_IPLOCATION,
} from './IpLocationActions';

function ipLocationReducer(
  state = {
    didInvalidate: false,
    isFetching: false,
    success: false,
  },
  action,
) {
  switch (action.type) {
    case INVALIDATE_IPLOCATION:
      return Object.assign({}, state, {
        didInvalidate: true,
        isFetching: false,
      });

    case REQUEST_IPLOCATION:
      return Object.assign({}, state, {
        didInvalidate: false,
        isFetching: true,
      });

    case RECEIVE_IPLOCATION:
      return Object.assign({}, state, {
        didInvalidate: false,
        isFetching: false,
        lastUpdated: action.payload.receivedAt,
        position: action.payload.result,
        success: true,
      });

    default:
      return state;
  }
}

export default ipLocationReducer;

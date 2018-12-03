import {
  SHOULD_SHOW_BACK_BUTTON,
} from './NavigationActions';

function NavigationReducer(
  state = {
    didInvalidate: false,
    isFetching: false,
    backButton: false,
  },
  action,
) {
  switch (action.type) {
    // case INVALIDATE_MENU_ITEMS:
    //   return Object.assign({}, state, {
    //     didInvalidate: true,
    //     isFetching: false,
    //   });

    // case REQUEST_MENU_ITEMS:
    //   return Object.assign({}, state, {
    //     didInvalidate: false,
    //     isFetching: true,
    //   });

    // case RECEIVE_MENU_ITEMS:
    //   return Object.assign({}, state, {
    //     didInvalidate: false,
    //     isFetching: false,
    //     lastUpdated: action.payload.receivedAt,
    //     items: action.payload.items || [],
    //   });

    case SHOULD_SHOW_BACK_BUTTON:
      return Object.assign({}, state, {
        didInvalidate: false,
        isFetching: false,
        lastUpdated: action.payload.receivedAt,
        backButton: action.payload.backButton,
      });

    default:
      return state;
  }
}

export default NavigationReducer;

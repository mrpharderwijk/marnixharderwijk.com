import { createAction } from 'redux-actions';

export const SHOULD_SHOW_BACK_BUTTON = 'SHOULD_SHOW_BACK_BUTTON';

const shouldShowBackButton = createAction(SHOULD_SHOW_BACK_BUTTON);

const isNotHomePage = (url) => {
  const urlArr = url.split('/').filter(Boolean);
  return Boolean(urlArr.length);
};

/**
 * retrieve the back button value
 */
export const showBackButton = location => (dispatch) => {
  dispatch(shouldShowBackButton({
    receivedAt: Date.now(),
    backButton: isNotHomePage(location.pathname),
  }));
};

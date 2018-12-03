import { combineReducers } from 'redux';
import cookieReducer from '../../shared/components/common/Cookies/redux/CookiesReducer';
import ipLocationReducer from '../../shared/components/hoc/IpLocation/redux/IpLocationReducer';
import NavigationReducer from '../../shared/components/common/Navigation/redux/NavigationReducer';

const applicationReducer = combineReducers({
  cookies: cookieReducer,
  ipLocation: ipLocationReducer,
  navigation: NavigationReducer,
});

export default applicationReducer;

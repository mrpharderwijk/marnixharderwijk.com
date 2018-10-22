import { combineReducers } from 'redux';
import cookieReducer from '../../shared/components/common/Cookies/redux/CookiesReducer';
import ipLocationReducer from '../../shared/components/hoc/IpLocation/redux/IpLocationReducer';

const applicationReducer = combineReducers({
  cookies: cookieReducer,
  ipLocation: ipLocationReducer,
});

export default applicationReducer;

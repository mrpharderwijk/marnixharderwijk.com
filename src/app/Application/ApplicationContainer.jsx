import { connect } from 'react-redux';
import IpLocationHOC from '../shared/components/hoc/IpLocation/IpLocationHoc';
import CookiesHOC from '../shared/components/common/Cookies/CookiesHoc';
import Application from './Application';

export default connect()(CookiesHOC(IpLocationHOC(Application)));

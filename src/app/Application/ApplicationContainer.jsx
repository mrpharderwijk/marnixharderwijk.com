import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import IpLocationHOC from '../shared/components/hoc/IpLocation/IpLocationHoc';
import CookiesHOC from '../shared/components/common/Cookies/CookiesHoc';
import Application from './Application';

export default withRouter(connect()(CookiesHOC(IpLocationHOC(Application))));

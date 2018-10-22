import { connect } from 'react-redux';
import IpLocationHOC from '../../shared/components/hoc/IpLocation/IpLocationHoc';
import CookiesHOC from '../../shared/components/common/Cookies/CookiesHoc';
import Main from './Main';

const mapStateToProps = state => ({ cookies: state.cookies });

export default connect(mapStateToProps)(CookiesHOC(IpLocationHOC(Main)));

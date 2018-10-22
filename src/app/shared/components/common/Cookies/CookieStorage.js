import { Cookies } from 'react-cookie';

export default class CookieStorage {
  static get cookies() {
    return new Cookies();
  }

  static getAllCookies(cookieKey = null) {
    if (cookieKey) {
      return this.cookies.get(cookieKey) || false;
    }

    return this.cookies.getAll() || {};
  }

  static setCookie(cookieKey, cookieValue) {
    if (!cookieKey) {
      console.error('cookie not set, due to no cookie key defined...');
    }
    this.cookies.set(cookieKey, cookieValue);
  }

  static remove(cookieKey) {
    this.cookies.remove(cookieKey, { path: '/' });
  }
}

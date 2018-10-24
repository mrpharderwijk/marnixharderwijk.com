import httpService from '../../../services/HttpService';

export default {
  async getIpLocation() {
    if (navigator.onLine) {
      return (
        await httpService.get(this.urlRoot, {
          baseURL: 'https://json.geoiplookup.io/',
          withoutAuth: true,
        })
      ).data;
    }

    return this.rejectPosition({ code: 'NO_INTERNET' });
  },

  rejectPosition(error) {
    let message = '';

    switch (error.code) {
      case error.NO_INTERNET:
        message = 'No internet connection.';
        break;
      case error.UNKNOWN_ERROR:
      default:
        message = 'An unknown error occurred.';
        break;
    }

    return { message };
  },
};

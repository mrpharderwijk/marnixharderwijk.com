export default {
  getGeoLocation(options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  }) {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(resolve, (error) => {
          reject(this.rejectPosition(error));
        }, options);
      }

      return this.rejectPosition({ code: 'BROWSER_SUPPORT' });
    });
  },

  rejectPosition(error) {
    let message = '';

    switch (error.code) {
      case error.PERMISSION_DENIED:
        message = 'User denied the request for Geolocation.';
        break;
      case error.POSITION_UNAVAILABLE:
        message = 'Location information is unavailable.';
        break;
      case error.TIMEOUT:
        message = 'The request to get user location timed out.';
        break;
      case error.BROWSER_SUPPORT:
        message = 'No browser support';
        break;
      case error.UNKNOWN_ERROR:
      default:
        message = 'An unknown error occurred.';
        break;
    }

    return { message };
  },
};

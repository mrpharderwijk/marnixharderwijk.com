import axios from 'axios';
import config from '../config/development';
import ApplicationHistory from '../../Application/ApplicationHistory';
import { paths } from '../helpers/RoutesHelper';

const httpService = axios.create({ baseURL: config.apiTarget });

httpService.interceptors.request.use(
  (axiosConfig) => {
    if (axiosConfig.withoutAuth) return axiosConfig;

    // const { emailAddress } = userService.currentUser();
    // const { token } = userService;

    return {
      ...axiosConfig,
      headers: {
        ...axiosConfig.headers,
        // 'X-User-Email': emailAddress,
        // 'X-Access-Token': token,
      },
    };
  },
  error => Promise.reject(error),
);

httpService.interceptors.response.use(
  response => response,
  (error) => {
    const {
      message,
      response: errorResponse,
    } = error;

    if (errorResponse) {
      console.log('errorResponse: ', errorResponse);
      switch (errorResponse.status) {
        case 401:
        case 403:
          console.error(errorResponse.data.message);
          ApplicationHistory.push(paths.signIn());
          break;

        default:
          console.error(errorResponse.data.message);
      }
    } else if (message === 'Network Error') {
      console.error('A network error occurred, please check your internet');
    }

    return Promise.reject(error);
  },
);

export default httpService;

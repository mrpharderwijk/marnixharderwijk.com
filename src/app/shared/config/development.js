const config = {
  env: process.env.NODE_ENV,
  target: 'http://localhost:3000',
  apiTarget: 'http://localhost:3001/v1',
  apiPath: '/v1',
  storage: {
    localizationKey: 'i18nextLng',
  },
  cookie: {
    approval: 'approval',
  },
};

export default config;

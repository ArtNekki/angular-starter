export const environment = {
  production: false,
  adminUrl: process.env['STRAPI_URL'],
  apiUrl: `${process.env['STRAPI_URL']}/api`,
  dopplerConfig: process.env['DOPPLER_CONFIG'],
  name: 'dev',
};

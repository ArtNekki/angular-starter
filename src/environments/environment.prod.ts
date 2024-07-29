export const environment = {
  production: true,
  adminUrl: process.env['STRAPI_URL'],
  apiUrl: `${process.env['STRAPI_URL']}/api`,
  dopplerConfig: process.env['DOPPLER_CONFIG'],
  name: 'prod',
};

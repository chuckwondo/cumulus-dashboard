module.exports = {
  target: process.env.DAAC_NAME || 'local',
  environment: process.env.STAGE || 'production',
  nav: {
    order: ['collections'],
    exclude: {
      'pdrs': process.env.HIDE_PDR || true
    }
  },
  apiRoot: process.env.APIROOT || 'https://example.com',
  kibanaRoot: process.env.KIBANAROOT || false,
  graphicsPath: (process.env.BUCKET || '') + '/graphics/',
  enableRecovery: process.env.ENABLE_RECOVERY || false
};

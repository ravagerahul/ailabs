const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/session/api/v1',
    createProxyMiddleware({
      target: 'http://theailabs.live',
      changeOrigin: true,
    })
  );
};

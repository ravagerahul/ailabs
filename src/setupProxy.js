const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/session/api/v1',
    createProxyMiddleware({
      target: 'http://13.202.144.38:8080',
      changeOrigin: true,
    })
  );
};

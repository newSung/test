const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://port-0-servertest2-619z9h2lllkpq5cz.sel3.cloudtype.app/',
            changeOrigin: true,
        })
    );
};
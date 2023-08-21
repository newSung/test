const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://port-0-servertest-619z9h2lllkaic66.sel3.cloudtype.app/',
            changeOrigin: true,
        })
    );
};
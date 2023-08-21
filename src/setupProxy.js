const { createProxyMiddleware } = require('http-proxy-middleware');
const proxy = {
    target: 'https://port-0-servertest2-619z9h2lllkpq5cz.sel3.cloudtype.app',
    changeOrigin: true
}
module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware(proxy)
    );
};
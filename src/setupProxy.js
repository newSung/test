const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    // 백엔드 서버의 주소와 프록시 경로 설정
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://port-0-servertest-619z9h2lllkaic66.sel3.cloudtype.app',
            changeOrigin: true,
        })
    );
};
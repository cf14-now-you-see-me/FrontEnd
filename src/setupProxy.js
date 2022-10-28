const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(createProxyMiddleware('/api',{
        target: 'http://cf22-nysm-be.herokuapp.com/api',
        changeOrigin: true,
        pathRewrite: {
            '^/api': ''
        },
    }));
    app.use(createProxyMiddleware('/maps-api',{
        target: 'https://maps.googleapis.com/maps/api',
        changeOrigin: true,
        pathRewrite: {
            '^/maps-api': ''
        },
    }));
}
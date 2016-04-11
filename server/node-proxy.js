const httpProxy = require('http-proxy');
const winston = require('winston');
const proxyConfig = require('./proxy-config');

/*
 * Installs routes that proxy based on the settings in ./proxy-config.
 * If no settings are provided, no proxies are installed.
 */
module.exports = (app) => {
  const paths = Object.keys(proxyConfig);
  if (!paths.length) {
    return;
  }

  const proxy = httpProxy.createProxyServer()
    .on('error', e => winston.error(e));

  paths.forEach(path => {
    const config = proxyConfig[path];
    if (path && config) {
      winston.info(`Enabling proxy ${path} => `, config);
      app.use(path, (req, res) => {
        proxy.web(req, res, config);
      });
    }
  });
};

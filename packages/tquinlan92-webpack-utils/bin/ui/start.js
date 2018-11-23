#!/usr/bin/env node

const compiler = require('../compiler');
const webpackConfig = require('../../src/webpack/ui/webpack.config');
const WebpackDevServer = require('webpack-dev-server');
const opn = require('opn');

const devServer = new WebpackDevServer(compiler(webpackConfig), {
  historyApiFallback: true,
  host: '0.0.0.0',
  disableHostCheck: true,
  port: 8080,
  compress: true,
  hot: true,
  watchContentBase: true,
  open: true
});
// Launch WebpackDevServer.
devServer.listen(8080, '0.0.0.0', (err, stats) => {
  console.log('stats', stats);
  console.log('TQUINLAN92 WEBPACK SERVER STARTING ON PORT 8080')
  if (err, stats) {
    return console.log(err);
  }
  opn('http://localhost:8080');
});

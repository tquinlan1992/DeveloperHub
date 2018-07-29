#!/usr/bin/env node

const compiler = require('../compiler');
const webpackConfig = require('../../src/webpack/ui/webpack.config');
const compilerHandler = require('../compilerHandler');
const WebpackDevServer = require('webpack-dev-server');

const devServer = new WebpackDevServer(compiler(webpackConfig), {
  historyApiFallback: true,
  host: '0.0.0.0',
  disableHostCheck: true,
  port: 8080,
  compress: false,
  hot: true
});
// Launch WebpackDevServer.
devServer.listen(8080, '0.0.0.0', err => {
  if (err) {
    return console.log(err);
  }
});
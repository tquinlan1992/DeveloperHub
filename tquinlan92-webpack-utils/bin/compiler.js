const Webpack = require('webpack');
const path = require('path');
const webpackConfig = require('../src/webpack.config');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const sourcePath = path.resolve(__dirname, resolveApp('./src'));

const compiler = Webpack(webpackConfig(sourcePath)('development'));

module.exports = compiler;
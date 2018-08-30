const Webpack = require('webpack');
const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const sourcePath = path.resolve(__dirname, resolveApp('./src'));

module.exports = function(webpackConfig, developmentOrProduction) {
    return Webpack(webpackConfig(sourcePath)(developmentOrProduction ? developmentOrProduction : 'development'));
};
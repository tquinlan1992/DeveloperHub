const path = require('path');
const webpackUtils = require('tquinlan92-webpack-utils');

const sourcePath = path.join(__dirname, './src');

// const openBrowser = new OpenBrowserPlugin({
//     url: `http://localhost:${port}`
// });

module.exports = webpackUtils.webpackConfig(sourcePath);
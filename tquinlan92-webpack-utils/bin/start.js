#!/usr/bin/env node

const compiler = require('./compiler');
const webpackConfig = require('../src/webpack.config');
const compilerHandler = require('./compilerHandler');

compiler(webpackConfig).watch({
    // Example watchOptions
    aggregateTimeout: 300,
    poll: undefined
  }, compilerHandler);
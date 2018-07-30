#!/usr/bin/env node

const compiler = require('./compiler');
const compilerHandler = require('./compilerHandler');
const webpackConfig = require('../src/webpack.config');

compiler(webpackConfig).run(compilerHandler);
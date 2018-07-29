#!/usr/bin/env node

const compiler = require('./compiler');
const compilerHandler = require('./compilerHandler');

compiler.watch({
    // Example watchOptions
    aggregateTimeout: 300,
    poll: undefined
  }, compilerHandler);
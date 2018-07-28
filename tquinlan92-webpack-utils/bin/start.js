#!/usr/bin/env node

const compiler = require('./compiler');

compiler.watch({
    // Example watchOptions
    aggregateTimeout: 300,
    poll: undefined
  }, (err, stats) => {
    if (err || stats.hasErrors()) {
      // Handle errors here
    }
    // Done processing
});
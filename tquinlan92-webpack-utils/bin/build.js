#!/usr/bin/env node

const compiler = require('./compiler');

compiler.run((err, stats) => {
    if (err || stats.hasErrors()) {
      // Handle errors here
      console.log('stats', stats);
    }
    // Done processing
});
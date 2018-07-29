#!/usr/bin/env node

const compiler = require('./compiler');
const compilerHandler = require('./compilerHandler');

compiler.run(compilerHandler);
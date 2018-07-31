'use strict';
const Generator = require('yeoman-generator');
const commandExists = require('command-exists').sync;
const yosay = require('yosay');
const chalk = require('chalk');
const wiredep = require('wiredep');
const mkdirp = require('mkdirp');
const _s = require('underscore.string');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.option('skip-welcome-message', {
      desc: 'Skips the welcome message',
      type: Boolean
    });

    this.option('skip-install-message', {
      desc: 'Skips the message after the installation of dependencies',
      type: Boolean
    });
  }

  initializing() {
    this.pkg = require('../package.json');
  }

  writing() {
    this._writingTslint();
    this._writingTsconfig();
    this._writingReadme();
    this._writingPackageJson();
    this._writingGitIgnore();
    this._writingJestConfig();
    this._writingSrcIndex();
    this._writingSrcIndexTest();
    this._writingVscode();
  }

  _writingTslint() {
    this.fs.copy(
      this.templatePath('app/tslint.json'),
      this.destinationPath('tslint.json')
    );
  }

  _writingTsconfig() {
    this.fs.copy(
      this.templatePath('app/tsconfig.json'),
      this.destinationPath('tsconfig.json')
    );
  }

  _writingReadme() {
    this.fs.copy(
      this.templatePath('app/README.md'),
      this.destinationPath('README.md')
    );
  }

  _writingPackageJson() {
    this.fs.copy(
      this.templatePath('app/package.json'),
      this.destinationPath('package.json')
    );
  }

  _writingGitIgnore() {
    this.fs.copy(
      this.templatePath('app/_.gitignore'),
      this.destinationPath('.gitignore')
    );
  }

  _writingJestConfig() {
    this.fs.copy(
      this.templatePath('app/jest.config.js'),
      this.destinationPath('.jest.config.js')
    );
  }

  _writingSrcIndex() {
    this.fs.copy(
      this.templatePath('app/src/index.ts'),
      this.destinationPath('src/index.ts')
    );
  }

  _writingSrcIndexTest() {
    this.fs.copy(
      this.templatePath('app/src/index.test.ts'),
      this.destinationPath('src/index.test.ts')
    );
  }

  _writingVscode() {
    this.fs.copy(
      this.templatePath('app/_.vscode/launch.json'),
      this.destinationPath('.vscode/launch.json')
    );
  }

  end() {
    this.log(`You're done!`);
  }
};

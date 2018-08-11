'use strict';
const Generator = require('yeoman-generator');
const commandExists = require('command-exists').sync;
const yosay = require('yosay');
const chalk = require('chalk');
const wiredep = require('wiredep');
const mkdirp = require('mkdirp');
const _s = require('underscore.string');

const projectTypes = {
  library: "Library",
  uiProject: "Ui Project"
}

module.exports = class extends Generator {

  async prompting() {
    const answers = await this.prompt([{
      type: 'list',
      name: 'buildType',
      message: 'What do you want to make today?',
          choices: [ projectTypes.library, projectTypes.uiProject ]
      }]);
    this.projectType = answers.buildType;
  }

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
    if (this.projectType === projectTypes.library) {
      this.fs.copy(
        this.templatePath('library/**/*'),
        this.destinationRoot('./')
      );
    } else if (this.projectType === projectTypes.uiProject) {
      this.fs.copy(
        this.templatePath('ui/**/*'),
        this.destinationRoot('./')
      );
    }
  }

  install() {
    this.npmInstall();
  }

  end() {
    this.log(`You're done!`);
  }

};

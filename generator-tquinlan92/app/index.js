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
      name: 'features',
      message: 'What do you want to make today?',
          choices: [ projectTypes.library, projectTypes,uiProject ]
      }]);
    this.projectType
    this.log('app name', answers.name);
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
      this.libraryWriting();
    } else if (this.projectType === projectTypes.uiProject) {
      this.fs.copy(
        this.templatePath('ui/**/*'),
        this.destinationRoot('./')
      );
    }
  }

  libraryWriting() {
    this._writingTslint();
    this._writingTsconfig();
    this._writingReadme();
    this._writingPackageJson();
    this._writingGitIgnore();
    this._writingNvmrc();
    this._writingSrcIndex();
    this._writingSrcIndexTest();
    this._writingVscode();
  }

  install() {
    this.npmInstall();
  }

  _writingTslint() {
    this.fs.copy(
      this.templatePath('library/tslint.json'),
      this.destinationPath('tslint.json')
    );
  }

  _writingTsconfig() {
    this.fs.copy(
      this.templatePath('library/tsconfig.json'),
      this.destinationPath('tsconfig.json')
    );
  }

  _libraryWritingReadme() {
    this.fs.copy(
      this.templatePath('library/README.md'),
      this.destinationPath('README.md')
    );
  }

  _libraryWritingPackageJson() {
    this.fs.copy(
      this.templatePath('library/package.json'),
      this.destinationPath('package.json')
    );
  }

  _libraryWritingGitIgnore() {
    this.fs.copy(
      this.templatePath('library/_.gitignore'),
      this.destinationPath('.gitignore')
    );
  }

  _libraryWritingNvmrc() {
    this.fs.copy(
      this.templatePath('library/_.nvmrc'),
      this.destinationPath('.nvmrc')
    );
  }

  _libraryWritingSrcIndex() {
    this.fs.copy(
      this.templatePath('library/src/index.ts'),
      this.destinationPath('src/index.ts')
    );
  }

  _libraryWritingSrcIndexTest() {
    this.fs.copy(
      this.templatePath('library/src/index.test.ts'),
      this.destinationPath('src/index.test.ts')
    );
  }

  _libraryWritingVscode() {
    this.fs.copy(
      this.templatePath('library/_.vscode/launch.json'),
      this.destinationPath('.vscode/launch.json')
    );
  }

  end() {
    this.log(`You're done!`);
  }

};

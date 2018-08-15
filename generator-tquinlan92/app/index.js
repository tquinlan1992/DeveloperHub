'use strict';
const Generator = require('yeoman-generator');
const path = require('path');

const projectTypes = {
  library: "Library",
  uiProject: "UI Project",
  storybook: "Storybook",
  uIComponentsStorybook: "UI with Components Library and Storybook"
}

function getDestionationPath(destinationPath) {
  return destinationPath ? path.resolve(destinationPath, "./") : "./";
}

module.exports = class extends Generator {

  async prompting() {
    const answers = await this.prompt([
      {
      type: 'list',
      name: 'buildType',
      message: 'What do you want to make today?',
      choices: [ 
        projectTypes.library,
        projectTypes.uiProject,
        projectTypes.storybook,
        projectTypes.uIComponentsStorybook
      ]
      }
    ]);
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
    switch(this.projectType) {
      case (projectTypes.library):
        this._writeLibrary();
        break;
      case (projectTypes.uiProject):
        this._writeUiProject();
        break;
      case (projectTypes.storybook):
        this._writeStorybook();
        break;
      case (projectTypes.uIComponentsStorybook): 
        this._writeUiComponentsStorybook();
        break;
    }
  }

  _writeUiComponentsStorybook() {
    this._writeLibrary('./components');
    this._writeUiProject('../app');
    this._writeStorybook('../storybook');
    this.fs.copy(
      [
      this.templatePath('all-projects/**/*'),
      this.templatePath('all-projects/.*'),
      this.templatePath('all-projects/.circleci/*')
      ],
      this.destinationRoot('../')
    ); 
  }

  _writeLibrary(destinationPath) {
    destinationPath = getDestionationPath(destinationPath);
    this.fs.copy(
      [
      this.templatePath('library/**/*'),
      this.templatePath('library/.*'),
      this.templatePath('library/.vscode/**/*')
      ],
      this.destinationRoot(destinationPath)
    ); 
  }
  
  _writeUiProject(destinationPath) {
    destinationPath = getDestionationPath(destinationPath);
    this.fs.copy(
      [
      this.templatePath('ui/**/*'),
      this.templatePath('ui/.*'),
      this.templatePath('ui/.vscode/**/*')
      ],
      this.destinationRoot(destinationPath)
    );
  }
  
  _writeStorybook(destinationPath) {
    destinationPath = getDestionationPath(destinationPath);
    this.fs.copy([
      this.templatePath('storybook/**/*'),
      this.templatePath('storybook/.*'),
      this.templatePath('storybook/.storybook/**/*'),
      this.templatePath('storybook/.vscode/**/*')
    ],
      this.destinationRoot(destinationPath)
    );
  }

  _createInstallSpawnPromise(destinationPath) {
    return new Promise((resolve, reject) => {
      const componentsSpawn = this.spawnCommand("npm", ["install"], { cwd: this.destinationPath(destinationPath)});
      componentsSpawn.on('close', (code) => {
        resolve();
      });
    });
  }

  async install() {
    if(this.projectType === projectTypes.uIComponentsStorybook) {
      await Promise.all([
        this._createInstallSpawnPromise('./components'),
        this._createInstallSpawnPromise('./app'),
        this._createInstallSpawnPromise('./storybook')
      ]);
      await this._createInstallSpawnPromise('./');
      this._end();
    } else {
      await this._createInstallSpawnPromise('./');
      this._end();
    }
  }

  _end() {
    this.log(`You're done!`);
  }

};

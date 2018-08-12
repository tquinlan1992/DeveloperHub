'use strict';
const Generator = require('yeoman-generator');

const projectTypes = {
  library: "Library",
  uiProject: "Ui Project",
  storybook: "Storybook"
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
        projectTypes.storybook 
      ]
      },
      {
        name: 'appName',
        message: 'What is your projects name (follow sample-poject-name pattern) name ?'
      }
    ]);
    this.projectType = answers.buildType;
    this.appName = answers.appName;
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
    }
  }

  _writeLibrary() {
    this.fs.copy(
      [
      this.templatePath('library/**/*'),
      this.templatePath('library/.*')
      ],
      this.destinationRoot('./')
    ); 
  }
  
  _writeUiProject() {
    this.fs.copy(
      [
      this.templatePath('ui/**/*'),
      this.templatePath('ui/.*')
      ],
      this.destinationRoot('./')
    );
  }
  
  _writeStorybook() {
    this.fs.copy([
      this.templatePath('storybook/**/*'),
      this.templatePath('storybook/.*'),
      this.templatePath('storybook/.storybook/**/*')
    ],
      this.destinationRoot('./')
    );
  }

  install() {
    this.npmInstall();
  }

  end() {
    this.log(`You're done!`);
  }

};

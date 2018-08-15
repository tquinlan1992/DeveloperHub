# Architecture npm packages
There are 4 npm packages in total in this repository.  They include the `root package.json`, `components/package.json`, `app/package.json`, and `storybook/package.json`.  

`components/package.json` outputs a library of compenents that extend @material-ui/core components. `app/package.json` and `storybook/package.json` are dependent on `components/package.json`.  

`app/package.json` contains a functioning application using redux to wire the components from `components/package.json`.  

`storybook/package.json` is an application demoing how different states given to components from `components/package.json` render.  

The `root package.json` contains npm scripts to help install, develop, test, build across all 3 projects  

## Installation
- Upgrade to the latest npm (use ^6.0.0)
    - `npm install npm@latest -g`
- Install dependencies
    - `npm ci`

## Development
- To start the development environment for `app`
    - `npm start`
- To start the development environment for `storybook`
    - `npm run start-storybook`

## Testing 
- To test all projects (`components`, `app`, `storybook`)
    - `npm run test-all`

## Build
- To build all projects (`components`, `app`, `storybook`)
    - `npm run build-all`
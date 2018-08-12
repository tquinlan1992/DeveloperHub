import { configure, addDecorator } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { configureViewport } from '@storybook/addon-viewport';

configureViewport({
  defaultViewport: 'iphone6'
});
 
addDecorator(centered);

function loadStories() {
  require('../stories/index.tsx');
  require('../stories/App/index.tsx');
  // You can require as many stories as you need.
}

configure(loadStories, module);
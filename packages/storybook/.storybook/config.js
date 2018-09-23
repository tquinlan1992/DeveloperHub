import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/TreeView');
  require('../stories/App');
  require('../stories/Home');
  // You can require as many stories as you need.
}

configure(loadStories, module);
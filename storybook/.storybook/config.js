import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/index.tsx');
  require('../stories/App/index.tsx');
  // You can require as many stories as you need.
}

configure(loadStories, module);
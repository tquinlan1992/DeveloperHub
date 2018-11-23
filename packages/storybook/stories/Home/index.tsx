import * as React from 'react';
import { Home } from 'tquinlan92-music-components/dist/components/Home';
import { storiesOf } from '@storybook/react';

storiesOf('Home', module)
  .add('case 1', () => (
    <Home />
  ));

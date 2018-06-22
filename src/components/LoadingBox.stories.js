import React from 'react';

import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

import LoadingBox from './LoadingBox';

storiesOf('LoadingBox', module)
  .addDecorator(StoryRouter())
  .add('default', () => <LoadingBox />);

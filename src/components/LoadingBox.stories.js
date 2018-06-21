import React from 'react';

import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import LoadingBox from './LoadingBox'

storiesOf('LoadingBox', module)
  .addDecorator(StoryRouter())
  .add('default', () => (
    <LoadingBox />
  ))
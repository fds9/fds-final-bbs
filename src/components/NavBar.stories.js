import React from 'react';

import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import NavBar from './NavBar'

storiesOf('NavBar', module)
  .addDecorator(StoryRouter())
  .add('empty', () => (
    <NavBar />
  ))
  .add('with username', () => (
    <NavBar username="test-user" />
  ))

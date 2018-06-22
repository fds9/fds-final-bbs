import React from 'react';

import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Post from './Post';

const lorem =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quam maiores, modi, eligendi cum illo sed deserunt doloremque ex, fuga dolores distinctio. Accusantium ipsam ratione nemo culpa id rerum illum?';

storiesOf('Post', module)
  .addDecorator(StoryRouter())
  .add('empty', () => <Post />)
  .add('with props', () => (
    <Post id={1} title="title" body={lorem} author="author" />
  ));

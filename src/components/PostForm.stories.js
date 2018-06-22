import React from 'react';

import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import PostForm from './PostForm';

storiesOf('PostForm', module)
  .addDecorator(StoryRouter())
  .add('empty', () => <PostForm />)
  .add('with actions', () => (
    <PostForm
      title="title"
      body="body"
      onTitleChange={action('onTitleChange')}
      onBodyChange={action('onBodyChange')}
      onSubmit={action('onSubmit')}
    />
  ));

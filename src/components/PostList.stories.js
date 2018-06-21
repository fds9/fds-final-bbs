import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import PostList from './PostList';

storiesOf('PostList', module)
  .add('empty', () => (
    <PostList />
  ))
  .add('with posts', () => (
    <PostList posts={[
      {
        id: 1,
        title: '게시글 제목 테스트',
        author: '작성자 1'
      },
      {
        id: 2,
        title: '게시글 2',
        author: '작성자 2'
      }
    ]} />
  ))

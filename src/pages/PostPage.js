import React from 'react';

import {PostProvider} from '../contexts/PostContext';
import PostContainer from '../containers/PostContainer';

export default function PostPage({match}) {
  return (
    <PostProvider id={match.params.id}>
      <PostContainer />
    </PostProvider>
  )
}
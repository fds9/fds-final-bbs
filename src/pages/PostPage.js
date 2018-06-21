import React from 'react';

import {PostProvider} from '../contexts/PostContext';
import PostContainer from '../containers/PostContainer';
import NavBarContainer from '../containers/NavBarContainer';

export default function PostPage({match}) {
  return (
    <PostProvider id={match.params.id}>
      <NavBarContainer />
      <PostContainer />
    </PostProvider>
  )
}
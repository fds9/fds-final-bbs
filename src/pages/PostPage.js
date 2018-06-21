import React from 'react';

import {PostProvider} from '../contexts/PostContext';
import PostContainer from '../containers/PostContainer';
import NavBarContainer from '../containers/NavBarContainer';
import CommentListContainer from '../containers/CommentListContainer';

export default function PostPage({match}) {
  const id = match.params.id;
  return (
    <PostProvider id={id}>
      <NavBarContainer />
      <PostContainer />
      <CommentListContainer postId={id} />
    </PostProvider>
  )
}
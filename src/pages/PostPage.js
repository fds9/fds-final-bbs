import React from 'react';

import {PostProvider} from '../contexts/PostContext';
import PostContainer from '../containers/PostContainer';
import NavBarContainer from '../containers/NavBarContainer';
import CommentListContainer from '../containers/CommentListContainer';
import MainLayout from '../components/MainLayout';

export default function PostPage({match}) {
  const id = match.params.id;
  return (
    <PostProvider id={id}>
      <NavBarContainer />
      <MainLayout>
        <PostContainer />
        <CommentListContainer postId={id} />
      </MainLayout>
    </PostProvider>
  )
}
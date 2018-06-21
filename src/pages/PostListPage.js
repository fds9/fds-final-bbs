import React from 'react';

import PostListContainer from '../containers/PostListContainer';
import {PostListProvider} from '../contexts/PostListContext';
import NavBarContainer from '../containers/NavBarContainer';

export default function PostListPage() {
  return (
    <PostListProvider>
      <NavBarContainer />
      <PostListContainer />
    </PostListProvider>
  );
}
import React from 'react';

import PostListContainer from '../containers/PostListContainer';
import { PostListProvider } from '../contexts/PostListContext';
import NavBarContainer from '../containers/NavBarContainer';
import MainLayout from '../components/MainLayout';

export default function PostListPage() {
  return (
    <PostListProvider>
      <NavBarContainer />
      <MainLayout>
        <PostListContainer />
      </MainLayout>
    </PostListProvider>
  );
}

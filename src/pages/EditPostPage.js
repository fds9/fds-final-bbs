import React from 'react';

import {PostFormProvider} from '../contexts/PostFormContext';
import PostFormContainer from '../containers/PostFormContainer';
import NavBarContainer from '../containers/NavBarContainer';
import MainLayout from '../components/MainLayout';

export default function NewPostPage({match}) {
  return (
    <PostFormProvider id={match.params.id}>
      <NavBarContainer />
        <MainLayout>
          <h1>게시글 수정</h1>
        </MainLayout>
      <PostFormContainer />
    </PostFormProvider>
  )
}
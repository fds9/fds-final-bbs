import React from 'react';

import {PostFormProvider} from '../contexts/PostFormContext';
import PostFormContainer from '../containers/PostFormContainer';
import NavBarContainer from '../containers/NavBarContainer';
import MainLayout from '../components/MainLayout';

export default function NewPostPage() {
  return (
    <PostFormProvider>
      <NavBarContainer />
      <MainLayout>
        <PostFormContainer />
      </MainLayout>
    </PostFormProvider>
  )
}
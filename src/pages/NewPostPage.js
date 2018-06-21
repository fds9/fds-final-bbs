import React from 'react';

import {PostFormProvider} from '../contexts/PostFormContext';
import PostFormContainer from '../containers/PostFormContainer';
import NavBarContainer from '../containers/NavBarContainer';

export default function NewPostPage() {
  return (
    <PostFormProvider>
      <NavBarContainer />
      <h1>새 게시글</h1>
      <PostFormContainer />
    </PostFormProvider>
  )
}
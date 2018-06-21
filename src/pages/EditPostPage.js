import React from 'react';

import {PostFormProvider} from '../contexts/PostFormContext';
import PostFormContainer from '../containers/PostFormContainer';
import NavBarContainer from '../containers/NavBarContainer';

export default function NewPostPage({match}) {
  return (
    <PostFormProvider id={match.params.id}>
      <NavBarContainer />
      <h1>게시글 수정</h1>
      <PostFormContainer />
    </PostFormProvider>
  )
}
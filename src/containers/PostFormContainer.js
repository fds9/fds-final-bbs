import React from 'react';

import { PostFormConsumer } from '../contexts/PostFormContext';
import { Redirect } from 'react-router-dom';
import PostForm from '../components/PostForm';
import LoadingBox from '../components/LoadingBox';

export default class PostFormContainer extends React.Component {
  render() {
    return (
      <PostFormConsumer>
        {({
          id,
          title,
          body,
          updateTitle,
          updateBody,
          submit,
          success,
          loading,
        }) =>
          loading ? (
            <LoadingBox />
          ) : success ? (
            <Redirect to={`/posts/${id}`} />
          ) : (
            <PostForm
              title={title}
              body={body}
              onTitleChange={updateTitle}
              onBodyChange={updateBody}
              onSubmit={submit}
            />
          )
        }
      </PostFormConsumer>
    );
  }
}

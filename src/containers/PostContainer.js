import React from 'react';

import Post from '../components/Post';
import {PostConsumer} from '../contexts/PostContext';
import LoadingBox from '../components/LoadingBox';

export default class PostContainer extends React.Component {
  render() {
    return (
      <PostConsumer>
        {({loading, id, title, body, author}) => loading ? (
          <LoadingBox />
        ) : (
          <Post id={id} title={title} body={body} author={author} />
        )}
      </PostConsumer>
    );
  }
}
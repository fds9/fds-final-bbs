import React from 'react';

import Post from '../components/Post';
import {PostConsumer} from '../contexts/PostContext';
import {AuthConsumer} from '../contexts/AuthContext';
import LoadingBox from '../components/LoadingBox';

export default class PostContainer extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {({id: userId}) => (
          <PostConsumer>
            {({loading, id, title, body, author, ownerId}) => loading ? (
              <LoadingBox />
            ) : (
              <Post 
                id={id} 
                title={title} 
                body={body} 
                author={author}
                isOwner={userId === ownerId}
              />
            )}
          </PostConsumer>
        )}
      </AuthConsumer>
      
    );
  }
}
import React from 'react';

import {PostListConsumer} from '../contexts/PostListContext';

export default class PostListContainer extends React.Component {
  render() {
    return (
      <PostListConsumer>
        {({posts}) => (
          <ul>
            {posts.map(post => (
              <li>{post.title}</li>
            ))}
          </ul>
        )}
      </PostListConsumer>
    )
  }
}
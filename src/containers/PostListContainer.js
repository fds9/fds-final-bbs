import React from 'react';
import { Link } from "react-router-dom";

import {PostListConsumer} from '../contexts/PostListContext';
import LoadingBox from '../components/LoadingBox';
import PostList from '../components/PostList';

export default class PostListContainer extends React.Component {
  render() {
    return (
      <PostListConsumer>
        {({loading, posts}) => loading ? (
          <LoadingBox />
        ) : (
          <PostList as={Link} posts={posts.map(p => ({linkProps: {to: `/posts/${p.id}`}, ...p}))} />
        )}
      </PostListConsumer>
    )
  }
}

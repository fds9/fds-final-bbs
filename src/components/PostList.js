import React from 'react';

import PostListItem from './PostListItem';
import {Link} from 'react-router-dom';

export default function PostList({
  posts = [], // 게시글 목록
} = {}) {
  return (
    <div>
      <h2>게시글 목록</h2>
      <Link to="/posts/new">새 게시글</Link>
      <ul>
        {posts.map(post => (
          <PostListItem key={post.id} {...post} />
        ))}
      </ul>
    </div>
  )
} 
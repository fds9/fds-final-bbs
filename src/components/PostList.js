import React from 'react';

import PostListItem from './PostListItem';
import { Link } from 'react-router-dom';

export default function PostList({
  posts = [], // 게시글 목록
} = {}) {
  return (
    <div className="post-list">
      <div className="level">
        <div className="level-left">
          <h2 className="title">게시글 목록</h2>
        </div>
        <div className="level-right">
          <Link to="/posts/new">새 게시글</Link>
        </div>
      </div>
      <ul>{posts.map(post => <PostListItem key={post.id} {...post} />)}</ul>
    </div>
  );
}

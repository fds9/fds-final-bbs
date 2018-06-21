import React from 'react';

import PostListItem from './PostListItem';

export default function PostList({
  as = 'a', // 링크로 사용할 컴포넌트
  posts = [], // 게시글 목록
} = {}) {
  return (
    <ul>
      {posts.map(post => (
        <PostListItem as={as} key={post.id} {...post} />
      ))}
    </ul>
  )
} 
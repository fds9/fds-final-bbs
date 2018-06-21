import React from 'react';
import {Link} from 'react-router-dom';

export default function Post({
  isOwner = false, // 현재 접속중인 사용자가 이 글의 소유자인지를 나타냄
  id = null,
  title = '',
  body = '',
  author = ''
} = {}) {
  return (
    <div>
      {isOwner && (
        <Link to={`/posts/${id}/edit`}>편집</Link>
      )}
      <h2>{title}</h2>
      <h3>{author}</h3>
      <p>{body}</p>
    </div>
  )
}
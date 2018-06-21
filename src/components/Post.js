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
      <div className="level">
        <div className="level-left">
          <h2 className="title">{title}</h2>
        </div>
        <div className="level-right">
          {isOwner && (
            <Link to={`/posts/${id}/edit`}>편집</Link>
          )}
        </div>
      </div>
      <p>작성자: {author}</p>
      <p>{body}</p>
    </div>
  )
}
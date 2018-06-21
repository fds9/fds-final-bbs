import React from 'react';

export default function Comment({
  body,
  author
}) {
  return (
    <div>
      <div>작성자: {author}</div>
      <div>{body}</div>
    </div>
  )
}
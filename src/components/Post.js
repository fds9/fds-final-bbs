import React from 'react';

export default function Post({
  id,
  title,
  body,
  author
} = {}) {
  return (
    <div>
      <h2>{title}</h2>
      <h3>{author}</h3>
      <p>{body}</p>
    </div>
  )
}
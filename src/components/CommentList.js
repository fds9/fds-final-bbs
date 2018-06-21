import React from 'react';

import Comment from './Comment';

export default function CommentList({
  comments = []
}) {
  return comments.length > 0 ? (
    <div>
      {comments.map(c => (
        <Comment key={c.id} {...c} />
      ))}
    </div>
  ) : (
    <div>댓글이 없습니다.</div>
  )
}
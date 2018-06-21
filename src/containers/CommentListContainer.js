import React from 'react';

import {CommentListProvider, CommentListConsumer} from '../contexts/CommentListContext';
import CommentList from '../components/CommentList';

export default function CommentListContainer({
  postId = null, // 게시글 ID
}) {
  return localStorage.getItem('token') ? (
    <CommentListProvider postId={postId}>
      <CommentListConsumer>
        {({loading, comments}) => loading ? null : (
          <CommentList comments={comments} />
        )}
      </CommentListConsumer>
    </CommentListProvider>
  ) : (
    <div>로그인하지 않은 사용자는 댓글을 볼 수 없습니다.</div>
  )
}
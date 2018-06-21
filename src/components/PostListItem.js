import React from "react";
import {Link} from "react-router-dom";

export default function PostListItem({
  id, // 게시글 ID
  title, // 게시글 제목
  author, // 작성자 이름
}) {
  return (
    <div>
      <span>
        제목: <Link to={`/posts/${id}`}>{title}</Link>
      </span>,
      <span>작성자: {author}</span>
    </div>
  );
}

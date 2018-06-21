import React from "react";

export default function PostListItem({
  as: As = 'a', // 링크로 사용할 컴포넌트 타입
  title, // 게시글 제목
  author, // 작성자 이름
  linkProps = {}, // 링크 컴포넌트에 넘겨줄 props
}) {
  return (
    <div>
      <span>
        제목: <As {...linkProps}>{title}</As>
      </span>,
      <span>작성자: {author}</span>
    </div>
  );
}

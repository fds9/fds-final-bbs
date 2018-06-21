import React from 'react';
import {Link} from 'react-router-dom';

export default function NavBar({
  username = null, // 표시할 사용자 이름
  onLogout = () => {}, // 로그아웃 버튼 클릭 시 호출할 함수
}) {
  return (
    <div>
      <Link to="/posts">BBS</Link>
      {username ? (
        <React.Fragment>
          <div>(로그인 중인 사용자: {username})</div>
          <button className="button" onClick={e => onLogout()}>로그아웃</button>
        </React.Fragment>
      ) : (
        <Link to="/login" className="button is-primary">로그인</Link>
      )}
    </div>
  )
}
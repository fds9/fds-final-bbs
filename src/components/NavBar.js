import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar({
  username = null, // 표시할 사용자 이름
  onLogout = () => {}, // 로그아웃 버튼 클릭 시 호출할 함수
}) {
  return (
    <nav className="navbar is-primary">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          BBS
        </Link>
      </div>

      <div className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item" to="/posts">
            게시글 목록
          </Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field is-grouped">
              {username ? (
                <React.Fragment>
                  <span className="navbar-item">{username}</span>
                  <p className="control">
                    <button onClick={e => onLogout()} className="button">
                      로그아웃
                    </button>
                  </p>
                </React.Fragment>
              ) : (
                <p className="control">
                  <Link to="/login" className="button is-primary">
                    로그인
                  </Link>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

import React from 'react';

export default function NavBar({
  brandAs: BrandAs = 'a', // 로고에 사용할 컴포넌트 타입
  brandProps = {}, // 로고에 넘겨줄 props
  loginAs: LoginAs = 'a', // 로그인 링크에 사용할 컴포넌트 타입
  loginProps = {}, // 로그인 링크에 넘겨줄 props
  username = null, // 표시할 사용자 이름
  onLogout = () => {}, // 로그아웃 버튼 클릭 시 호출할 함수
}) {
  return (
    <div>
      <BrandAs {...brandProps}>BBS</BrandAs>
      {username ? (
        <React.Fragment>
          <div>(로그인 중인 사용자: {username})</div>
          <button className="button" onClick={e => onLogout()}>로그아웃</button>
        </React.Fragment>
      ) : (
        <LoginAs className="button is-primary" {...loginProps}>로그인</LoginAs>
      )}
    </div>
  )
}
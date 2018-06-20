import React from 'react';

import postAPI from '../postAPI';

const {Provider, Consumer} = React.createContext({
  login: (username, password) => {}, // 로그인 함수
});

class AuthProvider extends React.Component {
  login = async (username, password) => {
    const res = await postAPI.post('/users/login', {
      username,
      password
    });
    localStorage.setItem('token', res.data.token);
  }
  render() {
    const value = {
      login: this.login,
    };
    return (
      <Provider value={value}>{this.props.children}</Provider>
    )
  }
}

export {AuthProvider, Consumer as AuthConsumer}
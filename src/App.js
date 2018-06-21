import React, { Component } from 'react';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';

import {AuthProvider} from './contexts/AuthContext';
import LoginPage from './pages/LoginPage';
import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <AuthProvider>
          <Route path="/login" component={LoginPage} />
          <Route exact path="/posts" component={PostListPage} />
          <Route path="/posts/:id" component={PostPage} />
          <Route exact path="/" render={() => (
            localStorage.getItem('token') ? (
              <Redirect to="/posts" />
            ) : (
              <Redirect to="/login" />
            )
          )} />
        </AuthProvider>
      </BrowserRouter>
    );
  }
}

export default App;

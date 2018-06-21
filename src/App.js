import React, { Component } from 'react';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';

import {AuthProvider} from './contexts/AuthContext';
import LoginPage from './pages/LoginPage';
import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';
import NewPostPage from './pages/NewPostPage';
import EditPostPage from './pages/EditPostPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <AuthProvider>
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route exact path="/posts" component={PostListPage} />
            <Route path="/posts/new" component={NewPostPage} />
            <Route path="/posts/:id/edit" component={EditPostPage} />
            <Route path="/posts/:id" component={PostPage} />
            <Route exact path="/" render={() => (
              localStorage.getItem('token') ? (
                <Redirect to="/posts" />
              ) : (
                <Redirect to="/login" />
              )
            )} />}
          </Switch>
        </AuthProvider>
      </BrowserRouter>
    );
  }
}

export default App;

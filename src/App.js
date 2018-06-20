import React, { Component } from 'react';

import {AuthProvider} from './contexts/AuthContext';
import LoginPage from './pages/LoginPage';

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <LoginPage />
      </AuthProvider>
    );
  }
}

export default App;

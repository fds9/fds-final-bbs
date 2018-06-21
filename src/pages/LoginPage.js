import React from 'react';

import LoginFormContainer from '../containers/LoginFormContainer';
import NavBarContainer from '../containers/NavBarContainer';

export default function LoginPage() {
  return (
    <React.Fragment>
      <NavBarContainer />
      <LoginFormContainer />
    </React.Fragment>
    
  );
}
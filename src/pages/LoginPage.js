import React from 'react';

import LoginFormContainer from '../containers/LoginFormContainer';
import NavBarContainer from '../containers/NavBarContainer';
import MainLayout from '../components/MainLayout';

export default function LoginPage() {
  return (
    <React.Fragment>
      <NavBarContainer />
      <MainLayout>
        <LoginFormContainer />
      </MainLayout>
    </React.Fragment>
  );
}

import React from 'react';
import Log from './pages/Log';
import Main from './pages/Main';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const {
    isAuthenticated,
  } = useAuth0();

  if (!isAuthenticated) {
    return(
      <Log />
    )
  }

  else if (isAuthenticated) {
    return(
      <Main />
    )
  }
}

export default App;
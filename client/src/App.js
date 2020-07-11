import React from 'react';
import Log from './pages/Log';
import Main from './pages/Main';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const {
    isAuthenticated,
    user
  } = useAuth0();

  if (!isAuthenticated) {
    return(
      <Log />
    )
  }

  else if (isAuthenticated) {
    if (localStorage.getItem(user.email) === 'isUser') {
      return(
        <Main isUser='true'/>
      )
    }
    else {
      localStorage.setItem(user.email, 'isUser')
      return(
        <Main isUser='false'/>
      )
    }
  }
}

export default App;
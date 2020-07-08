import React from 'react';
import { useAuth0 } from '@auth0/auth0-react'; 
import './style.css';

function LoginButton() {
  const {
    isAuthenticated,
    loginWithRedirect,
  } = useAuth0();

  return !isAuthenticated && (
    <button onClick={loginWithRedirect} className="loginBut">Log in</button>
  );
}

export default LoginButton;
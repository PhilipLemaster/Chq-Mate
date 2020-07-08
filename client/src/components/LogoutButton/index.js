import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './style.css';

function LogoutButton() {
  const {
    isAuthenticated,
    logout,
  } = useAuth0();

  return isAuthenticated && (
    <button className="logoutBut" onClick={() =>  {
      logout({ returnTo: window.location.origin });
    }}>Log Out</button>
  );
}

export default LogoutButton;
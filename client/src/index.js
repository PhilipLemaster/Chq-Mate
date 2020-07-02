import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Auth0Provider } from "@auth0/auth0-react";
import EditProfileForm from './components/EditProfileForm';
import GameOptions  from './components/GameOptions';

ReactDOM.render(
  <Auth0Provider
    domain="dev-8rymzpl8.us.auth0.com"
    clientId="AwOL2Fx1K8V5NathxFy05GPfVsQqR4ic"
    redirectUri={window.location.origin}>
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);

ReactDOM.render(
  <GameOptions />,
  document.getElementById("p2")
);

ReactDOM.render(
  <EditProfileForm />,
  document.getElementById("p5")
);


serviceWorker.unregister();
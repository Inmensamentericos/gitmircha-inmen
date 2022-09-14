import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

<Auth0Provider 
      domain="dev-e-42mjyr.us.auth0.com"
      clientId="ipgGYqXJyLVlT4IbVk36d5ZWg4wdc0Gw"
      redirectUri={"http://localhost:3000/"}>
      <App />
    </Auth0Provider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics subLink. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

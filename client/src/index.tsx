import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
import Login from "./components/Login";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Auth0Provider
        domain={process.env.REACT_APP_DOMAIN || ""}
        clientId={process.env.REACT_APP_CLIENT_ID || ""}
        audience={process.env.REACT_APP_AUDIENCE || ""}
        scope={process.env.REACT_APP_CLIENT_SCOPE || ""}
        redirectUri={window.location.origin}
        useRefreshTokens={true}
      >
        <Route exact path="/login" component={Login} />
        <App />
      </Auth0Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

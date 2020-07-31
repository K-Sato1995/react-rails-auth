import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import ProtectedPage from "./ProtectedPage";
import UnprotectedPage from "./UnprotectedPage";

function App() {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <div className="App">
      <Link to="/">Home</Link> | <Link to="/protected">Protected Page</Link>
      <Route exact path="/" component={UnprotectedPage} />
      <PrivateRoute path="/protected" component={ProtectedPage} />
      {isAuthenticated ? (
        <button onClick={() => logout()}>Log Out</button>
      ) : (
        <button onClick={() => loginWithRedirect()}>Log In</button>
      )}
    </div>
  );
}

export default App;

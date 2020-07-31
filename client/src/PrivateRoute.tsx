import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const PrivateRoute = ({ component: Component, ...options }) => {
  const { user, isAuthenticated } = useAuth0();

  return (
    <Route
      {...options}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} user={user} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default PrivateRoute;

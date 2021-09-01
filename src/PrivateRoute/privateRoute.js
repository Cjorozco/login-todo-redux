import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        localStorage.getItem("loggedin") ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/home",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
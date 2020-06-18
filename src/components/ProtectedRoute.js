import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AunthenticationContext } from "./AuthenticationProvider";

const ProtectedRoute = ({ component: RouteComponent, ...rest }) => {
  const { loggedInUser } = useContext(AunthenticationContext);
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !!loggedInUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/login"} />
        )
      }
    />
  );
};

export default ProtectedRoute;

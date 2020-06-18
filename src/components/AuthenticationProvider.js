import React, { useEffect, useState } from "react";
import firebase from "../firebase";
import loadingIcon from "../static/images/loadingIcon.gif";
export const AunthenticationContext = React.createContext();

export const AuthenticationProvider = ({ children }) => {
  const [loggedInUser, SetLoggedInUser] = useState(null);
  const [loading, SetLoading] = useState(true);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      SetLoggedInUser(user);
      SetLoading(false);
    });
  }, []);

  if (loading) {
    return <><img src={loadingIcon} alt="loading" className="loadingIcon"/></>;
   
  }

  return (
    <AunthenticationContext.Provider
      value={{
        loggedInUser,
      }}
    >
      {children}
    </AunthenticationContext.Provider>
  );
};

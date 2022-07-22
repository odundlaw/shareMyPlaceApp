import React from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  login: () => {},
  logOut: () => {},
});

export default AuthContext;

import React from "react";
import AuthContext from "./AuthContext";

function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const login = React.useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logOut = React.useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

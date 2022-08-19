import React from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

import AuthContext from "./AuthContext";

function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [, setStorage] = useLocalStorage("placeAuthData");

  const login = React.useCallback((data) => {
    setStorage({ accessToken: data.data });
    setIsLoggedIn(true);
  }, [setStorage]);

  const logOut = React.useCallback(() => {
    setStorage({});
    setIsLoggedIn(false);
  }, [setStorage]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

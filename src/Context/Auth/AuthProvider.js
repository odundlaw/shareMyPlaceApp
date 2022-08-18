import React from "react";
import {
  removeItemFromLocalStorage,
  saveToLocalStorage,
} from "../../utils/helperFunctions";
import AuthContext from "./AuthContext";

function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const login = React.useCallback((data) => {
    saveToLocalStorage({ accessToken: data.data });
    setIsLoggedIn(true);
  }, []);

  const logOut = React.useCallback(() => {
    removeItemFromLocalStorage("accessToken");
    setIsLoggedIn(false);
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

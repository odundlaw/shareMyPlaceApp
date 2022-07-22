import React from "react";
import AuthContext from "./AuthContext";

const useAuth = () => React.useContext(AuthContext);

export default useAuth;

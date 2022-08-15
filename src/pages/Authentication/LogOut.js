import React from "react";
import { Navigate } from "react-router-dom";

import useAuth from "../../Context/Auth/AuthState";

function LogOut() {
  const { logOut } = useAuth();

  React.useEffect(() => {
    logOut();
  }, [logOut]);

  return <Navigate to="/authentication" replace={true} />;
}

export default LogOut;

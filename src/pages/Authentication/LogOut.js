import React from "react";

function LogOut() {
  const { logOut } = useAuth();

  React.useEffect(() => {
    logOut();
  }, [])

  return <div>LogOut</div>;
}

export default LogOut;

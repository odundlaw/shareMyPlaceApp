import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";

function Authentication() {
  const [authState, setAuthState] = React.useState(false);

  const authStateHandler = () => setAuthState((authState) => !authState);

  return (
    <React.Fragment>
      {authState ? (
        <SignUp onChangeToLogin={authStateHandler} />
      ) : (
        <Login onChangeToSignUp={authStateHandler} />
      )}
    </React.Fragment>
  );
}

export default Authentication;

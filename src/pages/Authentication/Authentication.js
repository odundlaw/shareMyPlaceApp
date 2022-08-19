import React from "react";
import { useNavigate } from "react-router";

import Login from "./Login";
import SignUp from "./SignUp";

import { ArrowNarrowLeftIcon } from "@heroicons/react/outline";

function Authentication({ isOnline }) {
  const [authState, setAuthState] = React.useState(false);

  const navigate = useNavigate();

  const authStateHandler = () => setAuthState((authState) => !authState);

  return (
    <React.Fragment>
      <div
        className="top-0 p-2 fixed cursor-pointer rounded-full shadow-lg m-5 bg-slate-900 z-50 border hover:bg-pink-500 hover:transition-all hover:duration-300"
        onClick={() => navigate("/")}
      >
        <ArrowNarrowLeftIcon className="w-8 h-8 text-white" />
      </div>
      {authState ? (
        <SignUp onChangeToLogin={authStateHandler} />
      ) : (
        <Login onChangeToSignUp={authStateHandler} isOnline={isOnline} />
      )}
    </React.Fragment>
  );
}

export default Authentication;

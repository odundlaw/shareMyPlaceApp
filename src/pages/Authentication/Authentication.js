import React from "react";
import { useNavigate, useLocation } from "react-router";
import { toast } from "react-toastify";

import Login from "./Login";
import SignUp from "./SignUp";

import { ArrowNarrowLeftIcon } from "@heroicons/react/outline";

function Authentication({ isOnline }) {
  const [authState, setAuthState] = React.useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const authStateHandler = () => setAuthState((authState) => !authState);

  React.useEffect(() => {
    if (["logout"].includes(location.state?.from)) {
      toast.success("You are now signed Out!", { toastId: "toast3" });
    }
  }, [location.state?.from]);

  return (
    <React.Fragment>
      <div
        className="top-0 p-2 fixed cursor-pointer rounded-full shadow-lg m-5 bg-slate-900 z-50 border hover:bg-pink-500 hover:transition-all hover:duration-300"
        onClick={() => navigate("/")}
      >
        <ArrowNarrowLeftIcon className="w-8 h-8 text-white" />
      </div>
      {authState ? (
        <SignUp onChangeToLogin={authStateHandler} isOnline={isOnline} />
      ) : (
        <Login onChangeToSignUp={authStateHandler} isOnline={isOnline} />
      )}
    </React.Fragment>
  );
}

export default Authentication;

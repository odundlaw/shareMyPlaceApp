import React, { useState } from "react";
import { Outlet } from "react-router";
import useAuth from "../../../Context/Auth/AuthState";
import Backdrop from "../SideDrawer/Backdrop";
import SideDrawer from "../SideDrawer/SideDrawer";
import Header from "./Header";

function Layout() {
  const [show, setShow] = useState(false);

  const auth = useAuth();

  const authMemo = React.useMemo(() => {
    return auth;
  }, [auth]);

  const sideBarToggleHandler = React.useCallback(() => {
    setShow((preVal) => !preVal);
  }, []);

  return (
    <React.Fragment>
      <Backdrop show={show} onClick={sideBarToggleHandler} />
      <SideDrawer
        show={show}
        onClick={sideBarToggleHandler}
        auth={authMemo}
      />
      <Header
        show={show}
        toggle={sideBarToggleHandler}
        authentication={authMemo}
      />
      <main className="p-10 flex justify-center w-full bg-neutral-400 h-auto min-h-full mb-10">
        <Outlet />
      </main>
    </React.Fragment>
  );
}

export default Layout;

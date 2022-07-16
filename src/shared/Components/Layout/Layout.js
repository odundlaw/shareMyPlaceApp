import React, { useState } from "react";
import { Outlet } from "react-router";
import Backdrop from "../SideDrawer/Backdrop";
import SideDrawer from "../SideDrawer/SideDrawer";
import Header from "./Header";

function Layout() {
  const [show, setShow] = useState(false);

  const sideBarToggleHandler = () => {
    setShow((preVal) => !preVal);
  };

  return (
    <React.Fragment>
      <Backdrop show={show} onClick={sideBarToggleHandler} />
      <SideDrawer show={show} onClick={sideBarToggleHandler} />
      <Header show={show} toggle={sideBarToggleHandler} />
      <main className="p-10 flex justify-center w-full bg-neutral-400 h-full mb-10">
        <Outlet />
      </main>
    </React.Fragment>
  );
}

export default Layout;

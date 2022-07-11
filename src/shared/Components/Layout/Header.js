import React from "react";
import { MapIcon } from "@heroicons/react/outline";
import Navigation from "../Navigation/Navigation";

function Header({ show, toggle }) {
  return (
    <header className="sticky top-0 w-[100%] bg-white h-14 border-b border-b-slate-200 shadow-md flex items-center pl-0 pr-4 justify-between ">
      <strong className="font-light text-xl text-cyan-800 flex items-center justify-center cursor-pointer bg-slate-50 p-3.5">
        <MapIcon className="h-5 w-5 text-pink-300 mx-1" /> My Place App
      </strong>
      <Navigation show={show} toggle={toggle} />
    </header>
  );
}

export default Header;

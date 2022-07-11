import React from "react";
import ReactDOM from "react-dom";
import { linkItems } from "../Navigation/Navigation";
import NavigationItems from "../Navigation/NavigationItems";
import { MapIcon } from "@heroicons/react/outline";

function SideDrawer({ show, onClick }) {
  const sideBar = (
    <div
      className={`w-[50%] bg-slate-800  h-[100vh] fixed z-20 sm:hidden shadow-sm p-5 ${
        show
          ? "translate-x-0 transition-transform duration-200"
          : "-translate-x-96 transition-transform duration-200"
      }`}
    >
      <strong className="font-light text-xl text-cyan-800 flex items-center gap-2 justify-center cursor-pointer bg-slate-50 p-3.5 rounded-full mt-5">
        <MapIcon className="h-5 w-5 text-pink-300" /> My Place App
      </strong>

      <nav className="flex flex-col gap-4 mt-14 " onClick={onClick}>
        {linkItems?.map((link, index) => (
          <NavigationItems
            key={index}
            to={link.to}
            text={link.text}
            Icon={link.icon}
          />
        ))}
      </nav>
    </div>
  );
  return ReactDOM.createPortal(sideBar, document.getElementById("sideDrawer"));
}

export default SideDrawer;

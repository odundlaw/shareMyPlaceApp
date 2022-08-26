import React from "react";
import NavigationItems from "./NavigationItems";

import { MenuIcon, XIcon } from "@heroicons/react/outline";
import {
  AuthLinkItems,
  UnAuthenticatedLinkItems,
} from "../../../utils/linkItems";

function Navigation({ show, toggle, auth }) {

  const linkItems = auth.isLoggedIn
    ? AuthLinkItems("6303eb89b257da88c8d8cb68")
    : UnAuthenticatedLinkItems;

  return (
    <React.Fragment>
      <nav className="sm:hidden flex z-60">
        <div
          className="p-1 bg-slate-200 rounded-sm cursor-pointer hover:brightness-105 transition-all"
          onClick={toggle}
        >
          {show ? (
            <XIcon className="text-slate-600 h-6 w-6 transition-all" />
          ) : (
            <MenuIcon className="text-slate-600 h-7 w-7 transition-all" />
          )}
        </div>
      </nav>
      <nav className="hidden sm:basis-[75%] sm:max-w-md sm:flex md:max-w-md sm:justify-end sm:gap-2">
        {linkItems.map((link, index) => (
          <NavigationItems
            key={index}
            to={link.to}
            text={link.text}
            Icon={link.icon}
          />
        ))}
      </nav>
    </React.Fragment>
  );
}

export default Navigation;

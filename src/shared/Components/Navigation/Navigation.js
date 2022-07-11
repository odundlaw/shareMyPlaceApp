import React from "react";
import NavigationItems from "./NavigationItems";

import {
  UserIcon,
  MapIcon,
  PlusIcon,
  LoginIcon,
  MenuIcon,
  XIcon,
} from "@heroicons/react/outline";

export const linkItems = [
  { to: "/", text: "All Users", icon: UserIcon },
  { to: "/1/places", text: "My Places", icon: MapIcon },
  { to: "/places/new", text: "Add Place", icon: PlusIcon },
  { to: "/auth", text: "Authenticate", icon: LoginIcon },
];

function Navigation({ show, toggle }) {
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
      <nav className="hidden  sm:basis-[70%] sm:max-w-md  sm:flex md:max-w-md  justify-between">
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

import React from "react";
import { NavLink } from "react-router-dom";

function NavigationItems({ to, text, Icon }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `text-sm  font-light p-1.5 px-3 hover:brightness-105 hover:bg-pink-300 hover:text-white hover:rounded-full transition-all  flex items-center sm:gap-0 gap-2 ${
          isActive
            ? "bg-pink-400 text-white rounded-full shadow-sm"
            : "bg-none sm:text-slate-500 text-white"
        } `
      }
    >
      <Icon className="h-3 w-3 mx-1" />
      <span>{text}</span>
    </NavLink>
  );
}

export default NavigationItems;

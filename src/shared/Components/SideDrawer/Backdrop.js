import React from "react";
import ReactDOM from "react-dom";

const Backdrop = ({ show, onClick }) => {
  const backdropFilter = (
    <div
      className={`${
        show ? "block" : "hidden"
      } sm:hidden bg-slate-100 w-full h-[100vh] cursor-pointer fixed bg-opacity-50 z-5`}
      onClick={onClick}
    />
  );
  return ReactDOM.createPortal(
    backdropFilter,
    document.getElementById("backdrop")
  );
};

export default Backdrop;

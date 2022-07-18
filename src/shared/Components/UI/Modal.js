import { XIcon } from "@heroicons/react/outline";
import React from "react";
import ReactDOM from "react-dom";

function Modal({ children, show, header, footer, onClick, modalHeight }) {
  const modal = (
    <React.Fragment>
      {show && (
        <div
          className="w-full h-full fixed bg-neutral-500 opacity-60 z-40 cursor-pointer"
          onClick={onClick}
        />
      )}
      <div
        className={`${
          show
            ? "block translate-y-0 transition-all duration-300"
            : " -translate-y-full transition-all duration-300"
        } bg-transparent w-full flex items-center justify-center z-50 h-full fixed p-10`}
      >
        {" "}
        <div
          className={`max-w-lg bg-white container rounded-md ${
            modalHeight ? modalHeight : "h-[400px]"
          } relative shadow-lg`}
        >
          <header className="border-b border-b-slate-300 bg-pink-400 rounded-t-md p-2 flex justify-between items-center ">
            <span className="p-1 text-white text-xl font-bold-400">
              {header}
            </span>
            <span
              className="p-1 bg-white rounded-full hover:brightness-75 cursor-pointer hover:transition-all"
              onClick={onClick}
            >
              {" "}
              <XIcon height={30} width={30} className="text-slate-400" />{" "}
            </span>
          </header>
          <main className="">{children}</main>
          <footer className="bg-white  w-full p-3 bottom-0 rounded-b-md border-t-slate-300 shadow-inner">
            <span>{footer}</span>
          </footer>
        </div>
      </div>
    </React.Fragment>
  );
  return ReactDOM.createPortal(modal, document.getElementById("modal"));
}

export default Modal;

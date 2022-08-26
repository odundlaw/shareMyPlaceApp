import React from "react";

function Spinner() {
  return (
    <div className="flex items-center justify-center">
      <div
        className="spinner-border animate-spin inline-block w-5 h-5 border-4 rounded-full text-white"
        role="status"
      >
        <span className="visually-hidden"></span>
      </div>
    </div>
  );
}

export default Spinner;

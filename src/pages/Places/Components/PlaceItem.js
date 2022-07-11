import React from "react";

function PlaceItem(props) {
  return (
    <div className="container flex h-fit flex-col bg-white rounded-md shadow-md shadow-stone-700 gap-4">
      <img
        src={props.imageUrl}
        alt={props.title}
        className="w-full h-fit sm:h-[65%] rounded-t-md"
      />
      <main className="flex flex-col items-center justify-center p-2">
        <h1 className="font-extrabold text-2xl sm:text-3xl font-[Calibri]">
          {props.title}
        </h1>
        <h2 className="font-bold text-lg sm:text-xl font-[Calibri]">
          {props.address}
        </h2>
        <p className="text-slate-800 text-sm sm:text-lg text-center">
          {props.description}
        </p>
      </main>

      <footer className="flex w-full justify-center items-center border-t border-t-slate-300">
        <div className="p-4 space-x-6 flex">
          <button className="font-light text-xs p-1 rounded-sm bg-slate-400 sm:text-sm bg-transparent border px-2 hover:brightness-50">
            VIEW ON MAP
          </button>
          <button className="font-light text-xs p-1 rounded-sm  sm:text-sm bg-pink-400 text-white px-5 hover:brightness-50">
            EDIT
          </button>
          <button className="font-light text-xs p-1 rounded-sm sm:text-sm bg-pink-900 text-white px-5 hover:brightness-50">
            DELETE
          </button>
        </div>
      </footer>
    </div>
  );
}

export default PlaceItem;

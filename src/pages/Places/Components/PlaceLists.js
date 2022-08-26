import { MapIcon } from "@heroicons/react/outline";
import React from "react";
import PlaceItem from "./PlaceItem";

function PlaceLists({ userPlace }) {
  console.log(userPlace)
  if (userPlace.length <= 0) {
    return (
      <div className="shadow-md container flex flex-col justify-center items-center gap-4 p-10 rounded-md">
        <h2 className="text-xl font-light">
          No Places Found, Maybe Create One
        </h2>
        <button className="bg-slate-800 text-white p-2 px-4 rounded-full hover:bg-pink-300 flex items-center justify-center gap-2 hover:transition-all hover:duration-300">
          <MapIcon height={20} width={20} />
          Share Place
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-[90%] sm:w-[80%] md:w-[65%] lg:w-[55%] items-center gap-5">
      {userPlace?.map((place) => (
        <PlaceItem
          key={place._id}
          id={place._id}
          placeId={place.placeId}
          title={place.title}
          description={place.description}
          imageUrl={place.image}
          address={place.address}
          location={place.location}
          creator={place.creator}
        />
      ))}
    </div>
  );
}

export default PlaceLists;

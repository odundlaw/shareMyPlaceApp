import { UserIcon } from "@heroicons/react/outline";
import React from "react";
import UsersItem from "./UsersItem";

function UserList({ userData }) {
  if (userData.length === 0) {
    return (
      <div className="bg-white w-full h-auto relative m-auto rounded-md shadow-lg flex justify-center items-center p-6 flex-col gap-4">
        <UserIcon className="text-gray-500 h-14 w-14 border-2 p-2 border-silver rounded-full" />
        <h2 className="text-xl sm:text-2xl text-center text-slate-900">
          No Users to Show, But you can navigate around!
        </h2>
        <button className="py-2 px-4 bg-slate-900 text-white rounded-full hover:bg-pink-400 hover:transition-all hover:duration-300 ">
          Click to View Your Places
        </button>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-5">
      {userData?.map((item) => (
        <UsersItem
          key={item._id}
          id={item._id}
          name={item.fullName}
          places={item.places?.length}
          imageUrl={item.image}
        />
      ))}
    </div>
  );
}

export default UserList;

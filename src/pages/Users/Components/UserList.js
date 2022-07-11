import React from "react";
import UsersItem from "./UsersItem";

function UserList({ userData }) {
  if (userData.length === 0) {
    return <div>No Users Found</div>;
  }
  return (
    <div className="flex flex-col gap-5">
      {userData?.map((item) => (
        <UsersItem
          key={item.id}
          id={item.id}
          name={item.name}
          places={item.places}
          imageUrl={item.imageUrl}
        />
      ))}
    </div>
  );
}

export default UserList;

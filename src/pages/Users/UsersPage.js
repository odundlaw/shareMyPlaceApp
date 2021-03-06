import React from "react";
import UserList from "./Components/UserList";

const userList = [
  {
    id: "1",
    name: "Shittu Odunayo Lekan",
    places: 4,
    imageUrl: "odundlaw.jpg",
  },
  {
    id: "2",
    name: "Yusuf Olalekan Ridwan",
    places: 2,
    imageUrl: "odundlaw.jpg",
  },
];

const getUsers = () => userList;

function UsersPage() {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    setUsers(getUsers());
  }, [setUsers]);

  return (
    <div >
      <UserList userData={users} />
    </div>
  );
}

export default UsersPage;

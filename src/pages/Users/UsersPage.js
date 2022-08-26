import React from "react";
import UserList from "./Components/UserList";

import useFetch from "../../hooks/useFetch";
/* import useAuth from "../../Context/Auth/AuthState"; */
import Loader from "../../shared/Components/UI/Loader";
import { toast } from "react-toastify";

function UsersPage() {
  const [users, setUsers] = React.useState([]);

  const { resetErrors, loading, doApiCall, error } = useFetch();

  React.useEffect(() => {
    (async () => {
      try {
        resetErrors();
        const userData = await doApiCall("users");
        if (userData.statusText === "OK") {
          setUsers(userData.data);
        }
      } catch (err) {}
    })();
  }, [setUsers, doApiCall, resetErrors]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    toast.error("Unable to Fetch User at this Time!", { toastId: "error4" });
  }

  return (
    <div>
      <UserList userData={users} />
    </div>
  );
}

export default UsersPage;

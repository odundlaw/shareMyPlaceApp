import React from "react";
import { useLocation } from "react-router";

import UserList from "./Components/UserList";

import { toast } from "react-toastify";
import useFetch from "../../hooks/useFetch";
import useAuth from "../../Context/Auth/AuthState";
import swal from "sweetalert";

function UsersPage() {
  const [users, setUsers] = React.useState([]);

  const location = useLocation();

  const { isLoggedIn } = useAuth();

  const { resetErrors, loading, doApiCall, errors } = useFetch();

  React.useEffect(() => {
    if (["login"].includes(location.state?.from) && isLoggedIn) {
      toast.success("You have Signed In Successfully!", { toastId: "toast2" });
    }
  }, [location.state?.from, isLoggedIn]);

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

  if(loading){
    swal(
      "Internet Connection Error!",
      "Check your internet Connection and try again!",
    );
  }

  return (
    <div>
      <UserList userData={users} />
    </div>
  );
}

export default UsersPage;

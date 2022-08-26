import React from "react";
import { useParams } from "react-router";
import useFetch from "../../hooks/useFetch";
import PlaceLists from "./Components/PlaceLists";

import {toast } from "react-toastify";

function UserPlalces() {
  const [userPlace, setUserPlace] = React.useState([]);
  const { userId } = useParams();

  const { doApiCall, resetErrors, loading, error } = useFetch();

  React.useEffect(() => {
    (async () => {
      try {
        resetErrors();
        const places = await doApiCall(`place/user/${userId}`);
        if (places.statusText === "OK") {
          console.log(places)
          setUserPlace(places.data);
        }
      } catch (err) {}
    })();
  }, [resetErrors, setUserPlace, userId, doApiCall]);

  if (error) {
    toast.error(
      typeof error === "string"
        ? error
        : "Unable to Fetch User Places at this Time!",
      { toastId: "error4" }
    );
  }

  return <PlaceLists userPlace={userPlace} />;
}

export default UserPlalces;

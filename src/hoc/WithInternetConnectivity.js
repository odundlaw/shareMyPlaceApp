import React from "react";
import swal from "sweetalert";

function withInternetConnectivity(Component) {
  return function WithConnectivity(props) {
    const [online, setIsOnline] = React.useState(window.navigator.onLine);

    React.useEffect(() => {
      const updateNetwork = () => {
        setIsOnline(window.navigator.onLine);
      };
      window.addEventListener("online", updateNetwork);
      window.addEventListener("offline", updateNetwork);

      return () => {
        window.removeEventListener("online", updateNetwork);
        window.removeEventListener("offline", updateNetwork);
      };
    }, [setIsOnline]);

    if (!online) {
      swal(
        "Internet Connection Problem!",
        "You seemed to be Offline! Check Internet Conenction",
        "error",
        { timer: 3000 }
      );
    } else {
     /*  swal("Internet Connection is Back!", "Click Ok to Continue", "success", {
        timer: 3000,
      }); */
    }

    return (
      <React.Fragment>
        <Component {...props} isOnline={online} />
      </React.Fragment>
    );
  };
}

export default withInternetConnectivity;

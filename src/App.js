import { Routes, Route } from "react-router";

import withInternetConnectivity from "./hoc/WithInternetConnectivity";

import Layout from "./shared/Components/Layout/Layout";
import UserPlalces from "./pages/Places/UserPlaces";
import NewPlaces from "./pages/Places/NewPlaces";
import UsersPage from "./pages/Users/UsersPage";
import UpdatePlace from "./pages/Places/UpdatePlace";
import Authentication from "./pages/Authentication/Authentication";
import LogOut from "./pages/Authentication/LogOut";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import useAuth from "./Context/Auth/AuthState";

function App({ isOnline }) {
  const { isLoggedIn } = useAuth();
  console.log(isOnline);
  return (
    <div className="h-[100vh] bg-neutral-200 relative sm:overflow-y-scroll">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<UsersPage />} isOnline={isOnline} />
          <Route path="/:userId/places" element={<UserPlalces />} />
          {isLoggedIn && <Route path="/places/new" element={<NewPlaces />} />}
          {isLoggedIn && (
            <Route path="/places/:placeId" element={<UpdatePlace />} />
          )}
        </Route>
        <Route
          path="/authentication"
          element={<Authentication isOnline={isOnline} />}
        />
        <Route path="/signOut" element={<LogOut />} />
        <Route path="*" element={<div>No Page Found</div>} />
      </Routes>
    </div>
  );
}

export default withInternetConnectivity(App);

import { Routes, Route } from "react-router";

import Layout from "./shared/Components/Layout/Layout";
import UserPlalces from "./pages/Places/UserPlaces";
import NewPlaces from "./pages/Places/NewPlaces";
import UsersPage from "./pages/Users/UsersPage";
import UpdatePlace from "./pages/Places/UpdatePlace";
import Authentication from "./pages/Authentication/Authentication";
import useAuth from "./Context/Auth/AuthState";

function App() {
  const { isLoggedIn } = useAuth();
  console.log(isLoggedIn);
  return (
    <div className="h-[100vh] bg-neutral-200 relative sm:overflow-y-scroll">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<UsersPage />} />
          <Route path="/:userId/places" element={<UserPlalces />} />
          {isLoggedIn && <Route path="/places/new" element={<NewPlaces />} />}
          {isLoggedIn && (
            <Route path="/places/:placeId" element={<UpdatePlace />} />
          )}
        </Route>
        <Route path="/authentication" element={<Authentication />} />
        <Route path="*" element={<div>No Page Found</div>} />
      </Routes>
    </div>
  );
}

export default App;

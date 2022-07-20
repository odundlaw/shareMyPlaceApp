import { Routes, Route } from "react-router";
import UserPlalces from "./pages/Places/UserPlaces";
import NewPlaces from "./pages/Places/NewPlaces";
import UsersPage from "./pages/Users/UsersPage";
import Layout from "./shared/Components/Layout/Layout";
import UpdatePlace from "./pages/Places/UpdatePlace";
import Authentication from "./pages/Authentication/Authentication";

function App() {
  return (
    <div className="h-[100vh] bg-neutral-200 relative sm:overflow-y-scroll">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<UsersPage />} />
          <Route path="/:userId/places" element={<UserPlalces />} />
          <Route path="/places/new" element={<NewPlaces />} />
          <Route path="/places/:placeId" element={<UpdatePlace />} />
        </Route>
        <Route path="/authentication" element={<Authentication />} />
      </Routes>
    </div>
  );
}

export default App;

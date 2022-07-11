import { Routes, Route } from "react-router";
import UserPlalces from "./pages/Places/UserPlaces";
import UsersPage from "./pages/Users/UsersPage";
import Layout from "./shared/Components/Layout/Layout";

function App() {
  return (
    <div className="h-[100vh]">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<UsersPage />} />
          <Route path="/:userId/places" element={<UserPlalces />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import {
  Home,
  Login,
  PageNotFound,
  Post,
  User,
  Admin,
  AdminPanel,
} from "./screens";

// Lazy loaded components
const App = lazy(() => import("./App"));

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/posts/:id" element={<Post />} />
        <Route path="/user/:userId" element={<User />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/:postId" element={<AdminPanel />} />

        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};

export default PageRoutes;

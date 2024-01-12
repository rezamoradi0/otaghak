import { Navigate, Outlet } from "react-router-dom";
import Layout from "../pages/Layout";
import HomePage from "../pages/home/Home";
import App from "../App";
import HomeError from "../pages/home/HomeError";
import { useRoutes } from "react-router-dom";
import City from "../pages/city/City";
import Footer from "../components/Footer";
import Room from "../pages/room/Room";

const AppRoutes = () => {
  const role = "user";

  const MainWrapper = () => {
    return (
      <div>
        <Outlet />
      </div>
    );
  };
  const UserWrapper = () => {
    const isUser = role == "user";
    return isUser ? (
      <Layout>
        {" "}
        <Outlet />{" "}
      </Layout>
    ) : (
      <Navigate to="/sign-in" replace />
    );
  };
  const AdminWrapper = () => {
    const isAdmin = role == "admin";
    return isAdmin ? (
      <Layout>
        <Outlet />
      </Layout>
    ) : (
      <Navigate to="/sign-in" replace />
    );
  };
  const adminRoutes = [{ index: true, element: <>admin</> }];
  const userRoutes = [
    {
      element: <UserWrapper />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "city", children: [{ path: ":cityName", element: <City /> }] },
        {path:"room",children:[{path:":roomId",element:<Room/>}]}
      ],
    },
    { path: "/sing-in" },
  ];

  const routes = useRoutes([
    {
      path: "/",
      element: <MainWrapper />,
      errorElement: <HomeError />,
      children: role === "admin" ? adminRoutes : userRoutes,
    },
    {
      path: "/test",
      element: <>Test</>,
    },
  ]);

  return routes;
};

export default AppRoutes;

import { Routes, Route, Navigate } from "react-router-dom";
import { routes } from "../config/routes";
import PostsPage from "../pages/posts/posts";
import Layout from "../pages/layout";
import HomePage from "../pages/home/home";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path={routes.posts} element={<PostsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

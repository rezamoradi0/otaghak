import Home from "./pages/home/Home";
import store from "./redux/store";
import "./css/all.css";
import { Provider } from "react-redux";
import Layout from "./pages/Layout";
import {
  BrowserRouter,
  Route,
  Routes,
  link,
  useRoutes,
} from "react-router-dom";
// import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import AppRoutes from "./constant/routes";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;

import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Error from "./pages/error";
import Login from "./pages/login";
import SignUp from "./pages/signUp";
import DashBoard from "./pages/dashboard";

export const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
    errorElement: <Error />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/dashboard",
    element: <DashBoard />,
    errorElement: <Error />,
  },
  {
    path: "/error",
    element: <Error />,
    errorElement: <Error />,
  },
]);

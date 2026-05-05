import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Auth from "../pages/Auth";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import ToyDetails from "../components/ToyDetails/ToyDetails";
import MyProfile from "../components/MyProfile/MyProfile";
import Error from "../pages/Error";
import MyToys from "../components/MyToys/MyToys";
import ForgetPassword from "../components/ForgetPassword/ForgetPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        hydrateFallbackElement: (
          <div className="flex justify-center items-center h-screen text-4xl font-bold">
            L(
            <span className="inline-block text-[#ff4d4d] animate-spin">O</span>
            )ADING...
          </div>
        ),
        loader: () => fetch("/toys.json"),
      },
      {
        path: "toy/:id",
        loader: () => fetch("/toys.json"),
        element: (
          <PrivateRoute>
            <ToyDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/auth",
        element: <Auth />,
        children: [
          {
            path: "/auth/login",
            element: <Login />,
          },
          {
            path: "/auth/register",
            element: <Register />,
          },
        ],
      },
      {
        path: "/my_profile",
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-toys",
        element: (
          <PrivateRoute>
            <MyToys />
          </PrivateRoute>
        ),
      },
      {
        path: "/auth/forget-password",
        element: <ForgetPassword />
      }
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);
export default router;

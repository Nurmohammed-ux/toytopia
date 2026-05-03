import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";

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
            <span className="inline-block text-[#F9A51A] animate-spin">O</span>
            )ADING...
          </div>
        ),
        loader: () => fetch("/toys.json"),
      },
    ],
  },
]);
export default router;

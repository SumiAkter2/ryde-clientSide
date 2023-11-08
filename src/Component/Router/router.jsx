import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import NotFound from "../Share/NotFound";
import Home from "../Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      //   {
      //     path: "/fund",
      //     element: <Fund />,
      //   },
    ],
  },
]);

import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import NotFound from "../Share/NotFound";
import Home from "../Home/Home";
import ComingSoon from "../ComingSoon/ComingSoon";
import AboutPage from "../AboutPage/AboutPage";

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
      {
        path: "/about",
        element: <AboutPage></AboutPage>,
      },
      {
        path: "/coming",
        element: <ComingSoon />,
      },
    ],
  },
]);

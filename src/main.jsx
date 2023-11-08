import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Component/Router/router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="max-w-screen mx-auto text-primary">
      <RouterProvider router={router}></RouterProvider>
    </div>
  </React.StrictMode>
);

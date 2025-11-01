import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./About";

import { createBrowserRouter, RouterProvider } from "react-router";
import Skills from "./Skills";


let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/skills",
    element: <Skills />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />,
  </React.StrictMode>
);

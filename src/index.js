import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./about/About";

import { createBrowserRouter, RouterProvider } from "react-router";
import Skills from "./skills/Skills";
import ThemeProvider from "./ThemeProvider";


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
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

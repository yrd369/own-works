import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/main.css";
import { Route, RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Homepage.jsx";
import Aboutpage from "./pages/Aboutpage.jsx";
import data from "./data/data.json";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: (val) => {
      fetch(data, {
        signal: val.signal,
      });
    },
    children: [
      {
        path: "/about",
        element: <Aboutpage />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "*",
        element: <p>Error 404</p>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

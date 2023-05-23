import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import Body from "./components/Body";
import "./index.css";
import Error from "./components/Error";
import About from "./Navbar/About";
import Contact from "./Navbar/Contact"

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Menu from "./components/Menu";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path:"/contact",
        element:<Contact />
      },
      {
        path:"/menu/:id",
        element:<Menu />
      }
    ],
  },
]);

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);
root.render(<RouterProvider router={appRouter} />);

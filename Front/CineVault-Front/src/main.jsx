import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Movies from "./routes/Movies.jsx";
import Create from "./routes/Create.jsx";
import Update from "./routes/Update.jsx";
import Delete from "./routes/Delete.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "movies",
        element: <Movies />,
      },
      {
        path: "create",
        element: <Create />,
      },
      {
        path: "update",
        element: <Update />,
      },
      {
        path: "delete",
        element: <Delete />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddContact from "./components/addContact";
import EditContact from "./components/editContact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/addcontact",
    element: <AddContact />,
  },
  {
    path: "/:id",
    element: <EditContact />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();

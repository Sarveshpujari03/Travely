import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LogInPage from "./Pages/LogInPage/LogInPage";
import Home from "./Pages/Home/Home";
import CurrentTrip from "./Pages/CurrentTrip/CurrentTrip";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <LogInPage />,
    },
    {
      path: "/currenttrip",
      element: <CurrentTrip />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;

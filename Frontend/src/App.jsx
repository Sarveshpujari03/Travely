import React from "react";
import { createBrowserRouter } from "react-router-dom";
import LogInPage from "./Pages/LogInPage/LogInPage";
import SignUpPage from "./Pages/SignUpPage/SignUpPage";
import Home from "./Pages/Home/Home";

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
      path: "/signup",
      element: <SignUpPage />,
    },
  ]);
  return <div>App</div>;
};

export default App;

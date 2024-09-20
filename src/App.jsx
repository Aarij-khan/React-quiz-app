import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./home";
import Quizpage from "./quizpage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/quizpage",
      element: <Quizpage/>,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

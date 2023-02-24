import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Team from "./pages/Team/Team";
import Footer from "./components/Footer/Footer";
import Page404 from "./pages/PageNotFound/Page404";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <><Navbar/><Home /></>, // Putting the navbar in the pages
    element: <Home />,
  },
  {
    path: "*",
    // element: <><Navbar/><Home /></>, // Putting the navbar in the pages
    element: <Page404 />,
  },
  {
    path: "/projects/",
    element: <Projects />,
  },
  {
    path: "/team",
    element: <Team />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);

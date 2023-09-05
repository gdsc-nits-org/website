import React from "react";
import ReactDOM from "react-dom/client";
import "./App.scss";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Team from "./pages/Team/Team";
import Footer from "./components/Footer/Footer";
import ProjectsShow from "./components/ProjectsCard/ProjectsShow";
import Page404 from "./pages/PageNotFound/Page404";
import Navbar from "./components/Navbar/Navbar";
import Events from "./pages/Events/Events";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/events" element={<Events />} />
        <Route path="/projects">
          <Route index element={<Projects />} />
          <Route path=":projectID" element={<ProjectsShow />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

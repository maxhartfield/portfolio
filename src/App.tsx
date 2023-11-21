import React from "react";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Routes>
        <Route path="/portfolio/Home" element={<Home />}></Route>
        <Route path="/portfolio/Projects" element={<ProjectPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

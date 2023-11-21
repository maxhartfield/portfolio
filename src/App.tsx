import React from "react";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Projects" element={<ProjectPage />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
      <div className="p-3 mb-2 bg-secondary text-white text-center footer">
        {"Contact me: "}
        <a className="text-white" href="mailto:maxhartfield@utexas.edu">
          maxhartfield@utexas.edu
        </a>
      </div>
    </>
  );
}

export default App;

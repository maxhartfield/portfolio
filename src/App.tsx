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
    </>
  );
}

export default App;

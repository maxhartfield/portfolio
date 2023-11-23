import React from "react";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ChessWebsite from "./components/Chess_Website";
import DodgeAdventure from "./components/Dodge_Adventure";
function App() {
  return (
    <>
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Projects" element={<ProjectPage />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/Projects/Chess-Website"
            element={<ChessWebsite />}
          ></Route>
          <Route
            path="/Projects/Dodge-Adventure"
            element={<DodgeAdventure />}
          ></Route>
        </Routes>
      </Router>
      <div className="footer">
        {"Contact me: "}
        <a className="text-white" href="mailto:maxhartfield@utexas.edu">
          maxhartfield@utexas.edu
        </a>
      </div>
    </>
  );
}

export default App;

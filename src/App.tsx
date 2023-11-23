import React from "react";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ChessWebsite from "./pages/ChessWebsite";
import DodgeAdventure from "./pages/DodgeAdventure";
import Achievements from "./pages/Achievements";
import EagleScout from "./pages/EagleScout";
function App() {
  return (
    <>
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Projects" element={<ProjectPage />}></Route>
          <Route path="/Achievements" element={<Achievements />}></Route>
          <Route
            path="/Projects/Chess-Website"
            element={<ChessWebsite />}
          ></Route>
          <Route
            path="/Projects/Dodge-Adventure"
            element={<DodgeAdventure />}
          ></Route>
          <Route
            path="/Achievements/Eagle-Scout"
            element={<EagleScout />}
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

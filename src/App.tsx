import React from "react";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ChessWebsite from "./pages/ChessWebsite";
import DodgeAdventure from "./pages/DodgeAdventure";
import Achievements from "./pages/Achievements";
import EagleScout from "./pages/EagleScout";
import UTCSShell from "./pages/UTCSShell";
import CommunityCoding from "./pages/CommunityCoding";
import Gymnastics from "./pages/Gymnastics";
import ScrollToTop from "./components/ScrollToTop";
import DynamicMemoryAllocator from "./pages/DynamicMemoryAllocator";
import PortfolioWebsite from "./pages/PortfolioWebsite";
import Charm from "./pages/Charm";
import Pintos from "./pages/Pintos";
import CompArch from "./pages/CompArch";
import OS from "./pages/OS";
function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
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
          <Route path="/Projects/CompArch" element={<CompArch />}></Route>
          <Route path="/Projects/OS" element={<OS />}></Route>

          <Route path="/Projects/OS/UTCS-Shell" element={<UTCSShell />}></Route>
          <Route
            path="/Projects/CompArch/Dynamic-Memory-Allocator"
            element={<DynamicMemoryAllocator />}
          ></Route>
          <Route path="/Projects/CompArch/chArm" element={<Charm />}></Route>
          <Route
            path="/Projects/Portfolio-Website"
            element={<PortfolioWebsite />}
          ></Route>
          <Route path="/Projects/OS/Pintos" element={<Pintos />}></Route>
          <Route
            path="/Achievements/Eagle-Scout"
            element={<EagleScout />}
          ></Route>
          <Route
            path="/Achievements/Community-Coding"
            element={<CommunityCoding />}
          ></Route>
          <Route
            path="/Achievements/Gymnastics"
            element={<Gymnastics />}
          ></Route>
        </Routes>
      </Router>
      <br className="spacer" />
      <br className="spacer" />
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

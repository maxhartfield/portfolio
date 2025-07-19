import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Achievements from "./pages/Achievements";
import Internships from "./pages/Internships";
import Resume from "./pages/Resume";
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4 mb-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/*" element={<Projects />} />
          <Route path="/achievements/*" element={<Achievements />} />
          <Route path="/internships/*" element={<Internships />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

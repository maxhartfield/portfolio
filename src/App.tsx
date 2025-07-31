import React from "react";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Achievements from "./pages/Achievements";
import Internships from "./pages/Internships";
import Resume from "./pages/Resume";
import './App.css';
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-wrapper">
      <Router>
        <Navbar />
        <div className="container mt-4 mb-5" style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:projectId" element={<Projects />} />
            <Route path="/projects/:projectId/:subId" element={<Projects />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/achievements/:achievementId" element={<Achievements />} />
            <Route path="/internships" element={<Internships />} />
            <Route path="/internships/:internshipId" element={<Internships />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

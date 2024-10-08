import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleNavLinkClick = () => {
    setIsOpen(false); // Collapse the navbar
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={isOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <div className="navbar-nav mx-auto">
            <NavLink
              className="nav-item nav-link"
              to="/Home"
              onClick={handleNavLinkClick}
            >
              Home <span className="sr-only"></span>
            </NavLink>
            <NavLink
              className="nav-item nav-link"
              to="/Projects"
              onClick={handleNavLinkClick}
            >
              Projects
            </NavLink>
            <NavLink
              className="nav-item nav-link"
              to="/Internships"
              onClick={handleNavLinkClick}
            >
              Internships
            </NavLink>
            <NavLink
              className="nav-item nav-link"
              to="/Achievements"
              onClick={handleNavLinkClick}
            >
              Achievements
            </NavLink>
            <NavLink
              className="nav-item nav-link"
              to="/Resume"
              onClick={handleNavLinkClick}
            >
              Resume
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

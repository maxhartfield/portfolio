import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
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
            {" "}
            {/* Added mx-auto here */}
            <NavLink className="nav-item nav-link" to="/Home">
              Home <span className="sr-only"></span>
            </NavLink>
            <NavLink className="nav-item nav-link" to="/Projects">
              Projects
            </NavLink>
            <NavLink className="nav-item nav-link" to="/Internships">
              Internships
            </NavLink>
            <NavLink className="nav-item nav-link" to="/Achievements">
              Achievements
            </NavLink>
            <NavLink className="nav-item nav-link" to="/Resume">
              Resume
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-center">
        <div className="navbar-nav ">
          <NavLink id="Home" className="nav-item nav-link " to="/Home">
            Home <span className="sr-only"></span>
          </NavLink>
          <NavLink id="Projects" className="nav-item nav-link " to="/Projects">
            Projects
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

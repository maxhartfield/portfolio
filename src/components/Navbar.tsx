import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-center">
        <div className="navbar-nav ">
          <Link className="nav-item nav-link active" to="/Home">
            Home <span className="sr-only"></span>
          </Link>
          <Link className="nav-item nav-link" to="/Projects">
            Projects
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

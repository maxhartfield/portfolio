import React from "react";
function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-center">
        <div className="navbar-nav ">
          <a className="nav-item nav-link active" href="/portfolio/Home">
            Home <span className="sr-only"></span>
          </a>
          <a className="nav-item nav-link" href="/portfolio/Projects">
            Projects
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark justify-content-center fixed-top">
        <div className="navbar-nav ">
          <NavLink className="nav-item nav-link " to="/Home">
            Home <span className="sr-only"></span>
          </NavLink>
          <NavLink className="nav-item nav-link " to="/Projects">
            Projects
          </NavLink>
          <NavLink className="nav-item nav-link " to="/Achievements">
            Achievements
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

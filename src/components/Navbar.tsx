import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const NavigationBar: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname.startsWith(path);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand as={Link} to="/portfolio">Max Hartfield</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              as={Link} 
              to="/portfolio" 
              active={isActive("/portfolio") && location.pathname === "/portfolio"}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/portfolio/projects" 
              active={isActive("/portfolio/projects")}
            >
              Projects
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/portfolio/internships" 
              active={isActive("/portfolio/internships")}
            >
              Internships
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/portfolio/achievements" 
              active={isActive("/portfolio/achievements")}
            >
              Achievements
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/portfolio/resume" 
              active={isActive("/portfolio/resume")}
            >
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar; 